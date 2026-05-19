'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# *Anno Amagium* - Deep Lore: Amagiate Law, Technology, and Culture

##### How magic shapes daily life and scientific advancement in *Anno Amagium*


## The Asfalis/Amagiate Divide

The biggest social distinction in a world where everyone can use magic is what kind of magic you are licensed to use. The overwhelming majority of the world is **asfalis** (from the Greek word meaning "safe" and "harmless"), while **amagia** pursue careers that revolve around magic. The Amagium is primarily dedicated to making the supernatural as safe as possible for humanity. It is the third institution of its kind, but we'll get into that next week. For now, just know that their charter's prime directive is to prevent magic from being used in military or political actions. Most of the world is subject to Amagiate governance, including all three of our launch settings.


## Licensing Magic

In territories under amagiate governance, all newborn children must have sigils tattooed on their wrists with inhibitor ink. These invisible **inhibitor tattoos** restrict the intake and outflow of a person's wyrd to the bare minimum required for etheric respiration, preventing the meaningful use of sorcery or contract magic.

![Ruben's Inhibitor Tattoo](/lp/blog/deep-lore-law-inhibitor-tattoo.png)

Wearing **magic licenses** selectively relaxes the restrictions of inhibitor tattoos, granting access to **exempt magic** approved for general use. Magic licenses come in a wide variety of styles but they are (almost) always paired cuffs, bracelets, or vambraces made of various durable materials (typically metal, but wood, ceramic, and leather are also common). But every license used must be registered and attuned to a specific wearer at an amagiate **Lexiclave**. Modern licenses track the spells a wearer performs, and these records must be reviewed on a seasonal basis (4 times a year), at which point the licenses' permissions are renewed and updated.

![Ruben's Anima](/lp/blog/deep-lore-law-anima.png)

Some professions (especially in fields of science, engineering, and medicine) will have special asfalis licenses that provide access to a slightly broader catalogue of exempt spells—sort of like commercial or motorcycle driver's licenses. Amagiate licenses have much more permissive restrictions, allowing amagia to use any sort of spell deemed pertinent to their amagiate Discipline.


## The Nine Amagiate Disciplines

Amagia begin their careers as Aspirants as young as 11 years old, where they attend boarding academies known as Athenaeums. A typical aspirant will matriculate for 11 years. After their fourth year, they must declare a Discipline to pursue, which will determine what kind of license they earn, and what their responsibilities will be to the amagium. It is important to note that these Disciplines practice a multitude of different kinds of magic. The Amagium's nine-fold division is less about the specific principles involved, and more a matter of function, politics, and internal structuring.


**Alchemy:** Comprised of potion-crafters, magi-botanists, and urdo-biologists. Alchemy primarily deals with transmutation (molecular rearrangement and magical enrichment of physical materials), and transumation (the process through which physical materials are magically metabolized).

**Animathurgy:** The artisans of the Athenaeum who "weave" strands of ether into fuel for specific types of contract magic. Animathurges have a reputation for hyper-fixation and eccentricity, often specializing in a single, narrowly-focused bandwidth of anima to push their craft to its absolute limit.

**Arcanism:** Those who drive back the boundaries of magical ignorance devote themselves to Arcanism. Often regarded as navel-gazers or archetypal "Ivory Tower" wizards, Arcanists tend to be the most intelligent (and least mentally stable) members of the Amagium. Forbidden knowledge of the arcane often comes with a cost.

**Archivism:** Librarian-warriors who maintain the Amagium's perilous Archives (ever-shifting repositories of magical artifacts and grimoires) and magical anthropologists who conduct field work and procure additional artifacts. Archivists are experts at analysis, containment, and navigating labyrinths.

**Artificing:** Builders who create physical instruments that are fueled by magic or rely on magical principles for their operations. Many artificers specialize in magical prosthetics; a field that is considerably more advanced in *Anno Amagium*'s Earth than our own.

**Guardianship:** The newest of the nine Disciplines (replacing the discipline of Essentialism, which was focused on the study of environmental magic), Guardianship focuses on disaster response and humanitarian aid. It was established to address criticisms that the Amagium was too passive in the face of natural and supernatural calamity.

**Leximancy:** Those who lay down amagiate legislation must also have an intimate understanding of the abstract runic code that can mask and govern the output of ether. These lawyer-programmers are generally intense, driven personalities with an eye for detail.

**Medithurgy:** Doctors who see to magical maladies and matters of the wyrd are known as medithurges. Every medithurge must first obtain a medical doctorate in the course of their amagiate training, resulting in a Discipline that is as habitually harried and overworked as it is compassionate and insightful.

**Peacekeeping:** The most popular adage applied to Keepers is "Fear the Peacekeepers for the violence they bring. Revere the Peacekeepers for the peace that follows." They are the most martial of all Disciplines, comprising magical law enforcement, magi-forensic detectives, and monster hunters.


## Keeping Things Magical vs. Technological

You have to take special care to avoid transforming your magic system into pure technology (else you might as well make a sci-fi world). This is especially tricky when magic is a ubiquitous presence, because humanity, being what it is, will inevitably develop reliable technology that is *based* on the most reliable tenets of magic, which are referred to in-universe as **magical principles.**

Here are a few popular fields of science and where they intersect with Amagiate Disciplines:

The intersection of magic and mechanical engineering is addressed by **Artificing**

**Alchemy** and **Medithurgy** jointly address magic's overlaps with chemistry and biology

Magical computation is the purview of **Leximancy**, which also covers magical legislation

**Arcanism** describes the study of magic's defining principles (think theoretical physics)

**The ultimate factor separating magic from technology is that magic is always unpredictable.** Artifice must be aggressively maintained, as individual components will rapidly develop **quirks** with unintended side effects as residual ether builds up. Alchemical potions will affect imbibers in completely unique ways based on their individual wyrds. Leximancy is rife with self-contradictions and loopholes, especially in dense, lengthy bodies of runic code (like the enchantments that govern magic licenses). Arcanism is more a matter of philosophy and perspective than it is providing 'proof' of reliable magic principles.

## Up Next: Our Place in the Multiverse

Next Monday we will be discussing *Anno Amagium*'s cosmology. We will cover reality, the Faed, the dimensional Veil separating the two, other planes of existence, and the curious entities that inhabit each. Come Wednesday, we'll have a tell-all about the game's Attribute system to appease our rules-hounds in the audience, and on Friday we will be reviewing the evolution of Anno Amagium's movement system. Don't miss it!
`;

export default function DeepLoreAmagiateLawTechnologyCulturePage() {
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
