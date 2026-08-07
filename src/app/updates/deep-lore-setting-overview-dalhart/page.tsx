'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# Deep Lore: Setting Overview - Dalhart

##### All About the Wyrd West


## The Middle of Nowhere Now Magic

Welcome, weary travelers, to the northern reaches of the Republic of Texas. Welcome to a ranching community turned small suburb. Welcome to a town of oddballs and rejects, runaways and outlaws, and good honest folk who wear willful ignorance like a badge of honor, with a healthy side of skepticism toward anyone resembling an outsider.

Welcome to Dalhart. Are you sure you weren't looking for somewhere else?

Dalhart is a small city on the western edge of the Texan Panhandle, just under sixty miles from the United Tribes border along East Apache/Commanche Territory. It covers roughly five square miles and houses just under ten thousand people. Most of its buildings are broad, low, and unmistakably mid-Erician, ranging from the stucco exteriors of the 2320s to the sprawling open-floor-plan homes of the 2350s. Summers are brutally hot, winter nights can dip below –20°F, and locals will become hostile if you try to express that temperature in Metric.

![Map of the town of Dalhart](/lp/blog/setting-overview-dalhart-map.png)

Compared with New Amsterdam or Arroyo, Dalhart is a backwater. It hosts the smallest dedicated Keeping Force chapter in the Republic of Texas, attracts almost no tourists, and is largely ignored by the rest of Ericia. That neglect has cultivated a fierce sense of independence among its citizens—as well as a collective chip on their shoulder whenever an outsider suggests the town might be less important than they believe it is.


## A Foundation of Folly

Dalhart was founded in **2258 AA** by Teximus Thornton the First, beginning a political dynasty that has shaped the city for more than a century. Each generation of Thorntons has attempted to “really make Dalhart a somewhere” through increasingly bizarre civic projects now collectively known as the *Thornton Follies.*

The First believed that fabulous wealth lay beneath the earth south of town. Depending on when he was asked, this treasure consisted of rare metals, precious gems, or Pre-Homeric artifacts. His excavation found none of these things. Instead, it opened a cavernous nest of dire scorpions that nearly destroyed the settlement.

When the Dust Bowl struck in 2275, Teximus Thornton the Second proposed the world's first **cloudmining operation**. By detonating water anima inside clouds, he hoped to produce inexpensive rainstorms, rescue the region's agriculture, and earn Dalhart the attention it deserved. The operation produced no useful rain and consumed roughly one million inflation-adjusted Texan Bucks.

Teximus the Third achieved the dynasty's sole unambiguous success: **Rita Blanca Lake**, originally constructed for flood control and subsequently leased to Dalhart as a recreational area. The lake remains popular for hiking, birdwatching, riding, and other outdoor activities—and remains the only Thornton public works project that nobody has to aggressively defend at town council meetings.


## A Family Tradition of Questionable Innovation

Following a brief interruption in Thornton rule, Teximus Thornton the Fifth won Dalhart's 2330 mayoral election by a landslide. His campaign coincided with the United Tribes joining the Third Amagium, which Thornton claimed would improve relations across the border and transform Dalhart into a thriving tourist destination. Dalhart residents began visiting the Tribes more frequently. The Tribes did not return the favor.

Facing reelection in 2340, the Fifth returned to the family's traditional strategy: magical infrastructure of dubious economic value. He constructed fields for extracting and selling bespoke ether supposedly enhanced by northern Texas' soil and microclimate. The resulting “terroir-based” product has accumulated a considerable backstock while waiting for the market to mature.

In 2358, Thornton announced the revitalization of his great-grandfather's cloudmining facilities. The modern operation uses aerial ether extractors developed with assistance from the Commanche Athenaeum. These devices fire ether-lures into the sky, allow them to accumulate energy, and then return them to the earth. A few are functional, but further construction has been suspended until the project demonstrates that it can produce anything more valuable than another Thornton campaign speech.


## Texas' Smallest Keeping Force Chapter

