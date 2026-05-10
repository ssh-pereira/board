'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# Deep Lore: Magic as Music

##### An easy introduction to all things magical


## Overture

Magic in the world of Anno Amagium is a phenomenon that distorts **The Resting Laws**: things like gravity, light, magnetism, and so on. (These laws are themselves the product of certain types of **ether**, the energy underpinning the whole of creation, but they are still considered natural, or "lawed," as opposed to supernatural.)

For living organisms, magic is as natural and essential as breathing. It is a crucial part of life, culture, and history—much like music is in our world. Just as everybody is capable of bursting out into song at any moment, almost anybody can use magic at any time. Some people are much better at it than others, and many such people choose pursue it as a career. Professionally licensed magic practitioners are known as **Amagia**.

Here are the main bullet points and types of magic explained in the context of music:


## Wyrds - Lungs for Breathing Ether

All humans and animals have an in-born, metaphysical organ known as a **wyrd**. Wyrds are like lungs for ether. Respiring ether is an automatic and essential process, like breathing air, and it results in a certain, passive supernatural pressure that people can sense with their own wyrds. Like music creates vibrations, all forms of magic create etheric pressure, or **ripples**. In humans, these ripples typically manifest as an aura of etheric pressure that scales in direct proportion to the strength of their wyrd.


## Emanations – Magic Speech

Exhaling magic with the intention of basic communication is called **emanation**, allowing the speaker to augment their speech with simple illusions or psychic pulses conveying emotional nuance. **Mechanically, emanations do not require any checks or dice rolls, opening the door to a novel frontier of roleplaying.** Is your character magically expressive? Laconic? You can even explore an entirely new dimension of sarcasm by juxtaposing contrarian emanations against your statements!


## Sorceries – Supernatural Singing

The next level of magical complexity, sorcery, is akin to singing. Like lungs and vocal cords, every wyrd possesses unique talents that yield a distinct "voice." Some people can easily perform telekinesis with their wyrd, while others can casually bend the elements to their will. Like singing, it is a sophisticated skill that requires a life-time of practice and dedication to master, and it can be performed in a countless number of genres and styles.


## Contracts – Bewitching Duets

What if you want to do things with ether that exceed the talents of your sorcerous voice? Same as a musician, you must turn to instrumentation and collaboration. Ambient currents of ether (and artificially "spun" ether) can form semi-sentient knots of magical energy referred to as animate spirits, or **anima** for short. By merging with a caster's wyrd, anima can shape, filter, and amplify a caster's inborn talents to accomplish feats that would normally be impossible. Such spells are called contracts, as the terms and result of magic must be negotiated between the caster and their animus.


## Rituals – Symphonic Spells

Rituals are the most powerful spells in Anno Amagium. They often require considerable prep time, collaboration among multiple spell casters, specific times and places, or special accoutrement to pull off. These **rituals** can be used to solve extremely complex problems or empower the party in miraculous ways, such as opening portals to other realms, sealing hostile entities, or gaining prophetic glimpses into the future.


## Enchanting – Runic Recording

Finally, we come to **enchanting** (where our metaphor admittedly stretches a bit thin). By inscribing magical runes and sacrificing various, magically-rich materials, mundane objects can be transformed into powerful instruments of magic. A common sword can be enchanted to ignite on command when coming into contact with its owner's wyrd. As one might expect, this versatile type of magic will be covered by Anno Amagium's crafting system.


## Exus - Straining Your Voice

Just as people can injure or tear their vocal cords by pushing themselves too far, spell casters can also harm themselves by exceeding their limits. Casting spells accrues a supernatural momentum known as **Exus**. Exus simultaneously makes magic stronger and more dangerous. Mechanically, this means that instead of a finite pool of mana points, players can use as much magic as they want—provided they are willing to deal with the consequences.


## **How do you translate this system to actual *gameplay*?**

Check back on Friday for our first **Rules in Focus** features. It will be a double header that details the mechanics of spellcasting, including an overview of the rules, specific examples with diagrams. All this through the lens of another easy-to-grasp metaphor: race cars. Until then!
`;

export default function DeepLoreMagicAsMusicPage() {
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
