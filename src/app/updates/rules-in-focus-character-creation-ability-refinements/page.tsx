'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# Rules in Focus: Character Creation - Ability Refinements

##### Fine Tuning Your Character Via Cards


## A Refined Approach

Ability Refinements are essentially how you stack your deck in Anno Amagium. Since Ability Check scores directly correlate to magic's efficacy, intelligently modifying your deck will help you shore up weaknesses and capitalize on your strengths more frequently. Each level, a character gains 2 Ability Refinement Points to customize their cards. Some ability refinements cost 2 points, while other refinements simply cost 1.


## Where to Start?

There are a few Ability Refinements that we recommend prioritizing when building your characters: the 2-Point abilities generally make the biggest impact early on in a campaign. If you are the type who prefers to carry an umbrella and save for rainy days, we recommend the “Improvement” Ability Refinement. It will replace one of your default three “Failure” cards (which result in an instant failure), with a much friendlier “Neutral” card (no change to any stats). If you your idea of a good time is Big Damn Heroics, risking it for that biscuit, etc., go with “Achievement,” which will replace a “Neutral” card with a “Critical” one. As you'd expect, that's an instant Critical Success on the ability's outcome, regardless of your current stats. Another good starting choice is “Excellence” (which will give you swap two “Neutral” cards for two “Flexible” cards, granting +10 to all Attributes).


## Don't Sleep on Exus Reduction

Going over your Exus Limit essentially gives the Fate Master free license to “get very creative” with your character's fate. Even if you like to walk the razor's edge, casting spells at higher Exus Thresholds also carries more mundane but straightforward penalties, like self-inflicted True Damage, or Bane stacks. The key to keeping your output into your desired bandwidth is a well-timed Focus Action. “Indefatigability,” “Level Headed,” and “Steel Nerves,” can provide you with more consistent exus control, at the bargain price of a single Ability Refinement Point each.


## Fine Tuning & Critical Momentum

Generally speaking, the final phase of Ability Refinements will boil down to personal preference. You can aim for broad spectrum upgrades, or pour every point possible to focus on advantages for a specific Attribute, or even a given card. More reliable increases to your signature equate to more opportunities for positive momentum, culminating in streaks of Critical Ability Checks, which can change the tide of battle extremely quickly. They also make for the sort of legendary plays that define a night, or endure in players memories.


## …Or Be Characterful!

The suggestions above are merely intended as guidance for first-time players. You can easily take the Ability Refinement's descriptions as characteristics. A fun way to play is to have the circumstances around your level-up shape your chosen Ability Refinements. Refinements were intended to act as a mirror for your playstyle, as much as they are a progression system.
`;

export default function RulesInFocusCharacterCreationAbilityRefinementsPage() {
  const isAvailable = new Date() >= new Date('2026-08-19T00:00:00');

  if (!isAvailable) {
    return (
      <main className="w-full h-full min-h-screen bg-[url('/lp/Update/bgroleplay.png')] bg-cover bg-center">
        <div className="w-full h-full min-h-screen bg-black/70 flex items-center justify-center p-8 pt-24">
          <div className="flex flex-col items-center justify-center text-center py-20">
            <h1 className="text-4xl font-semibold text-white mb-4">Coming Soon</h1>
            <p className="text-lg text-white/50">This post will be available on August 19, 2026.</p>
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