Dalhart did not receive a permanent Amagiate presence until **2312**, after twelve residents—including seven children—were gruesomely killed by an entity believed to be a Pahant, a violent wendigo variant first identified by the Commanche Tribe. Even then, Austin's Athenaeum declined to fund a proper chapterhouse and assigned only a single three-person venture to the area. The Keeping Force expanded in the early 2340s, adding two more ventures and finally constructing an official chapterhouse on Denrock Avenue.

The chapter remains tiny, and its Peacekeepers must cover an enormous rural territory with limited personnel and resources. Their proximity to the United Tribes introduces another complication: tribal resource rights and law-enforcement authority rotate between different First Peoples, making the border a constantly shifting jurisdictional puzzle.

Being the Wizard Police in Dalhart does not mean patrolling grand Athenaeum campuses or chasing conspiracies through metropolitan skyscrapers. It means handling supernatural livestock incidents, roadside monstrum attacks, magical domestic disputes, suspicious strangers, and whatever crawled out of the Thornton quarry this week—with backup potentially hours away.


## Landmarks, Secrets, and Other Curiosities

Dalhart sits at the intersection of Highways 54, 87, and 385. Its outskirts are dominated by gas stations, fast-food restaurants, truck stops, the reliably busy Bleeding Hart Motel, and the aptly named Dalhart Diner. The southern approach passes the municipal airport, the Thornton facilities, and **Macque Guffin's Junkyard Services and Towing Experience**, a local institution somehow stranger than its name suggests.

Old Dalhart contains city hall, the county courthouse, the police and fire departments, the Keeping Force chapterhouse, and Tizzy's Cantina—the traditional watering hole for local cops and Keepers. New Dalhart is steadily expanding around a rebuilt hospital, a new school, a surprisingly large shopping outlet, and a growing strip of breweries and distilleries known as **Booze Row**.

To the west lies the **Rough End**, where ranchland gives way to desert, abandoned commercial property, trailer parks, biker territory, and an almost unreasonable percentage of the town's already high capita of firearm ownership. Beyond it stands Thornton the First's quarry. The dig exposed an extensive cave system but produced nothing except monstrum. Crude wards, chain-link fencing, and barbed wire surround the site, though none reliably prevent criminals or magical creatures from entering.


## A Stranger Comes to Town

Dalhart is a natural setting for westerns both classic and modern, rural neo-noirs, and stories about isolated communities hiding dangerous secrets. Its small population supports recurring characters and dense personal relationships: everyone knows everyone, grudges become hereditary, and a newcomer can become the subject of town-wide speculation before finishing breakfast.

All manner of supernatural mysteries all fit comfortably here. Themes of independence, isolation, social claustrophobia, and encroaching dread practically emerge from the soil. Certain campaign premises will thrust this unlikely backwater onto the global stage, creating ample opportunities for world-altering revelations and local culture shock. But Dalhart can also support lower-stakes stories and broad comedy. Its eccentric residents, civic dysfunction, failed magical industries, and overworked Peacekeepers provide ample opportunities to explore the mundane absurdities of life in a world where magic is universal but competence is not.

Dalhart is also the most geographically structured of Anno Amagium's three introductory settings. Its neighborhoods, roads, civic institutions, and major landmarks are clearly established, giving Fate Masters a substantial ready-made foundation while leaving plenty of empty desert in which to bury their own secrets.

*If you are interested in learning more about Dalhart, we strongly recommend reading [our Universe Guide & Lore](https://drive.google.com/file/d/1E4zX8y6NWslA85jUoufq4K4wN0sL3vRb/view?usp=sharing), which covers the town, its history, and its many questionable civic achievements in greater detail.*
`;

export default function DeepLoreSettingOverviewDalhartPage() {
  const isAvailable = new Date() >= new Date('2026-07-22T00:00:00');

  if (!isAvailable) {
    return (
      <main className="w-full h-full min-h-screen bg-[url('/lp/Update/bgroleplay.png')] bg-cover bg-center">
        <div className="w-full h-full min-h-screen bg-black/70 flex items-center justify-center p-8 pt-24">
          <div className="flex flex-col items-center justify-center text-center py-20">
            <h1 className="text-4xl font-semibold text-white mb-4">Coming Soon</h1>
            <p className="text-lg text-white/50">This post will be available on July 22, 2026.</p>
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
