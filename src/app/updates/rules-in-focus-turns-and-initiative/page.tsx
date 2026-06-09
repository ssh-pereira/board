'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# *Anno Amagium* Rules In Focus: Turns & Initiative

##### The Hustle and Groove of Fighting Folk


## Taking Turns

In *Anno Amagium* combat proceeds in team-wide turns. Restated, rounds alternate between entire roster of various factions on the battlefield. At its simplest, you have an us vs them (opponents vs. party) situations, while more complex circumstances may factor in neutral parties and allies as well.

![Combat Initiated! Select Your Initiative Mode](/lp/blog/turns-img-1.png)

***Experience has shown us that team-wide turns engage players' attention more effectively than traditional one-by-one initiative orders***. It helps minimize the back and forth between the players and FM which speeds up combat by a surprising degree. More importantly, team turns enable reliable cooperation between team members, fostering complex party-based plays.

Collaboration helps characters capitalize on their chosen strengths while also allowing for strategic pivots if circumstances demand them. Communication is not to be taken for granted, however! Players must be affected by spells that enable telepathy or spend AP and RP to speak freely in-universe.


## The ABCs of Initiative

When combat begins, the Fate Master asks the party to declare their **Initiative Mode**. Rather than luck determining how aware your character is, you can choose how they are approaching their current situation:

***Aggressive:*** Your character is all-in and they ain't being shy about it. This mode maximizes your available Action Points (**7AP**) and provides a bare minimum of Reaction Points (**2RP**), and no bonuses to your Flat Damage Reduction (**0FDR**).

***Balanced:*** Your character tries to keep a level head without being a coward. This strikes a middle ground between offense, defense, and reactivity. Players receive a healthy amount of Action Points (**5AP**), a respectable reserve of Reaction Points (**3RP**), and have a smattering of Flat Damage Reduction as well (**1FDR**)

***Cautious:*** Your character has embraced cowardice! You have just enough Action Points to make a Move Action (**3AP**) but you are most likely waiting for your moment with Reaction points (**4RP**) and trying to stay alive at all costs, imparting the strongest FDR bonus a player can receive (**2FDR**).

Once every player has selected their initiative modes, turns commence in blocks by mode. Within each mode, order of play is first-declared, first-served. Any "I want to go first" disputes or other ambiguities are settled by an unmodified D100 roll-off.

![Initiate Combat](/lp/blog/turns-img-2.png)

**The goal of the Initiative Mode system is to champion tactical decision making, rooted in how characters would plausibly react to the current situation.** Oftentimes, turn-by-turn initiative order systems see people "hanging back" or delaying actions without any benefit—or minimal consequences—depending on the circumstances. So, we decided that aggression should yield increased action economy at the expense of survivability, and caution should kneecap your initial options while allowing for a host of counter-spells and trap-like reactions.


## Up Next: AP and RP

With the core game loop's framework squared away, next week we will be diving into the details of what you can do during a turn (AP) and what unique reactions you have access to in your off-turn. Don't miss it!
`;

export default function RulesInFocusTurnsAndInitiativePage() {
  const isAvailable = new Date() >= new Date('2026-06-10T00:00:00');

  if (!isAvailable) {
    return (
      <main className="w-full h-full min-h-screen bg-[url('/lp/Update/bgroleplay.png')] bg-cover bg-center">
        <div className="w-full h-full min-h-screen bg-black/70 flex items-center justify-center p-8 pt-24">
          <div className="flex flex-col items-center justify-center text-center py-20">
            <h1 className="text-4xl font-semibold text-white mb-4">Coming Soon</h1>
            <p className="text-lg text-white/50">This post will be available on June 10, 2026.</p>
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
