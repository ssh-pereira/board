'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# Rules in Focus: Hotrod Magic 2

##### Adding depth, control, and nuance to the magic system


## A Brief Recap

We recommend you **read our first post on Anno Amagium's magic system** if you haven't already, but to sum things up in brief:

- **Each spell is governed by a Dominant Attribute**
- **When a character casts spells, they perform an Ability Check by drawing an Ability Card which (may) modify their Dominant Attribute score**
- **The character's Dominant Attribute score after the ability check determines whether the spell fails, succeeds passably, succeeds powerfully, or critically succeeds**
- **Up to three Ability Cards can modify a character's attributes at a given time**
- **Each time a character uses magic, they gain magical momentum, or exus**
- **At certain thresholds, a character's exus score will makes spells more costly, powerful, and dangerous by adding extra effects to the spell's base outcome**
- **Going over your character's maximum exus limit has severe consequences—in terms of both mechanics and storytelling**

Now you are up to speed!


## Hitting the Boost

While the Ability Check and Exus systems create a fun risk-reward dynamic, having an endless well of equally fabulous powers to draw from would actually make the system less magical. So what if certain powerful spells required extra ammunition? And while we are what-if-ing, what if this extra ammunition had special properties that influenced a spell's effects?

Enter animate spirits, or **anima** for short. Anima fuel powerful magical spells called **Contracts** and non-combat spells known as **Rituals**. (Structured magic that does not require anima is considered **Sorcery**.) Certain spells (like Fireball, detailed below) can be cast as Contracts or Sorceries, with an anima yielding additional benefits, and/or reduced AP costs. While anima do introduce a resource management mechanic (similar to MP or Spell Slots), anima are commodities rather than a currency with distinguishing characteristics of their own.

![Fireball Spell Block](/lp/blog/hotrod-2-fireball.png)

Anima give players the option to break the glass on expensive-to-cast spells that can turn the tide of battle, offering decisive opportunities to capitalize on fortunate (or merely uncommon) momentum in their slotted Ability Cards. The results are the sort legendary plays (and abject disasters) that go down in gamers' memories.


## Pumping the Brakes

When players need to keep themselves from going over their exus limit, they can take Focus Actions to reduce their current exus level, by selecting a **Focus Action**.

![Exus Symbol and Shrewd Card](/lp/blog/hotrod-2-exus-shrewd.png)

While Ability Checks slot a card into the character's sheet, **Focus Checks** draw an Ability Card, check the card's **Exus** value to reduce (or raise) the character's Exus Level accordingly, and then immediately discard it. In terms of action economy, Focus Actions are relatively cheap (only 2AP). Depending on the character's initiative mode (which determines a player's total AP in a given turn), they can fit in a Focus Action with a Move Action, Attack Action, or even a moderately complex Ability. Players can even use frequent Focus Checks to potentially "skip" over undesirable Ability Cards through skillful use of spells (Divination, anyone?) or through sheer luck.


## The Ejector Seat

But what about bad luck? Players can suffer a string of unfortunate pulls on Ability Checks—just like many TTRPG players have nights (or career-long stretches) of awful luck with the dice. To alleviate the frustration of drawing back-to-back Inept Cards or similar edge cases, characters can perform a **Center Action** to clear all their currently slotted cards.

![Ability Card Slots and Center Action](/lp/blog/hotrod-2-ejector-seat.png)

Just like that, the playing field is even again. However, centering is a relatively expensive action (at 3 action points), so it is generally better to pivot rather than "digging your heels in" and trying to force a particular spell with repeated Center Actions.


## Extra Trim

While we believe these systems achieve a satisfying and flexible level of complexity, certain curricula have access to special resources, cross-reference charts, and other unique mechanics to make them feel meaningfully distinct and thematically appropriate. Leximancers, *Anno Amagium*'s runic programmers/lawyers, can apply clauses to allies and opponents to modify the ways they are affected by magic. Wrathcasters function as wizard-berserkers, who accrue points of Rage as they take damage. Faen spellcasters can call in favors from the Fair Folk depending on their standing with their seasonal court. Religious spellcasters can be empowered by the holy spirit, subject to karma, or achieve Zen-like focus. We believe these extra embellishments give the system the depth a truly magical world deserves.


## Up Next: Attributes

There you have it. Anno Amagium's magic system, in all its splendor. Next week, we'll detail the specifics of Anno Amagium's character Attributes. If you can't wait 'til Friday, [read the Core Rulebook here](https://drive.google.com/file/d/1FnMdIi-ldzpRCoIsQlrpFAJDpFjZnGsz/view?usp=sharing)! And on Tuesday we're pushing another Deep Lore post explaining amagiate technology, culture, and law. Stay tuned!
`;

export default function RulesInFocusHotrodMagic2Page() {
  const isAvailable = new Date() >= new Date('2026-05-13T00:00:00');

  return (
    <main className="w-full h-full min-h-screen bg-[url('/lp/Update/bgroleplay.png')] bg-cover bg-center">
      <div className="w-full h-full min-h-screen bg-black/70 flex items-center justify-center p-8 pt-24">
        <div className="w-full max-w-[800px]">
          {isAvailable ? (
            <MarkdownRenderer text={markdownText} />
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-20">
              <h1 className="text-4xl font-semibold text-white mb-4">Coming Soon</h1>
              <p className="text-lg text-white/50">This post will be available on May 13, 2026.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
