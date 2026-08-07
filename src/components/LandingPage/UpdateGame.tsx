'use client';

import Image from 'next/image';
import Link from 'next/link';

const UpdateGame = () => {
  const now = new Date();
  const showHotrodMagic = now >= new Date('2026-05-13T00:00:00');
  const showDevBlog = now >= new Date('2026-05-15T00:00:00');
  const showDeepLoreLaw = now >= new Date('2026-05-18T00:00:00');
  const showAttributes = now >= new Date('2026-05-20T00:00:00');
  const showMovingTargets = now >= new Date('2026-05-22T00:00:00');
  const showCosmology = now >= new Date('2026-05-25T00:00:00');
  const showTraumaRocks = now >= new Date('2026-05-27T00:00:00');
  const showCurricula = now >= new Date('2026-05-29T00:00:00');
  const showBrieferHistory = now >= new Date('2026-06-08T00:00:00');
  const showTurnsInitiative = now >= new Date('2026-06-10T00:00:00');
  const showTalesBrian = now >= new Date('2026-06-12T00:00:00');
  const showWhatMakesAmagia = now >= new Date('2026-06-15T00:00:00');
  const showReactions = now >= new Date('2026-06-17T00:00:00');
  const showTalesDootridge = now >= new Date('2026-06-19T00:00:00');
  const showSettingOverviewArroyo = now >= new Date('2026-06-29T00:00:00');
  const showCharacterCreationCurricula = now >= new Date('2026-07-01T00:00:00');
  const showTalesRuby = now >= new Date('2026-07-03T00:00:00');
  const showSettingOverviewDalhart = now >= new Date('2026-07-22T00:00:00');
  const showCharacterBuildingTraits = now >= new Date('2026-07-29T00:00:00');
  const showTalesLotus = now >= new Date('2026-08-05T00:00:00');

  return (
    <section className="bg-black w-full bg-[url('/lp/Update/bgroleplay.png')] bg-cover bg-center text-white mb-40 relative">
      <div className="pointer-events-none flex !w-full h-[2500px] absolute bottom-0 z-0 bg-gradient-to-t from-black to-transparent md:h-40" />
      <div className="max-w-[1280px] mx-auto mt-[220px] sm:px-6 md:px-0 z-10 relative">
        {/* Título */}
        <h2 className="px-6 text-[40px] leading-[48px] md:text-center sm:text-[36px] md:text-[56px] md:leading-[64px] font-semibold mb-12 md:mb-32">
          Stay on top of <br className="md:hidden" />
          the latest game <br className="hidden md:block" /> updates, news,{' '}
          <br className="md:hidden" /> and reveals right here.
        </h2>

        {/* Cards */}
        <div className="px-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 z-10">
          {/* Card 1 */}
          <Link href="/updates/anno-amagium" className="block">
            <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform transition-all duration-500 ease-out">
              <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                <Image
                  src="/lp/Update/cardUpdate001.png"
                  alt="Anno Amagium"
                  width={400}
                  height={248}
                  className="w-full h-full"
                />
              </div>
              <div className="p-5 md:p-6">
                <p className="text-sm text-gray-400">
                  Hank Whitson • Aug 22, 2024 • 2 min read
                </p>
                <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                  Announcing Anno Amagium
                </h3>
                <p className="text-sm md:text-[16px] text-white/50 font-normal">
                  A true, next-gen tabletop RPG, Anno Amagium: The Roleplaying
                  Game is based on the Anno Amagium Universe, with over five
                  y...
                </p>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/updates/echelon" className="block">
            <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform transition-all duration-500 ease-out">
              <div className="w-full h-[200px] md:h-[248px] relative overflow-hidden">
                <Image
                  src="/lp/Update/cardUpdate002.png"
                  alt="Echelon"
                  width={450}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <p className="text-sm text-gray-400">
                  Hank Whitson • Aug 22, 2024 • 2 min read
                </p>
                <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                  A Cool Introduction to Echelon
                </h3>
                <p className="text-sm md:text-[16px] text-white/50 font-normal">
                  A platform for online/hybrid (digitally augmented) tabletop
                  gaming and digitally publishing original RPG systems.​ Betas
                  are for figuring things out, and not everything will w...
                </p>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/updates/conquesting" className="block">
            <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform transition-all duration-500 ease-out">
              <div className="w-full h-[200px] md:h-[248px]  bg-[url('/lp/Update/cardUpdate003.png')] bg-center bg-cover flex items-center justify-center relative overflow-hidden"></div>
              <div className="p-5 md:p-6">
                <p className="text-sm text-gray-400">
                  Hank Whitson • Aug 22, 2024 • 2 min read
                </p>
                <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                  Here We Go Questin&apos; Again
                </h3>
                <p className="text-sm md:text-[16px] text-white/50 font-normal">
                  Friends. Gamers. Fellow adventurers. We bid you fond greetings
                  and a warm welcome to Echelon. As it stands, this site is
                  merely the avatar of an idea. A promise of things to com...
                </p>
              </div>
            </div>
          </Link>
          {/* Card 4 */}
          <Link href="/updates/join-our-party" className="block">
            <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
              <div className="w-full h-[200px] md:h-[248px] relative overflow-hidden">
                <Image
                  src="/lp/join-cover.png"
                  alt="Echelon"
                  width={450}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <p className="text-sm text-gray-400">
                  Hank Whitson • Nov 18, 2024 • 2 min read
                </p>
                <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                  Join Our Party
                </h3>
                <p className="text-sm md:text-[16px] text-white/50 font-normal">
                  We are looking for a team to take on the world. Heroes wanted.
                </p>
              </div>
            </div>
          </Link>
          {/* Card 5 */}
          <Link href="/updates/eclipsing-escapism" className="block">
            <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
              <div className="w-full h-[200px] md:h-[248px]  bg-[url('/lp/eclipsing-cover.png')] bg-center bg-cover flex items-center justify-center relative overflow-hidden"></div>
              <div className="p-5 md:p-6">
                <p className="text-sm text-gray-400">
                  Hank Whitson • Nov 19, 2024 • 2 min read
                </p>
                <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                  Eclipsing Escapism
                </h3>
                <p className="text-sm md:text-[16px] text-white/50 font-normal">
                  Playing &quot;Make Believe&quot; means more than escaping real life. It
                  is the first step in actualizing your dreams.
                </p>
              </div>
            </div>
          </Link>

          {/* Card 6 - Deep Lore: Magic as Music */}
          <Link href="/updates/deep-lore-magic-as-music" className="block">
            <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
              <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                <Image
                  src="/lp/blog/deep-lore-cover.png"
                  alt="Deep Lore: Magic as Music"
                  width={400}
                  height={248}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <p className="text-sm text-gray-400">
                  Hank Whitson • 5 min read
                </p>
                <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                  Deep Lore: Magic as Music
                </h3>
                <p className="text-sm md:text-[16px] text-white/50 font-normal">
                  An easy introduction to all things magical in the world of
                  Anno Amagium, explained through the lens of music.
                </p>
              </div>
            </div>
          </Link>

          {/* Card 7 - Rules in Focus: Hotrod Magic 1 (May 13) */}
          {showHotrodMagic && (
            <Link href="/updates/rules-in-focus-hotrod-magic-1" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                  <Image
                    src="/lp/blog/hotrod-1-sledge-fist.png"
                    alt="Rules in Focus: Hotrod Magic 1"
                    width={400}
                    height={248}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Hank Whitson • 8 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Rules in Focus: Hotrod Magic 1
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    The basic mechanics and dynamics of Anno Amagium&apos;s magic
                    system.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 8 - Rules in Focus: Hotrod Magic 2 (May 13) */}
          {showHotrodMagic && (
            <Link href="/updates/rules-in-focus-hotrod-magic-2" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                  <Image
                    src="/lp/blog/hotrod-2-exus-shrewd.png"
                    alt="Rules in Focus: Hotrod Magic 2"
                    width={400}
                    height={248}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Hank Whitson • 5 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Rules in Focus: Hotrod Magic 2
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    Adding depth, control, and nuance to the magic system.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 9 - Dev Blog: Making Magic Happen (May 15) */}
          {showDevBlog && (
            <Link href="/updates/dev-blog-making-magic-happen" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                  <Image
                    src="/lp/blog/dev-blog-1-cover.png"
                    alt="Dev. Blog 1: Making Magic Happen"
                    width={400}
                    height={248}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Hank Whitson • May 15, 2026 • 7 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Dev. Blog 1: Making Magic Happen
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    What we wanted out of our magic system and how we&apos;ve gone
                    about getting it.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 10 - Deep Lore: Amagiate Law, Technology, and Culture (May 18) */}
          {showDeepLoreLaw && (
            <Link href="/updates/deep-lore-amagiate-law-technology-culture" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                  <Image
                    src="/lp/blog/deep-lore-law-cover.png"
                    alt="Deep Lore: Amagiate Law, Technology, and Culture"
                    width={400}
                    height={248}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Hank Whitson • May 18, 2026 • 6 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Deep Lore: Amagiate Law, Technology, and Culture
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    How magic shapes daily life and scientific advancement in
                    Anno Amagium.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 11 - Rules in Focus: Attributes at Large (May 20) */}
          {showAttributes && (
            <Link href="/updates/rules-in-focus-attributes-at-large" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                  <Image
                    src="/lp/blog/attributes-core-quadrant.png"
                    alt="Rules in Focus: Attributes at Large"
                    width={400}
                    height={248}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Hank Whitson • May 20, 2026 • 10 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Rules in Focus: Attributes at Large
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    The stats that define characters, and how they shift from
                    moment to moment.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 12 - Dev Blog 3: Moving Targets (May 22) */}
          {showMovingTargets && (
            <Link href="/updates/dev-blog-moving-targets" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                  <Image
                    src="/lp/blog/dev-blog-3-moving-targets-cover.png"
                    alt="Development Blog 3: Moving Targets"
                    width={400}
                    height={248}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Hank Whitson • May 22, 2026 • 7 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Dev. Blog 3: Moving Targets
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    Charting a path from modern board-gaming to traditional
                    TTRPG.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 13 - Deep Lore: Cosmology (May 25) */}
          {showCosmology && (
            <Link href="/updates/deep-lore-cosmology" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                  <Image
                    src="/lp/blog/cosmology-cover.png"
                    alt="Deep Lore: Cosmology"
                    width={400}
                    height={248}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Hank Whitson • May 25, 2026 • 10 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Deep Lore: Cosmology
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    Our place in the universe, its place in the multiverse, and
                    the entities that inhabit them.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 14 - Rules in Focus: Trauma Rocks 1 (May 27) */}
          {showTraumaRocks && (
            <Link href="/updates/rules-in-focus-trauma-rocks-1" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                  <Image
                    src="/lp/blog/trauma-rocks-1-cover.png"
                    alt="Rules in Focus: Trauma Rocks 1"
                    width={400}
                    height={248}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Hank Whitson • May 27, 2026 • 8 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Rules in Focus: Trauma Rocks 1
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    Let&apos;s put the &quot;roll&quot; in roleplaying game.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 15 - Rules in Focus: Trauma Rocks 2 (May 27) */}
          {showTraumaRocks && (
            <Link href="/updates/rules-in-focus-trauma-rocks-2" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                  <Image
                    src="/lp/blog/trauma-rocks-2-cover.png"
                    alt="Rules in Focus: Trauma Rocks 2"
                    width={400}
                    height={248}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Hank Whitson • May 27, 2026 • 7 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Rules in Focus: Trauma Rocks 2
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    Nothing Hits Quite Like a Natural 99.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 16 - Dev Blog: Concerning Curricula (May 29) */}
          {showCurricula && (
            <Link href="/updates/dev-blog-concerning-curricula" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                  <Image
                    src="/lp/blog/curricula-cover.png"
                    alt="Game Designers' Five-on-Five Concerning Curricula"
                    width={400}
                    height={248}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Hank Whitson • May 29, 2026 • 12 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Five-on-Five Concerning Curricula
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    I ask him 5 questions. He asks me 5 questions. The topic?
                    Curricula.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 17 - Deep Lore: A Briefer History of Magic (Jun 8) */}
          {showBrieferHistory && (
            <Link href="/updates/deep-lore-briefer-history-of-magic" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                  <Image
                    src="/lp/blog/history-img-1.png"
                    alt="Deep Lore: A Briefer History of Magic"
                    width={400}
                    height={248}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Hank Whitson • Jun 8, 2026 • 5 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Deep Lore: A Briefer History of Magic
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    As written by victors, remembered by survivors, and ignored
                    by fools determined to repeat it.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 18 - Rules in Focus: Turns & Initiative (Jun 10) */}
          {showTurnsInitiative && (
            <Link href="/updates/rules-in-focus-turns-and-initiative" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                  <Image
                    src="/lp/blog/turns-img-1.png"
                    alt="Rules in Focus: Turns & Initiative"
                    width={400}
                    height={248}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Hank Whitson • Jun 10, 2026 • 4 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Rules in Focus: Turns &amp; Initiative
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    The Hustle and Groove of Fighting Folk.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 19 - Tales from the Table: Brian (Jun 12) */}
          {showTalesBrian && (
            <Link href="/updates/tales-from-the-table-brian" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden bg-[#1a2a3a] flex items-center justify-center">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white/80 text-center px-6">
                    Tales from the Table
                  </h3>
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Brian • Jun 12, 2026 • 10 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Tales from the Table - Brian
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    A round of questions with a long-time Anno Amagium
                    beta-tester.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 20 - Deep Lore: What Makes an Amagia? (Jun 15) */}
          {showWhatMakesAmagia && (
            <Link href="/updates/deep-lore-what-makes-an-amagia" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                  <Image
                    src="/lp/blog/amagia-img-1.png"
                    alt="Deep Lore: What Makes an Amagia?"
                    width={400}
                    height={248}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Hank Whitson • Jun 15, 2026 • 7 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Deep Lore: What Makes an Amagia?
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    To Mage or Not to Mage.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 21 - Rules in Focus: Reactions 101 (Jun 17) */}
          {showReactions && (
            <Link href="/updates/rules-in-focus-reactions" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                  <Image
                    src="/lp/blog/reactions-img-2.png"
                    alt="Rules in Focus: Reactions 101"
                    width={400}
                    height={248}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Hank Whitson • Jun 17, 2026 • 4 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Rules in Focus: Reactions 101
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    Provocation Meets Exploitation.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 22 - Tales from the Table: Dootridge (Jun 19) */}
          {showTalesDootridge && (
            <Link href="/updates/tales-from-the-table-dootridge" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden bg-[#1a2a3a] flex items-center justify-center">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white/80 text-center px-6">
                    Tales from the Table
                  </h3>
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Dootridge • Jun 19, 2026 • 10 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Tales from the Table - Dootridge
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    A round of questions with a long-time Anno Amagium
                    beta-tester.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 23 - Deep Lore: Setting Overview - Arroyo (Jun 29) */}
          {showSettingOverviewArroyo && (
            <Link href="/updates/deep-lore-setting-overview-arroyo" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                  <Image
                    src="/lp/blog/setting-overview-arroyo-map.png"
                    alt="Deep Lore: Setting Overview - Arroyo"
                    width={400}
                    height={248}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Hank Whitson • Jun 29, 2026 • 8 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Deep Lore: Setting Overview - Arroyo
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    All About the City of Bridges and Briars.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 24 - Rules in Focus: Character Creation - Curricula (Jul 1) */}
          {showCharacterCreationCurricula && (
            <Link href="/updates/rules-in-focus-character-creation-curricula" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                  <Image
                    src="/lp/blog/char-curricula-5.png"
                    alt="Rules in Focus: Character Creation - Curricula"
                    width={400}
                    height={248}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Hank Whitson • Jul 1, 2026 • 8 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Rules in Focus: Character Creation - Curricula
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    The Key to Character Building in Anno Amagium.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 25 - Tales from the Table: Ruby (Jul 3) */}
          {showTalesRuby && (
            <Link href="/updates/tales-from-the-table-ruby" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden bg-[#1a2a3a] flex items-center justify-center">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white/80 text-center px-6">
                    Tales from the Table
                  </h3>
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Ruby • Jul 3, 2026 • 9 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Tales from the Table - Ruby
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    A round of questions with a long-time Anno Amagium
                    beta-tester.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 26 - Deep Lore: Setting Overview - Dalhart (Jul 22) */}
          {showSettingOverviewDalhart && (
            <Link href="/updates/deep-lore-setting-overview-dalhart" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                  <Image
                    src="/lp/blog/setting-overview-dalhart-map.png"
                    alt="Deep Lore: Setting Overview - Dalhart"
                    width={400}
                    height={248}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Hank Whitson • Jul 22, 2026 • 7 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Deep Lore: Setting Overview - Dalhart
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    All About the Wyrd West.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 27 - Rules in Focus: Character Building - Traits (Jul 29) */}
          {showCharacterBuildingTraits && (
            <Link href="/updates/rules-in-focus-character-building-traits" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                  <Image
                    src="/lp/blog/char-traits-4.png"
                    alt="Rules in Focus: Character Building - Traits"
                    width={400}
                    height={248}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Hank Whitson • Jul 29, 2026 • 8 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Rules in Focus: Character Building - Traits
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    Turning Points Trump Fine Tuning.
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 28 - Tales from the Table: Lotus (Aug 5) */}
          {showTalesLotus && (
            <Link href="/updates/tales-from-the-table-lotus" className="block">
              <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
                <div className="w-full h-[200px] md:h-[248px] overflow-hidden bg-[#1a2a3a] flex items-center justify-center">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white/80 text-center px-6">
                    Tales from the Table
                  </h3>
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-400">
                    Lotus • Aug 5, 2026 • 11 min read
                  </p>
                  <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                    Tales from the Table - Lotus
                  </h3>
                  <p className="text-sm md:text-[16px] text-white/50 font-normal">
                    A round of questions with a long-time Anno Amagium
                    beta-tester.
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default UpdateGame;
