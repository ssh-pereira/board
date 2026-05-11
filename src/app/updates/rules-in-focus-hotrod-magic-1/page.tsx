'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# Rules in Focus: Hotrod Magic 1

##### The basic mechanics and dynamics of Anno Amagium's magic system

***If you're the type who prefers to be familiar with the storytelling context of game systems before diving into the hard rules, read [this Deep Lore post](/updates/deep-lore-magic-as-music) first. It delineates Anno Amagium's different types of magic in brief, defines related terms, and offers other narrative goodness.***


## Taking Magic to the Track

Magic is the central focus of Anno Amagium, not only as the premise of the world building, but as the heart of the game. It is the core of the combat system. It is also an invaluable aspect of adventuring and roleplaying. Rephrased: Magic is the best toy. It is our Shiny Red Hotrod—the thing in the game that is most fun to play with.


## The Chassis

A racecar isn't cool unless it looks cool, which is why we've gone through iteration after iteration on the spell UX. We will detail the various iterations of our spell blocks in a future development post, but for now, check out this annotated "Clever Flames" spell.

![Annotated Clever Flames Card](/lp/blog/hotrod-1-clever-flames.png)

- **Title:** What it says on the tin
- **Tags:** Defines the spell's type, range, targeting criteria, and area-of-effect
- **Description:** Explains the spell's core mechanics, lists any non-standard requirements, and offers a touch of flavor
- **Ability Check:** Specifies the spell's dominant attribute, any special bonuses, and the total of your current dominant attribute and said special bonuses
- **Base Ability Costs:** Lists how much AP you must pay and how much exus you must gain to use the spell at a base level. Also specifies if/what type of anima are necessary
- **Additional Exus Costs:** Defines how much extra exus you gain as you meet different exus thresholds
- **Check Outcomes:** Lists the necessary dominant attribute score benchmarks and explains what happens when the player meets them
- **Additional Effects:** Lists out the extra spell effects caused by exceeding the spell's Exus Thresholds. Contract Effects describe the spell's interactions with anima, if applicable

**For now, don't worry about the "anima" and "contract effects" values. We will cover them in detail in our next post!**


## The Engine and Transmission

Each spell has a Dominant Attribute that governs its efficacy. We'll be talking about the attribute system in detail in a future post, but for now, know that there are four Core Attributes whose numerical values are adjusted by cards drawn from the Ability Deck.

- **Arms** define your **inherent physical** status (strength, reflexes, conditioning, etc.)
- **Gears** define your **trained physical** status (technique, practiced coordination, etc.)
- **Masks** define your **inherent mental** status (expressiveness, creativity, wit, cunning, etc.)
- **Tomes** define your **trained mental** status (critical thinking, memory, concentration, etc.)

### Driving the Action

**A spell's outcome is determined by its Dominant Attribute score *after* the caster has drawn their Ability Check.** Each spell has four potential outcomes, the worst being outright failure. Failed spells do not do what they are supposed to, and carry penalties that range from mild inconveniences to potential catastrophes. The next three possible outcomes are varying degrees of success: Passable, Strong, and Critical.

![Pre-cast Sledge Fist Block](/lp/blog/hotrod-1-sledge-fist.png)

*Let's say Amaya Garcia tries to cast Sledge Fist, which is a spell that relies on Arms. Here, we can see the spell's minimum requirement for a passing grade is 30, and before casting the spell, Amaya had 32 Arms. However, when Amaya makes her Ability Check, she draws a Technical Card, which boosts her Gears score by 20 at the expense of lowering her Arms score by 5. Therefore, her spell ends in failure.*

![Technical Card and Post-cast Sledge Fist Block](/lp/blog/hotrod-1-technical-sledge.png)

### Switching (to) Gears

**When a player makes an Ability Check, they slot that Ability Card into the leftmost of three slots on their character sheet.** The effects of slotted cards persist as new cards are drawn, moving to the right until a fourth card is drawn, at which point the rightmost card is discarded.

*Since Amaya now has an impressive Gears Score, she could forego magic in favor of making a ranged Attack Action with her equipped weapon set—as most ranged attacks rely on Gears—but we're talking about magic here, so she'll decide to use a spell scaling off Gears instead.*

![Turning Tides and Neutral Card](/lp/blog/hotrod-1-turning-tides.png)

*This time, Amaya draws a Neutral Card (no change to Attribute values), resulting in a Strong Check.*

## Heading for the Redline

Magic needs some kind of rate limit in order to feel meaningfully distinct from mundane actions like attacking and moving. Rather than treating magical energy like stamina (per traditional MP systems), we prefer to think of it as momentum. As characters use magic, they accrue an important resource/existential threat called exus.

Spells have up to 3 exus thresholds, which affect the spell in the following ways:

A) Exceeding any exus threshold increases the amount of exus gained from the spell

B) Exceeding exus thresholds makes spells more powerful by adding extra effects

C) Exceeding most exus thresholds will also make the spell more dangerous

Some spells cannot even be attempted if the character's current exus level is too high, as they now lack the reason and sense of self to attempt delicate magic.

### Acceleration and Consequences

If a caster fails a spell while they are already exceeding an exus threshold, they will only suffer the spell's failure effect and additional exus gain requirements. If the spell succeeds, however, each exus threshold effect is additively layered onto the results of an Ability Check outcome, regardless of how successful the spell was. Even relatively simple spells with low success levels can become formidable risks at high exus levels—for friends and foes alike.

*Now that Amaya has used two spells, she has accrued a considerable amount of exus. When she attempts to cast her third spell (Clever Flames), she is already beyond its first exus threshold, and has to take on 5 additional Exus on top of the spell's standard 10 exus gain requirements. When she casts the spell, Amaya draws a Creative Card, pushing her into the spell's Critical outcome.*

![Creative Card and Clever Flames](/lp/blog/hotrod-1-creative-clever.png)

*She isn't done yet though. Because she cast the spell at the first exus threshold, the spell now inflicts 2 stacks of the "Burn" bane on affected targets in addition to its critical outcome effects.*

*Keep in mind, even though this spell brings Amaya to 30 Exus, she does not trigger the second exus threshold effect, because she was only at 15 exus when she cast the spell. Should she cast Clever Flames again on her next turn, however, she will trigger the second tier of consequences.*

### Beware Burnout

Crucially, **every character also has a total Exus Limit.** And if a character's total exus exceeds that limit, the FM gets to have fun. Cool Things Happen! The fine print? Said Cool Things might also be Very Bad Things for the character or party as a whole. But they will still be Cool! Some examples of things that might happen include: attracting the attention of a lesser deity or powerful monster, spontaneously phasing into another dimension, developing permanent physiological quirks, temporarily losing control of your own actions, and so on.


## More Spells to Tell

We are just getting warmed up, but this post is already lengthy enough and it covers magic's fundamentals. [In part 2](/updates/rules-in-focus-hotrod-magic-2), we detail the features that add depth and fine-tuning to our hotrod: **different types of spells, anima, associated actions, and special resources.**
`;

export default function RulesInFocusHotrodMagic1Page() {
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
