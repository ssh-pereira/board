'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# *Anno Amagium* – Development Blog 3: Moving Targets

##### Charting a path from modern board-gaming to traditional TTRPG


## A Cautionary Tale

When you are designing a game that has mechanical systems in common with comparable games, you need to weigh the novelty of doing something differently against the convenience and accessibility of following familiar conventions. *Anno Amagium: The RPG*'s movement system went through several iterations before we finally settled on traditional grid-based maps. In this dev blog, we'll detail the decisions and issues that shaped that process.


## Board Game Roots

The predecessor to *Anno Amagium: The RPG* was a board game set in the same world. Its earliest incarnation used a node-based movement system similar to Restoration Games' *Unmatched* series, but it was much cruder, without the clever color-coded zones to moderate range, elevation changes, and unidirectional shortcuts. Without those flourishes, movement felt very abstract and strategically unsatisfying. Furthermore, at 6 players or more, the board felt extremely congested, while it felt barren with parties of 3 or fewer.

### Unmatched Adventures Map

![Unmatched Adventures Map](/lp/blog/moving-targets-unmatched.png)


## Asymmetrical Areas

The first major evolution was to move from a fixed board to scenario specific maps. In that version of the game, we directly modeled movement after Martin Wallace's excellent team-based battler, *Wildlands* (published by Osprey Games). Rather than a constellation of nodes or set squares, maps are divided up into "areas" of variable sizes. Narrow and cluttered passages are arranged into smaller, more granular section of the map, as navigating obstacles would be more difficult than traversing larger, open areas. The trade-off is that areas with obstacles provide more in the way of cover, and less "capacity" for multiple units to occupy the same space.

### Wildlands Map

![Wildlands Map](/lp/blog/moving-targets-wildlands.png)

It is an innovative alternative to traditional movement that sounds brilliant for a TTRPG on paper. In practice, we burned dozens of hours manually subdividing grid-less battle maps into a number of different sized areas. Furthermore, the results were subject to constant line-of-sight conundrums (seeing how our maps weren't designed with those considerations in mind, unlike *Wildlands*' well-tuned arenas). But range and AOE were the real dealbreakers.

Trying to figure out how many areas an explosive spell would realistically occupy was a headache, but probably a surmountable challenge. Projectiles, however, were nightmarish. Firing weapons or spells would yield tremendously different ranges depending on whether you were shooting in a hallway versus an open field connected to other open areas. For example, a gun capable of firing "2 areas" might cover 7-meters in a congested environment, while the same "2 areas" could cover a quarter of the entire map in an open area. It was unintuitive, inconsistent, and ultimately frustrating for players.


## Do we even need movement?

There was a moment where we considered doing away with movement in combat altogether, framing fights like a turn-based RPG or Slay the Spire. The idea was to use gridded battle maps for exploration (which we deemed essential for dungeon diving scenarios) and combat would transport the party into an abstract non-arena for turn taking. But this concept never even made it to testing. The primary advantage was drastically speeding up combat… but it would come at the cost of tremendous strategic depth and immersion. Going the traditional route simply had too many benefits to ignore.


## Hip to be Square

To begin with, we were already developing a square mapping system for the sake of exploration. And if you are going through the trouble of developing an entire VTT, you might as well get all the strategic depth and benefits that come with it. These are the main gameplay features that square grids naturally enable:

![Hip to be Square](/lp/blog/moving-targets-hip-to-be-square.png)

- **Intuitive movement and measurement (1 Square = 1 Square Meter)**
- **Compatible with the millions of pre-existing battle maps used by other titles**
- **Enables elaborate AOE configurations (auras, explosions, etc.)**
- **Incorporates push, pull, immobilization and teleportation mechanics**
- **Imposes positional requirements and bonuses (directional facings and flanks)**
- **Allows traps and variable terrain types to influence combat as well as exploration**
- **Comparative ease of digital development**

In the end, having a familiar touchstone for something as fundamental as movement was the right call. Our system already has its fair share of fresh mechanics and enough complexity to keep players occupied. Reinventing the wheel, especially in a way that didn't directly serve the game's core systems, was a needless layer of complication.
`;

export default function DevBlogMovingTargetsPage() {
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
