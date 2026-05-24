'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# *Anno Amagium* – Rules in Focus: Trauma Rocks 2

##### Nothing Hits Quite Like a Natural 99

***NOTE: This post is the little sister to our piece on [Dice Rolls and Skill Challenges](/updates/rules-in-focus-trauma-rocks-1), so you may want to start there!***


## Number Stones for Breaking Bones

![Base Strike Bonus Formula](/lp/blog/trauma-rocks-2-number-stones-1.png)

**Like Skill Challenges, Attack Actions are governed by D100 rolls**. The majority of the time, Attack Actions (or just Attacks) refer to ol' fashioned violence—a character swinging a physical weapon or firing a projectile to deal physical damage. There are some supernatural exceptions, like magically powered or controlled weapons (such as foci and telekinetic weapons), but **any time you are using an equipped armament to deal damage to an opponent, you start with your Base Strike Bonus (BSB) and finish by making a Strike Roll**.

The formula for your BSB is as follows:

**Your weapon's current Dominant Attribute score** (typically Arms or Physical for melee implements, and Gears or Physical for ranged options)

**All your Weapon Skill Ranks for that weapon** (gained from martial curricula and traits)

**Your Grip bonus** (specified by how are you holding and controlling your weapon)

**Temporary and Situational Modifiers** (status effects and other conditions)

Once you've added those together, you roll your Strike Roll and add it to your BSB to get your **Total Strike Value**. To determine whether you hit your target, you **subtract their Total Defense Value (the sum of their Standing Defense Value and Armor Defense Value) from your Total Strike Value**.


## Accuracy Dictates Damage

![Resolving Your Strike](/lp/blog/trauma-rocks-2-number-stones-2.png)

**There is no separate roll for damage. Strike Rolls represent both accuracy and execution**. It always struck us as odd (and somewhat frustrating) that other system's attacks could roll for high accuracy (an 18 on a D20 for example) and end up weaker than an attack that "barely hits" (landing a hit with a 3 on a D20, followed by max damage dice rolls).

In **Anno Amagium**, damage is determined by a weapon's stats within accuracy thresholds:

1. **Total Strike Value < Defense Value = Miss** If you fall short of your opponent's defenses, the Attack Misses, dealing no damage

2. **Total Strike Value ≥ Total Defense Value = Graze** If your Total Strike Value meets your opponent's Total Defense Value, or exceeds it by only 4 points, the Attack barely connects, dealing Graze Damage

3. **Total Strike Value ≥ Total Defense Value +5 = Strike** If you exceed your opponent's defense by at least 5 points, your Attack connects properly, dealing Strike Damage

4. **Strike Value ≥ Defense Value +20 = Core** If your Total Strike Value exceeds an opponent's defenses by 20 points or more, you land a direct hit, dealing Core Damage

5. **Natural 95+ = Critical** If the rolled values on the dice faces meet or exceed the weapon's Critical Threshold (95 by default), you land a Critical Hit, doing Core Damage + the weapon's bonus Critical Damage


## Critical Details

Provided the opponent can be legally targeted (meaning it is not incorporeal, invulnerable, or otherwise immune to your weapon's damage type), **Critical Hits will always deal maximum damage, regardless of whether your Total Strike Value exceeds the target's Total Defense Value or not**. Given that this is a rare occurrence (essentially a successful Hail Mary), Fate Masters are encouraged to celebrate these "impossible" attacks with added flavor or benefits. (Maybe the character creates a chink in the target's armor, or discovers the most vulnerable part of their body.)

**The overwhelming majority of weapons have a critical threshold of 95**, meaning that rolling a "natural" 95 to 99 on the dice faces will result in a Critical Strike. There are many weapon class-specific traits that will expand this window, however. Weapons with enchantments or high-quality craftsmanship may also have expanded critical thresholds.

There is a flipside, of course. **If you roll 4 or below on the dice faces, you Critically Miss, even if your Total Strike Value exceeds the Target's Total Defense Value**. At minimum, this will expose you to Exploitative Attacks from all adjacent opponents. FMs may choose other consequences (dropping your weapon, getting it stuck in a tree, having your gun jam, etc.) per their discretion.


## Spicing Your Dicing

![Spicing Your Dicing](/lp/blog/trauma-rocks-2-spicing-dicing.png)

Attack Actions are simple by design, especially compared to our magic system. That said, you can impose difficulty modifiers or spend additional AP on your roll if you want to accomplish something specific with an Attack. Here are some examples:

The overwhelming majority of the time, a standard attack is your best bet, especially if you are looking to inflict relatively safe and reliable physical damage. Many of the special effects above can be achieved with specific spells… or weapon techniques.


## Techniques: Strikes + Magic

![Techniques: Strikes + Magic](/lp/blog/trauma-rocks-2-techniques.png)

Techniques are magical martial arts. They follow the same mechanics as spellcasting, except that before a character makes their Ability Check, they must first land a successful strike roll on their target first. Techniques are some of the most powerful abilities in ***Anno Amagium***, but the double risk of landing an attack and performing an Ability Check means that they generally best-used when the combat's momentum is already trending in your direction.


## Up Next: Curricula Conversations

On Friday, we have a mutual interview between myself (Hank) and our senior game designer, Colin Solloway, about the fundamental building blocks for Anno Amagium characters: Curricula. Whether you are interested in our design process or mechanics, there are some fun insights to be had, so don't miss it!
`;

export default function RulesInFocusTraumaRocks2Page() {
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
