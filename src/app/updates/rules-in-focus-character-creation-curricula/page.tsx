'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# Rules in Focus: Character Creation - Curricula

##### The Key to Character Building in *Anno Amagium*


## Micro-Classing > Multi-Classing

In *Anno Amagium*, characters define their abilities and party roles with curricula, which can be thought of as modular, micro-classes. In our experience, players are not looking to create archetypes like Warriors, Thieves, and Healers, but unique adventurers with abilities that reflect their personal history and approach to solving problems. Rather than trying to retrofit a concept into a mechanically viable character by straddling a handful of broad classes, players can pick and choose from hundreds of subjects with related abilities that meet their specific interests.

This design choice was primarily driven by our “everyone is a spell-caster” premise and underlines one of To Whit Venture's core philosophies: trust your lore. Your rules should always help you tell your system's story.


## Background Checks

Character creation imposes no restrictions on what kinds of weapons or armor a character can use, and introductory magic of all types are also available to all players at the start. But that is not to say there are no restrictions on the system whatsoever. **Your character's Background describes what they have been doing with their life prior to their current adventure and determines how they can spend their credits—the “currency” used to buy curricula.**

Backgrounds will get a post of their own, but in brief: they bestow a free starting curriculum, set minimum and maximum breakpoints for attribute allocation, and specify how many credits you must spend in a given curricular category during character creation. These elective curricula represent what your amagia have studied during their time in the Athenaeum, or, in the case of Hedge Witches, the magic they have managed to illegally learn via the arcanet, stolen grimoires, and other questionable means. It is also worth noting, more advanced curricula are gated behind pre-requisites—a character cannot jump to masterful fire magic without spending points on the basics first.


## What Your Credits Buy You

Curricula “unlock” three broad types of bonuses for your character: Improvements, Unlocks, and References.

**Improvements** are always in effect, automatically triggered under specific circumstances, or things that can be “toggled” at will. They provide flat improvements to your character. Some examples Include:

- **Attribute Gains** - Most “Adept” level curricula will provide a small bonus to the attribute that is most important to that curriculum.
- **Skills** – Increases your competency in the listed skill by a certain number of ranks. Skills also Includes Weapon Skills, which improve your Strike Rolls.

![Skills curriculum example](/lp/blog/char-curricula-1.png)

- **Passive Effects** – These effects are extremely varied and often highly situational, but they can have a massive impact on how you play your character.

![Passive Effects example](/lp/blog/char-curricula-2.png)

**Unlocks** enable new mechanical actions that can be used in and/or outside of combat.

- **Actions** - Mechanical options your character has without the need for ability checks.

![Actions example](/lp/blog/char-curricula-3.png)

- **Reactions** - Actions your character can perform in response to specific actions from other entities.

![Reactions example](/lp/blog/char-curricula-4.png)

- **Abilities/Techniques** - Abilities and techniques are spells and supernaturally-assisted martial arts. Each magical curricula will have about 7 Abilities, and most Martial curricula will have 3 Techniques.

![Abilities and Techniques example](/lp/blog/char-curricula-5.png)

- **Resources** – Some curricula like Leximancy, the computational and legal study of magical law, have access to unique resources which interact with their skills in various ways (pictured below). Other examples include Battle Seer (Prescience), Wrath Caster (Rage), and Blade Dancer (Flow).

![Leximancy Resources example](/lp/blog/char-curricula-6.png)

Finally, we have References. These encompass things like crafting recipes and advanced abilities that are governed by charts or dice rolling tables.

![References chart example](/lp/blog/char-curricula-7.png)


## Customization & Growth

Aside from its ludo-narrative harmony, the curricula system gives *Anno Amagium* players an enormous menu for character customization. Characters can continue to progress in their starting curricula, or take their character into a completely different direction based on the events of the campaign. A Keeper pursuing a serial poisoner may decide to start learning Alchemy. A chance encounter with a purgatorial angel may prompt your formerly a-religious Arcanist to take ranks in an Acolyte curriculum. A Leximancer may expand their repertoire to include Occultism, Spell Hacking, or Runic Coding.

The best part is, Fate Masters can accelerate this growth as they see fit. Credits are typically bestowed upon level up, 10 at a time, but when a long personal quest comes to a head, or a character makes a life-defining decision, Fate Masters can recognize these events by bestowing credits for specific curricula. It is our goal to give you the perfect platform to create your dream characters in collaboration with your FM.

This is only the tip of the iceberg in terms of character creation. Stay tuned for more next week!
`;

export default function RulesInFocusCharacterCreationCurriculaPage() {
  const isAvailable = new Date() >= new Date('2026-07-01T00:00:00');

  if (!isAvailable) {
    return (
      <main className="w-full h-full min-h-screen bg-[url('/lp/Update/bgroleplay.png')] bg-cover bg-center">
        <div className="w-full h-full min-h-screen bg-black/70 flex items-center justify-center p-8 pt-24">
          <div className="flex flex-col items-center justify-center text-center py-20">
            <h1 className="text-4xl font-semibold text-white mb-4">Coming Soon</h1>
            <p className="text-lg text-white/50">This post will be available on July 1, 2026.</p>
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
