'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# *Anno Amagium* – Rules in Focus: Trauma Rocks 1

##### Let's put the "roll" in roleplaying game

***NOTE: We recommend you browse [this post on our attribute system](/updates/rules-in-focus-attributes-at-large) if you haven't already, as it will clear up a lot of potential questions!***


## Shootin' the Bones

Whenever you are doing something physical in Anno Amagium, you will be rolling two 10-sided Die, or a D100 roll to resolve it. Sometimes you will roll dice when you are using magical skills (a delicate piece of telekinetic sorcery or hacking into a computer with runic coding), but you usually draw cards to cast spells.

There are two primary types of rolls you will be making on a regular basis.

**Skill Challenge Rolls determine how well you apply your skills to a challenge**

**Strike Rolls determine your Attack Actions' accuracy and effectiveness**

We get into Strike Rolls in our next post. For now, let's talk about Skills and Skill Challenges!


## Skill Challenges in 4 Easy Steps

Anno Amagium's skill challenge system is built around the concept of negotiation. Any time a character attempts an action that requires a non-trivial amount of effort, care, or attention, the FM can make them perform a Skill Challenge to resolve how effective they are. Alternatively, if a player wants to leverage a specific skill to do something clever or unusual, they may voluntarily attempt a Skill Challenge. In both cases, the first steps are the same:

1. **The Fate Master determines Challenge Threshold and a Dominant Attribute** to serve as the basis for the challenge. If a player is attempting a Skill in combat, or shortly after casting a spell, the Skill Challenge will be affected by their currently slotted Ability Cards.

![FM Determines Challenge Threshold](/lp/blog/trauma-rocks-1-fm-determines.png)

2. **Players then nominate a Lead Skill and up to 4 supporting, pertinent skills**. A lead skill determines their primary approach to a skill challenge. Players are encouraged to lobby for unusual applications and combinations of skills.

![Players Nominate a Lead Skill](/lp/blog/trauma-rocks-1-nominate-skill.png)

3. **The FM weighs and approves the value of the nominated skills**, based on their inherent applicability, and creative arguments from players. Oftentimes, skills will only be partially applicable to the problem. In those cases, the FM may reduce the total number of ranks that skill contributes.

![FM Weighs and Approves the Skills](/lp/blog/trauma-rocks-1-fm-weighs.png)

4. **Once their total Skill Bonus (Dominant Attribute + Skill Rank Bonuses) has been approved, the player performs a Skill Challenge Roll (D100)**. Their total score is measured against the Challenge Threshold set by the FM to determine the outcome of the skill.

![Player Performs a Skill Challenge Roll](/lp/blog/trauma-rocks-1-skill-roll.png)

Skill ranks are gained from Curricula—one of the most important building blocks for character creation, which we will be covering in the near future. The more ranks a character has in a skill, the greater their base efficacy.

Fate Masters do not need to tell their players which skills are the most pertinent, or whether practicing one skill versus another is potentially dangerous. If you ask your party members to investigate a transparent liquid at a crime scene, and some smartass says "I want to use my 25 Ranks in "Gastronomy" as my Lead Skill to identify it via taste," let them go for it! Who knows? They might roll high enough to determine it's a debilitating neurotoxin. Whether they have the chance to pass that info along to their party is up to you.


## Did you say 'Gastronomy?' …How many skills are there?

![How Many Skills Are There?](/lp/blog/trauma-rocks-1-how-many-skills.png)

Anno Amagium was designed so that players can take skill ranks in anything. After the first level (where characters are restricted to gaining skills earned from Curricula), players can elect to spend character building resources to gain Ranks in anything they would like. Basketry. Blood magic. Bomb Defusal. Bunraku Puppetry. Even things that don't start with the letter B! There are diminishing returns in terms of how many Ranks you can buy, but if you can dream it up and are willing to invest in it, you can be an expert in it.

Certain skills are going to have more applicability for adventuring and magic detective work. But the more broadly applicable a skill is, the more ranks of it are required to make a meaningful difference in a check. For example. 10 points of "Science" can apply to a huge variety of challenges. But when it comes to analyzing a vivisection to discern a monster's weakness, FMs would give it a lower weighted bonus than "Biology." And having just 5 Ranks of something as specific as "Monster Biology" would be even more effective. Additionally, while having Ranks in something as universally helpful as "Talking" is always good, you are less likely to find many ranks of those broad and 'normal' skills if you are relying on curricular unlocks alone.


## Flexible, Contested, and Hazard Challenges

![Flexible, Contested, and Hazard Challenges](/lp/blog/trauma-rocks-1-flexible-contested.png)

Sometimes, a benevolent FM may give a party a **Flexible Skill Challenge, allowing players to choose which dominant attribute they want their characters to use**. Let's say a player is attempting to bluff their way through a sophisticated topic of conversation. The character could rely on tricky language and cunning to bluff their way through (using Masks as a Dominant Attribute), or they could rely on their intellect and memory to supplement their ruse (which would make Mental the Dominant Attribute). Flexible Checks always present players with only two options.

When two characters (or a character and an NPC) are going directly head-to-head, they will roll **Contested Skill Challenges—essentially "roll-offs" against the opponent involved**. Grappling is probably the most common example of a skill that is regularly contested, but an FM can spring Contested Challenges on players in any 1v1 scenario, inside of combat or out. (If multiple players are competing or attempting the same challenge simultaneously, the skill challenges are resolved on an individual basis in sequence of success.)

Finally, players will periodically be called to make Hazard Challenges, which work like any other skill challenge (dominant attribute + lead skill ranks + pertinent skill ranks + D100 roll), except that the player can only rely on one of their four Hazard Attributes. **Hazard Challenges are most common during combat, but they can be triggered at any time**. Attention and Intuition Hazard Challenges can be very important in the context of roleplay, especially when dealing with untrustworthy people.


## Why D100s?

We could have done another customizable Skill Challenge deck instead of dice, but our game is complex enough already. Besides, dice are just… fun. And **0-99 just felt right.** "How well your character does whatever they are doing, ranked on a hundred-point scale," is an intuitive approach to scoring execution. It allows for a tremendous range of potential outcomes, dovetailing with our decision to prioritize scales of success over pass-fail binaries. While there is great fun to be had with various combinations of dice (both standard and strange), we decided to have combat and adventuring revolve around a single roll type for ease of learning.


## Up Next: Strike Rolls

Still with us? Up for a double feature? Our second dice rollin' post on Strike rolls is [out now](/updates/rules-in-focus-trauma-rocks-2), and it will teach you how things like accuracy, damage, and critical hits work. Come Tuesday, we'll be talking about the World History of Anno Amagium, and next Friday we are gonna start our deep dive into character creation. Stay frosty, friends.
`;

export default function RulesInFocusTraumaRocks1Page() {
  const isAvailable = new Date() >= new Date('2026-05-27T00:00:00');

  if (!isAvailable) {
    return (
      <main className="w-full h-full min-h-screen bg-[url('/lp/Update/bgroleplay.png')] bg-cover bg-center">
        <div className="w-full h-full min-h-screen bg-black/70 flex items-center justify-center p-8 pt-24">
          <div className="flex flex-col items-center justify-center text-center py-20">
            <h1 className="text-4xl font-semibold text-white mb-4">Coming Soon</h1>
            <p className="text-lg text-white/50">This post will be available on May 27, 2026.</p>
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
