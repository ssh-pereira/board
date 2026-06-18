'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# *Anno Amagium* Rules In Focus: Reactions 101

##### Provocation Meets Exploitation


## What Are Reactions?

Reactions are specific Actions that an entity can play during their off-turn, in response to another entity performing a specific kind of trigger Action. These triggering actions are said to "provoke" Reactions, as described by their descriptive text. ***Provocations follow the formula: "As a Reaction to [Provoking Action], you may do [XYZ]."*** Reactions always use up Reaction Points (whose pool is determined by the character's declared **[Initiative Mode](/updates/rules-in-focus-turns-and-initiative)**) and sometimes have Exus gains or special resource requirements.

![Reactions Panel](/lp/blog/reactions-img-2.png)

From a design perspective, Reactions keep players engaged even when it is not their turn, and unlock a host of strategic options for mitigating damage and launching counter offensives. Most martial curricula trees teach Reactions that allow characters to parry incoming melee attacks with specific weapons, and more advanced curriculum also allow for ripostes. Many magical curricula feature spell-disrupting counter abilities. Some curricula even feature supportive Reactions. For example, Advanced Animathurge allows characters to augment their party members' Contract magic in some fun ways.


## The Universal Reaction: Exploitative Attacks

Most combat entities, including the overwhelming majority of opponents, are capable of the following Reaction:

![Exploitative Attack](/lp/blog/reactions-img-1.png)

The most common trigger for Exploitative Attacks is movement. **When a combatant moves away from an adjacent opponent, they provoke Exploitative Attacks from every hostile entity they are moving away from.** Numerous traits, curricula, and opponent abilities offer movement abilities that are explicitly exempt from this penalty, but barring those exceptions, ***an Exploitative Attack works the same as a normal Attack or Ability Action, except the character pays the cost from their RP pool instead of their AP pool.*** That means smaller, lighter weapons can perform weaker Reactive Attacks more reliably, while Super-Heavy and Colossal weapons may not have the resources to swing at all in more pro-active initiative modes. But all characters can also use (relatively low-cost) magic as a reaction as well, opening up a constellation of options in combat.


## Where Does the Madness End?

Reactions cannot provoke subsequent Reactions from their targets, because that lies the way of absolute madness. Furthermore, entities cannot use more than one reaction in response to the same provoking action. However, multiple characters (or opponents) can react to a single provoking action if they are within range and meet other necessary requirements. If you gang up on an opponent 3-to-5 people deep, and the target tries to casually duck out of the conversation, they are going to feel it in the morning. Meaning: movement becomes exponentially more dangerous when hostiles have a numbers advantage.
`;

export default function RulesInFocusReactionsPage() {
  const isAvailable = new Date() >= new Date('2026-06-17T00:00:00');

  if (!isAvailable) {
    return (
      <main className="w-full h-full min-h-screen bg-[url('/lp/Update/bgroleplay.png')] bg-cover bg-center">
        <div className="w-full h-full min-h-screen bg-black/70 flex items-center justify-center p-8 pt-24">
          <div className="flex flex-col items-center justify-center text-center py-20">
            <h1 className="text-4xl font-semibold text-white mb-4">Coming Soon</h1>
            <p className="text-lg text-white/50">This post will be available on June 17, 2026.</p>
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
