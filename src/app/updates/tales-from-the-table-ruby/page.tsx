'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# Tales from the Table - Ruby

##### A round of questions with a long-time *Anno Amagium* beta-tester


## 1. Say hello! Introduce yourself with whatever name you would like us to use, and briefly describe your player characters in *Anno Amagium*.

Hello! I'm Ruby, long time enjoyer of the Anno Amagium universe. It has been so fun to see it grow and develop over the years.

I've played Guy Venday, a rage-fueled Keeper who has recently discovered faith; Ossiamma Mason, a spooky Archivist with psychic and dream magic; and currently play Laine Mason (cousin of Ossiamma), a medithurge drum-out experimenting with… less than legal magic.


## 2. What are your favorite moments with those characters so far?

Guy has had some pretty great rage-based moments in fights, but one of my favorite moments was when he was served with a lawsuit for some truly atrocious police work. He promptly filed it in a trash can under his desk. Will it come back to haunt him? Who knows…

Runner up for Guy is when the FM was heavily hinting that we examine a shed for clues to a mystery. Guy rolled a 3. Nothing to see here, team!

Ossiamma was part of a “one shot” and didn't see a ton of action, but I enjoyed coming up with random ominous things for her to say to people.

Laine. This girl. She has been the source of so much chaos. In our most recent major battle, she cast a few sorceries in a row that caused Urdic Anomalies (random add-on effects that happen when a non-amagia uses cracked licences). She managed to accidentally terraform part of an archive, complete with uncontrollable plant growth, inclement weather, and a giant cloud of dust mites. She followed that up by dealing a whopping 17 points of damage on a single attack that should have done 3 damage, overcoming significant debuffs to do so.


## 3. How experienced are you with fantasy, TTRPGs, and gaming in general? How does Anno Amagium compare to other TTRPGs you've played?

Very experienced with fantasy, I've been reading the genre as long as I can remember. I would consider myself a casual TTRPG player, playing on and off mostly with groups that prioritize fun and silliness over hard core mechanics. I'm also a casual video game and board game enjoyer, and was very in to Baldur's Gate 3 for a while recently.

Most of my prior TTRPG experience is in various editions of DnD. The biggest difference I see between DnD and AA is in the character creation. There's not really set classes, and the skill sets feel much more modular. Lots of mixing and matching, mechanical interactions, and personal customization that can lead to some really fun moments. It's overwhelming at first, but it is SO worth it when your healer does catastrophic damage because all her mechanics worked together perfectly. Also she's the party rogue now.

The other cool thing is that your stats vary during combat as you cast spells. That also affects Techniques, where you have both a dice roll and a card draw. The variation means a spell or technique can suddenly become much more powerful than usual, changing strategy turn to turn. It feels very unique!


## 4. Tell us about learning the game. What mechanic took the longest to figure out? Did anything click immediately or take you by surprise?

Not gonna lie, I still don't really know how the numbers work for physical attacks, even though Guy was supposed to be a pretty close range/melee focused character. I tend to rely on 1-2 standard attacks and otherwise forget about it in favor of the extensive spell list.

So… I built Laine with zero physical damage capabilities. She carries no weapon, just an arcane focus for her spells (I'm still waiting for the stars to align so I can use her only technique, “induce concussion”, where she bashes an enemy in the head with her focus). Between no weapon and a civilian's two anima instead of an amagia's six, I expected her to be hamstrung in some encounters. Nope! This build has worked <u>surprisingly</u> well. Really shows how versatile and flexible the system is.


## 5. Where the setting and lore is concerned, what do you think is the most intriguing or exciting aspect of the Anno Amagium universe?

I love learning more about the Faed, a plane of existence adjacent to the “real world” controlled by the Fae. Some of the rules and residents are familiar, based in myths and fantasy tropes, some things subvert expectations, and some are completely new and invented. It's always a learning experience when we go to the Faed.


## 6. If somebody were to ask you about Anno Amagium, what is the first story from around the table that comes to mind?

This is a surprisingly hard question. I've mentioned a few of my favorite moments above, and I have many more on deck, but as far as larger stories, I think my favorite is a series of sessions where we had a guest player. They played Sunny, a news reporter from our world, who died (maybe?) and was dropped into the Anno Amagium world with a mysterious objective related to a Demon King and a device that essentially gave her whatever she needed. Very quickly, she got herself a lawyer. That was a good choice.

That arc also involved some very cool vampires and a CIC (internal affairs) officer with amnesia, a suspicious ability to cause convenient car accidents, and a deep love of persimmons. On top of the usual motley crew, it was a great time.


## 7. What improvements would you like to see in the future?

I'm very much looking forward to seeing the more advanced curriculums. Characters already feel pretty powerful (level one characters in AA are approximately equivalent to level five characters in D&D 5E), so what reality-melting things are we going to get in higher levels? Will Guy get even ragier? We'll have to wait and see.


## 8. Anything else you would like to add?

If you read **[Dootridge's Tales from the Table](https://www.gameonechelon.com/updates/tales-from-the-table-dootridge)**, I'm the soon-to-be co-Fate Master that was mentioned. I'm really looking forward to seeing this system from the other side and exploring all the stuff I didn't even know was going on in the background. AA feels both familiar and one of a kind, and I'm really looking forward to telling a new story!
`;

export default function TalesFromTheTableRubyPage() {
  const isAvailable = new Date() >= new Date('2026-07-03T00:00:00');

  if (!isAvailable) {
    return (
      <main className="w-full h-full min-h-screen bg-[url('/lp/Update/bgroleplay.png')] bg-cover bg-center">
        <div className="w-full h-full min-h-screen bg-black/70 flex items-center justify-center p-8 pt-24">
          <div className="flex flex-col items-center justify-center text-center py-20">
            <h1 className="text-4xl font-semibold text-white mb-4">Coming Soon</h1>
            <p className="text-lg text-white/50">This post will be available on July 3, 2026.</p>
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
