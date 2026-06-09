'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# *Anno Amagium* Deep Lore: A Briefer History of Magic

##### As written by victors, remembered by survivors, and ignored by fools determined to repeat it


## The Anno Amagium TL;DR

This article is intended to provide prospective players enough information to comfortably roleplay in the world of *Anno Amagium* with minimal coaching from your Fate Master. It is the quickest way to get up to speed on our universe.

***Before we begin, it is worth noting that the rulebook (and this account derived from it) reflect a heavily Eurocentric perspective on world history. For our first at-bat, we wanted to follow the adage of writing what we know. Future lore releases will explore many of these same events through the eyes of other cultures, nations, and traditions whose interpretations often differ dramatically from the version presented here.***


## Earth Made Magic

The simplest possible explanation for Anno Amagium's setting is this: **all of human history happened in a version of Earth where everyone has the inborn ability to do magic**. The supernatural has tweaked the details of said history, especially at the beginning and the end of our timeline, but if a meaningful event occurred on our Earth, odds are very strong that it has a cognate event in *Anno Amagium*.

Reliable historical records begin around the rise of Rome. Evidence of earlier periods were obscured by a deliberate campaign of historical erasure known as **The Homeric Redaction** and interpretation of these periods is heavily subject to speculation.


## Three Cataclysms, Three Amagiums

**The most notable additions to human history are the Three Cataclysms.** Each cataclysm resulted in the irreversible destruction of part of the world, and gave rise to **an Amagium**: a global or semi-global human institution that polices magic specifically.

**In the year 0 AA, Homer destroyed the Athenaeum Peninsula, founded the First Amagium, and began his Redaction**

**In the year 1537 AA, the Dread Witch Esmeryl Chaucer destroyed the city of Jerusalem and founded the Second Amagium, ending the Crusader Period**

**During the second half of the Great War, In the year 2290 AA, the Allies dropped a pair of atom-splitting, magical bombs on Hiroshima and Nagasaki, ending the conflict and precipitating the founding of the Third Amagium**


## Present Day

The Third Amagium still governs magic in most of the developed world. It is the largest authority on the supernatural in human history. The laws, traditions, and institutions created in response to the Cataclysms continue to shape everyday life. Magic licenses, supernatural crime, Amagiate Peacekeepers, and the distinction between legal (exempt) and illegal (non-exempt) spells are all products of humanity's long struggle to prevent another catastrophe.

***Most of the existing Anno Amagium lore is written to support campaigns that begin around the year 2360 AA. For comparison, this roughly corresponds to 2015 AD: Post-Cambridge Analytica but Pre-Pandemic.*** (As a quick rule of thumb, converting a date from Anno Domini to Anno Amagium is as simple as adding 345 years.)


## The Erician Dream

***In Anno Amagium, the North American continent is known as Ericia***. While much of its culture, technology, and history will feel familiar, the continent is divided into seven independent nations rather than the United States and Canada.

![Nations of Ericia](/lp/blog/history-img-1.png)

**The Pacific States** dominate the west coast with cutting-edge technology, entertainment, and agriculture. **The New Atlantic Union** controls much of the northeast and serves as a center of finance, culture, and geopolitical clout. The resource-rich **Republic of Texas** remains proudly independent and considerably larger than its real-world counterpart, while **the Gulf Federation** encompasses most of the American South. **The United Tribes of the Erician First Peoples** is a powerful nation founded by indigenous peoples who reclaimed large portions of the continent. To the north sit ***Quebec*** and ***Yukon***, two successor states to Canada.

While these nations have independent politics, economics, and culture, they are ostensibly allied and collectively referred to as Ericia. Most campaigns begin in one of these nations, and understanding their different identities can go a long way toward understanding the people who live there.


## Game. On.

And that's enough to get started! Consider yourself prepared to create your first Anno Amagium character. If you want to run a game as a **Fate Master**, we strongly recommend reading [our lore book](https://drive.google.com/file/d/1imW1jM6Qnpe1yn9UNC3NnmOIJtmfHRw-/view?usp=sharing) for the full picture our world. Stay tuned for more lore posts detailing specific time periods in the near future.
`;

export default function DeepLoreBrieferHistoryOfMagicPage() {
  const isAvailable = new Date() >= new Date('2026-06-08T00:00:00');

  if (!isAvailable) {
    return (
      <main className="w-full h-full min-h-screen bg-[url('/lp/Update/bgroleplay.png')] bg-cover bg-center">
        <div className="w-full h-full min-h-screen bg-black/70 flex items-center justify-center p-8 pt-24">
          <div className="flex flex-col items-center justify-center text-center py-20">
            <h1 className="text-4xl font-semibold text-white mb-4">Coming Soon</h1>
            <p className="text-lg text-white/50">This post will be available on June 8, 2026.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full h-full min-h-screen bg-[url('/lp/Update/bgroleplay.png')] bg-cover bg-center">
      <div className="w-full h-full min-h-screen bg-black/70 flex items-center justify-center p-8 pt-24">
        <div className="w-full max-w-[800px]">
          <MarkdownRenderer text={markdownText} />
        </div>
      </div>
    </main>
  );
}
