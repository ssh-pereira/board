'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const PUBLISH_DATE = new Date('2026-05-15T00:00:00');

const markdownText = `# *Anno Amagium* Dev. Blog 1: Making Magic Happen

##### What we wanted out of our magic system and how we've gone about getting it

***NOTE: We recommend reading our [Hotrod Magic post](/updates/rules-in-focus-hotrod-magic-1) before this one for a detailed rundown on the rules of the magic system. This post will focus more on what we wanted to get out of the system and why we adapted it from the source-material the way we did.***


## Initial Goals & Guiding Principles

Developing the magic system of **Anno Amagium** boiled down to three primary points of focus.

![Anno Amagium – Fun Flavorful Fair](/lp/blog/dev-blog-fun-flavorful-fair.png)

### 1. Fun

**First and foremost, we are in this for the love of the game. If casting spells isn't fun, why would you want to play a game about it?**

But how do you make a concept as flexible and as exciting as magic live up to its potential? In a power fantasy, magic must feel powerful. Spells need to have a profound impact on the world. **To us, that means breaking rules. It means prioritizing shenanigans over strict mechanical balance.** So rather than ranking spells based on AP-to-Damage ratios, we crafted them with complex interactions and situational modifiers in mind.

**We believe that tabletop roleplaying's greatest strength is its unparalleled capacity for improvisation.** You can interact with the world in ways that would be a nightmare to script, automate, or write in other mediums. And to maximize that freedom, we have developed a huge library of spells, ensuring characters have multiple options that suit their unique abilities and persona.

### 2. Flavorful

**Secondly, we believe the act of casting a spell should feel arcane—the opposite of a simple cause-and-effect button press.** You are scanning a grimoire filled with conditions and situational caveats, performing auguries with cards that will determine a character's fate.

To that end, spellcasting in Anno Amagium is flexible and multifaceted with tremendous potential for nuance. That said, to keep play expedient and easy to track, **all spells revolve around the same core "loop" of paying costs, performing ability checks, and resolving outcomes.** Making sense of the tiered ability check outcomes and additive exus modifiers can appear intimidating at first, but it clicks quickly (even with players who are completely new to TTRPGs). More importantly, learning the system rewards players with a constellation of possibilities.

### 3. Fair (Enough)

**Finally, magic needs to be exciting while still feeling fair. Well. Mostly fair. Fair enough!** Magic's unpredictable nature is precisely what separates it from technology. But a completely arbitrary system would cripple our fun factor. Therefore, we needed a system that incorporated a degree of RNG without being overly punitive and still allowing for strategic play.

To accomplish this, we emphasize pivots and gradual success over hard stops and dead ends. **The overwhelming majority of Ability Check outcomes will create new opportunities, even when they scuttle your original plans.** While a given card may reduce your desired attribute, it will typically boost another attribute simultaneously, opening new avenues of approaching the problem. And **to keep things dramatic, we still include a few cards that can yield instant successes or automatic failures.**

These three priorities served as our north stars, and helped us navigate a number of design decisions where both options offered competing pros and cons.


## Break Everything, Embrace Ambiguity, and Trust Your FM

To maximize the potential fun behind magic, **we knew that spells needed to be able to interact with each other in unexpected ways, just as much as they needed to feel individually meaningful**. That's why we went with an action point-based system as opposed to a categorical action system (free actions vs. bonus actions vs. main actions, etc.). Giving players the ability to mix and match almost any combination of spells can yield borderline broken interactions that completely reinvent encounters.

![Action Points and Reaction Points](/lp/blog/dev-blog-action-reaction.png)

There are competing thoughts about the role of rules in TTRPG game design. Some people argue that exacting rule interactions are essential for a game to feel fair. Essentially, the belief is that rules are supposed to "protect" the players from a vindictive game master's wrath, and give them a clear path forward in terms of settling arguments. **We've always felt that if you need "protection" from a fellow player, you might not want to be playing a game with them in the first place. And if you are looking to win arguments in what is supposed to be an inherently narrative, collaborative title… Maybe consider taking up Chess instead.**

We feel it is better to give the FM as much agency as necessary to sort things out, to such an extent that particularly powerful spells will include "effects pending FM discretion" in their description. This phrase could just as easily translate to: "Warning: this spell has the potential for some truly broken interactions." **Do not fear ambiguous rulings. Instead…**

![Do the things you want to do, and have faith that your Fate Master will sort it out in a way that is fun, fair, and serves your story](/lp/blog/dev-blog-trust-fm.png)


## Too Much Flexibility Strips Flavor

The first major feature that we trimmed from Anno Amagium's magic system was the idea of flexible Ability Checks. **For Skill Challenges, being able to choose between two different dominant attributes makes sense in certain scenarios—you can approach material problems through brute force (Arms) or nuanced athleticism (Physical), for example. But doing the same thing to spells made individual attributes feel arbitrary, especially when factoring in the RNG of the Ability Deck.** That extra optionality compromised the identity of spells, and undermined the value of building a character around specific attributes. In the end, dropping the feature made spells feel more flavorful and helped differentiate Ability Checks from Skill Challenges.


## Gradual Successes, Hard Stops, and RNG Sweet Spots

**From the start, we wanted each spell to have varying degrees of success.** That gradation allowed for a reliable bandwidth of performance with a small risk of hard failure, while still rewarding strategic playmaking when the cards line up just right. There is such a thing as too much variation though!

**Early on in the design of Anno Amagium, spells featured an additional degree of RNG in the form of different grades of damage dice.** These custom D10s had weighted values ranging from 0 to 5, with riskier or more favorable distributions depending on their grade. In terms of positives, that system captured the joy of chucking a bucket of dice when you drew a Critical Ability Check. It also made the outcome of each spell feel truly unique!

However, **scoring a critical check only to roll horribly on the dice felt absolutely *awful*. Worse yet, rolling a bunch of different types of dice every time a spell was cast (on top of calculating exus effects, and contract magic effects…) dragged out turns prohibitively.** The negatives outweighed the benefits of a more consistent approach.


## Next Week: Culture, Attributes, and Movement

Next Monday, we'll be dropping some lore on the law, culture, and technology that underpins life under the Third Amagium. On Wednesday, we will go over our Attributes system in detail, and next Friday's dev blog will discuss the evolution and influences of our game's movement system.
`;

export default function DevBlogMakingMagicHappenPage() {
  const now = new Date();
  if (now < PUBLISH_DATE) {
    return (
      <main className="w-full h-full min-h-screen bg-[url('/lp/Update/bgroleplay.png')] bg-cover bg-center">
        <div className="w-full h-full min-h-screen bg-black/70 flex items-center justify-center p-8 pt-24">
          <div className="w-full max-w-[800px] text-center text-white">
            <h1 className="text-3xl font-bold">Coming Soon</h1>
            <p className="mt-4 text-lg text-white/70">This post will be available on May 15, 2026.</p>
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
