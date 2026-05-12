import { MDXProvider } from '@mdx-js/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import MarkdownProcessor from './markdown-processor';

interface MarkdownRendererProps {
  text: string;
}

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function MarkdownRenderer({ text }: MarkdownRendererProps) {
  const [activeHeading, setActiveHeading] = useState<string>('');
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRefs = useRef<{ [key: string]: HTMLElement }>({});

  // Extract headings from markdown text
  const headings = useMemo<Heading[]>(() => {
    if (!text) return [];

    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const extractedHeadings: Heading[] = [];
    let match;

    while ((match = headingRegex.exec(text)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

      extractedHeadings.push({
        id,
        text,
        level,
      });
    }

    return extractedHeadings;
  }, [text]);

  // Calculate which headings should be active (progress tracking)
  const activeHeadingIndex = useMemo(() => {
    return headings.findIndex((heading) => heading.id === activeHeading);
  }, [headings, activeHeading]);

  const isHeadingActive = (index: number) => {
    return activeHeadingIndex >= 0 && index <= activeHeadingIndex;
  };

  // Get margin left based on heading level for hierarchy
  const getMarginLeft = (level: number) => {
    switch (level) {
      case 1:
        return 'ml-0';
      case 2:
        return 'ml-2';
      case 3:
        return 'ml-4';
      case 4:
        return 'ml-6';
      case 5:
        return 'ml-8';
      case 6:
        return 'ml-10';
      default:
        return 'ml-0';
    }
  };

  // Truncate text if longer than max width
  const truncateText = (text: string, maxLength: number = 20) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + '...'
      : text;
  };

  // Enhanced markdown processor with IDs
  const enhancedMarkdownProcessor = useMemo(
    () => ({
      ...MarkdownProcessor,
      h1: (props: any) => {
        const id = props.children
          ?.toString()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '');
        return (
          <h1
            id={id}
            ref={(el: HTMLHeadingElement) => {
              if (el && id) headingRefs.current[id] = el;
            }}
            className="text-4xl font-semibold text-white mb-4"
            style={{ scrollMarginTop: '80px' }}
            {...props}
          />
        );
      },
      h2: (props: any) => {
        const id = props.children
          ?.toString()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '');
        return (
          <h2
            id={id}
            ref={(el: HTMLHeadingElement) => {
              if (el && id) headingRefs.current[id] = el;
            }}
            className="text-3xl font-semibold text-white mb-3"
            style={{ scrollMarginTop: '80px' }}
            {...props}
          />
        );
      },
      h3: (props: any) => {
        const id = props.children
          ?.toString()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '');
        return (
          <h3
            id={id}
            ref={(el: HTMLHeadingElement) => {
              if (el && id) headingRefs.current[id] = el;
            }}
            className="text-2xl font-medium text-white mb-3"
            style={{ scrollMarginTop: '80px' }}
            {...props}
          />
        );
      },
      h4: (props: any) => {
        const id = props.children
          ?.toString()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '');
        return (
          <h4
            id={id}
            ref={(el: HTMLHeadingElement) => {
              if (el && id) headingRefs.current[id] = el;
            }}
            className="text-xl font-medium text-white mb-2"
            style={{ scrollMarginTop: '80px' }}
            {...props}
          />
        );
      },
      h5: (props: any) => {
        const id = props.children
          ?.toString()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '');
        return (
          <h5
            id={id}
            ref={(el: HTMLHeadingElement) => {
              if (el && id) headingRefs.current[id] = el;
            }}
            className="text-lg font-medium text-white mb-2"
            style={{ scrollMarginTop: '80px' }}
            {...props}
          />
        );
      },
      h6: (props: any) => {
        const id = props.children
          ?.toString()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '');
        return (
          <h6
            id={id}
            ref={(el: HTMLHeadingElement) => {
              if (el && id) headingRefs.current[id] = el;
            }}
            className="text-base font-medium text-white mb-2"
            style={{ scrollMarginTop: '80px' }}
            {...props}
          />
        );
      },
    }),
    []
  );

  // Intersection observer for scroll tracking
  useEffect(() => {
    if (!contentRef.current || headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting heading
        const firstIntersecting = entries.find((entry) => entry.isIntersecting);

        if (firstIntersecting) {
          const element = firstIntersecting.target as HTMLElement;
          setActiveHeading(element.id);
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0.1,
      }
    );

    // Observe all headings
    Object.values(headingRefs.current).forEach((heading) => {
      if (heading) observer.observe(heading);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (headingId: string) => {
    const element = headingRefs.current[headingId];
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const allowedElements = [
    'p',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'strong',
    'u',
    'ul',
    'ol',
    'li',
    'blockquote',
    'a',
    'code',
    'pre',
    'hr',
    'table',
    'thead',
    'tbody',
    'tr',
    'th',
    'td',
    'img', // Added img to allowed elements
  ];

  if (!text?.trim()) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-muted-foreground italic">No content to preview</p>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {headings.length > 0 && (
        <div className="hidden lg:block absolute right-full top-0 mr-12 w-[200px]">
          <div className="sticky top-24">
            <nav className="flex flex-col gap-0.5">
              {headings.map((heading, index) => (
                <button
                  key={heading.id}
                  className="text-left cursor-pointer py-1 transition-colors duration-200 w-full overflow-hidden"
                  onClick={() => scrollToHeading(heading.id)}
                >
                  <span
                    className={`text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsis block transition-colors duration-200 ${getMarginLeft(
                      heading.level
                    )} ${
                      isHeadingActive(index)
                        ? 'text-[#00B4FF]'
                        : 'text-white/40 hover:text-white/70'
                    }`}
                  >
                    {heading.text}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Content */}
      <div ref={contentRef} className="w-full">
        <MDXProvider components={enhancedMarkdownProcessor}>
          <ReactMarkdown
            components={enhancedMarkdownProcessor}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            allowedElements={allowedElements}
          >
            {text}
          </ReactMarkdown>
        </MDXProvider>
      </div>
    </div>
  );
}
