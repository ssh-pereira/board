'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# *Anno Amagium* – Rules in Focus: Attributes at Large

##### The stats that define characters, and how they shift from moment to moment


## The Four Core Attributes

The cardinal directions of character building in Anno Amagium are **Core Attributes**. As we mentioned in our magic system post, they include Arms, Masks, Gears, and Tomes. These stats provide a baseline of capability to determine what your characters can do by default.

![The 4 Core Attributes](/lp/blog/attributes-core-quadrant.png)

**Arms (Inherent Physical Properties):** Your character's strength, flexibility, conditioning, and natural reflexes are covered by Arms. You would favor Arms for the following Skill Challenges and Ability Checks: Pushing, pulling, or carrying heavy objects. Swinging weighted weapons like axes and bludgeons. Contorting to pass through a tight space. Running and long-jumping. Performing magic that temporarily reshapes, augments, or otherwise taxes your body beyond its normal limits, or spells leverage direct physical contact.

**Gears (Trained Physical Properties):** Applied dexterity, practiced coordination, physical technique, fine motor control, and competence with tools all fall under Gears. You would use Gears in the following scenarios: lockpicking or fixing machinery. Shooting firearms accurately. Performing "hand dancing" (Anno Amagium's term for sleight of hand and stage magic). Using weapons that rely more on finesse than raw strength. Gears magic primarily relates to Artifice, but can also be applied to spells requiring precise gesticulation, or dance-like casting rituals.

**Masks (Inherent Mental Properties):** A character's creativity, expressiveness, guile, off-the-cuff cleverness, imagination, and emotional intelligence are covered by Masks. Example Masks checks include: Inspiring a crowd with a speech. Lying convincingly. Comforting a grieving child. Coming up with a devastating comeback after being insulted. Performing communicative magic (telepathy), or spells that require flexible creativity (illusions), emotional control (wrathcasting), or raw passion (most elemental sorcery). Certain focus weapons leverage masks as well.

**Tomes (Trained Mental Properties):** Analytical intelligence, critical thinking, knowledge retention, concentration, and deductive reasoning comprise a character's Tomes score. Characters will use Tomes in situations like these: Performing higher mathematics. Deciphering legal documents or ledgers. Conducting research. Casting spells that rely on precise calculations (Leximancy and Arcanism) or abstract aspects of applied science (Alchemy). Many Contracts leverage Tomes as they rely on advanced magical formulae or memorized arcane knowledge.

This quadrant alignment—paired with the ever-shifting nature of the ability deck—is intended to discourage the complete neglect of a single stat. Every game says they don't have dump stats, but *Anno Amagium* drives home the idea that any character, in the right circumstances, can pull off moves outside of their normal wheelhouse when the cards come up just right. That's not to say Attributes are arbitrary. Prioritizing a primary (or primary and secondary) Core Attribute will ensure that your character can favor specific in-game roles, without being completely shackled to an optimized "ability rotation."

While each quadrant of stats is meant to be flavorful, and help give players a jumping-off point for roleplay, stats are not intended to restrict roleplay in any way. You can have a character built like a tank who has low Arms, or a quippy smartass with low Masks, a bookish character who is perplexingly bad at Tomes, or even a craftsperson with a Gears score suggesting clumsiness.


## The Six Derived Attributes

Trying to field every human behavior with only four quadrants is a fool's errand, so to add some nuance, there are six other attributes resulting from combinations of the Core Attributes. These **Derived Attributes** are slightly harder to adjust with a single card draw, but otherwise function identically to core attributes for the purposes of Ability Checks and Skill Challenges.

![The 6 Derived Attributes](/lp/blog/attributes-derived.png)

**Physical (Bonuses + (Arms + Gears)/2):** The sum of your physical abilities. Dexterity and coordination married to force and effort. Examples of when you would use the Physical Attribute as opposed to Arms or Gears include: The overwhelming majority of sports. Acrobatics, swimming, and climbing. Most melee weapons require the Physical Attribute as opposed to pure Arms, as well as ranged weapons like bows and thrown weapons. Purely Physical magic is rare, but frequently factors into Techniques, and spells that rely on the most bodily expressions of one's wyrd (Qi).

**Mental (Bonuses + (Masks + Tomes)/2):** Your character using 100% of their brain. Wit and creativity honed by focus and applied analysis. Examples of Mental Ability Checks and Skill Challenges include: Coming to objective conclusions based on subjective information, per literary analysis or reading magical texts. Spellcasting that relies on metaphorical arguments (Sympathy) and predictive magic (Divination). Summoning spells requiring both emotional and logical appeals will also rely on the Mental Attribute.

**Instinct (Bonuses + (Arms + Masks)/2):** Encompasses a character's raw senses, their connection to the environment around them, and the deep feral energy that exists in all of us. Instinct challenges include examples like: Intimidating or seducing someone with body language alone. Emotionally driven combat (Berserking). Performing nature-based or shamanistic magic (Essentialism and Totemism). Most faith-based magic (Egregorics). Attempting to track a target by scent. Discerning the ingredients of a food via taste.

**Training (Bonuses + (Gears + Tomes)/2):** Everything a character has learned and their ability to put it into practice. Training governs checks and challenges such as: tactical commands and cool-headed leadership in combat. Bomb defusal. Hacking. Comporting oneself with the appropriate esprit de corps. An enormous variety of professional and scientific challenges. Spells focusing on pre-existing constructs (Artificing), or physical aspects of applied sciences (Medithurgy). Weaponry requiring both intellect and precision (anima cannons,).

**Will (Bonuses + (Arms + Tomes)/2):** How far a character can push their body and mind simultaneously; the total extent of their volition. Examples of Will checks and challenges include: Directly pitting your wyrd against somebody else. Maintaining focus after hours of study. Persisting in training despite pain and fatigue. The overwhelming majority telekinetic magic. Imposing artificial laws on the world (Occultism). Invoking higher powers. Domination Magic (while grossly illegal) also relies entirely on Will.

**Innovation (Bonuses + (Gears + Masks)/2):** A character's capacity for creation as opposed to mere craft or imagination. Some examples of Innovation: the overwhelming majority of crafting challenges. Applying insight and passion to practical problem-solving. Illusions that leverage telekinesis. Musical magic (Phonothurgy). Conjuring physical objects from abstract forces. Magic requiring improvisation and sensitive perception (Tidalism). Improvised and adaptable weaponry (modular projectile systems).


## The Four Hazard Attributes

The "odd men out" among character stats, **Hazard Attributes** can only be used reactively. This means that you cannot select them as a primary stat for using spells, skill checks, or attacks. Rather, they must be played in response to externalities (like trying to hold it together after ingesting bad food, jumping for cover, noticing a tell-tale smirk signifying betrayal, or heeding that sinking feeling in your gut). The upside is that they are the most "stable" of all stats, as each one is an average of 3 Core Attributes.

![The 4 Hazard Attributes](/lp/blog/attributes-hazard-quadrant.png)

**Agility (Bonuses + (Arms + Gears + Masks)/3):** Here, Agility exclusively refers to your ability to get the hell out of harm's way. Its examples are fairly straightforward, but include: Dodging a fireball, diving for cover to avoid gunfire, reacting before precarious positioning becomes fatal, bringing your guard up before a crushing blow lands.

**Fortitude (Bonuses + (Arms + Gears + Tomes)/3):** How much acute abuse you can take. Fortitude can factor into the following examples: Mitigating damage by bracing against it. Enduring extreme pain. The ability to withstand shockwaves and other heavy vibrations. Willing yourself to be harder than the fists hitting you. Stomaching noxious odors without losing your lunch. Holding your liquor and riding out rough drug trips.

**Attention (Bonuses + (Gears + Masks + Tomes)/3):** Your trained perception and tactical awareness. Spotting traps before they are sprung and noticing assets or liabilities in the surrounding area. Other examples of Attention checks and challenges include: seeing through illusions, interpreting enemy shorthand to avoid being flanked, shrugging off sensory effects, and detecting the approach of reinforcements.

**Intuition (Bonuses + (Arms, Masks, Tomes)/3):** The luck you make for yourself by listening to your gut. Intuition factors into the following examples and others like them: calling bluffs, sniffing out lies or manipulation. Maintaining a sense of selfhood in abstract environments like the Veil. Intuition is somewhat rarer in combat, but can be applied to resisting domination, divination, or falling for martial ploys.


## The Ability Deck

Unlike other TTRPGs, a character's foundational stats are subject to change by Ability Cards during Ability Checks. An Ability Check is performed whenever a character casts a spell or successfully lands a Strike Roll while performing a supernatural martial Technique (which we haven't talked about yet, but stay tuned for next week's Rules in Focus).

### Here is the breakdown of the default Ability Deck

![The Ability Deck](/lp/blog/attributes-ability-deck.png)

It is important to note, characters can improve their Ability Decks by purchasing Ability Refinements upon character creation, and each time they level up. Refinements can change your deck in a number of ways, including replacing bad cards with less severe penalties, increasing the bonuses of beneficial cards, and mitigating the maluses on cards that carry them. This system grants players increasing control over the RNG of Ability Checks as they level up, without ever completely removing the elements of improvisation and momentum the system represents.


## Up Next: Movin' and Groovin'

This week on our Friday Dev log, we will be talking about the evolution of the game's movement system. While *Anno Amagium* conforms to a traditional grid-based movement system, that wasn't always the case, and we detail the journey from the title's boardgame-inspired roots to its familiar square gridded mapping system. Be sure to check it out!
`;

export default function RulesInFocusAttributesAtLargePage() {
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
