'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# Deep Lore: What Makes an Amagia?

##### To Mage or Not to Mage

We strongly recommend you read **[our post on Amagiate Technology, Law, and Culture](https://www.gameonechelon.com/updates/deep-lore-amagiate-law-technology-culture)** if you haven't already.


## A Reckless Obsession with Magic

In the blog post linked above, we described the Amagia vs. Asfalis divide as "the most important social distinction" in the world of *Anno Amagium*, but it is also a point of political, philosophical, and cultural delineation.

The term "Asfalis," (pronounced *ahz-fah-lees*) comes from a Greek word that means "safe" in many senses. Someone described as asfalis is secure, benign, and—crucially—reliable. Most Asfalis people are asfalis for a common reason: they want their lives to be about something other than magic. There are have-nots, to be sure; those who cannot afford Athenaeum tuition fees despite a hunger for magic. There are also political dissenters and moral detractors (both described as "Anticordant") as well. But the overwhelming majority of asfalis people simply don't want "Wizard" as a job description.

![Amagia confronting a monster](/lp/blog/amagia-img-1.png)

Amagia, in contrast, are obsessed with magic. That obsession can be as broad or narrowly focused as you like, but amagia live and breathe magic. That does not mean they need to be brilliantly gifted at it; but magic is not a pursuit that suffers tourists or dabblers gladly. It must be acknowledged, Amagia *are* statistically better at magic than asfalis people, as Athenaeums price their tuition or scholarships according to the talents of their applicants. (Said talents are gauged during an annual battery of tests called "Assessments" which are open to the public aged from 11 to 15.)

Amagia need that obsession to dedicate their lives to an average of 11 to 13 years of study. During that time, they will board at Athenaeum's with other aspirants. They are not expressly cloistered from society, but their rigorous training regimen has the same effect on their social development. Amagiate students, or aspirants, live in dormitories, with an amount of autonomy many parents find alarming. Older aspirants serve as proctors, mentors, and resident advisors to underclassmen.


## Demographics of Spellcasters

The Athenaeum's curriculum is extremely grueling, both physically and mentally. Amagia must demonstrate an education on par with college freshmen by their 4th year of matriculation, and regularly review recent breakthroughs in science, history, and other academic pursuits. As a result, amagia are typically highly motivated and well-read, though there are exceptions to every rule.

Even though the Amagium has its own laws that are supposed to stand "entirely apart" from the geopolitical players it "governs," the Athenaeum's and chapterhouses typically reflect their local surroundings where prevailing cultural attitudes are concerned. That said, because of the Amagium's emphasis on recruiting talent over considerations of sex, race, or other identifiers, many famous amagia have come from groups that would be normally excluded or marginalized. The Third Amagium, in particular, is widely perceived as socially progressive the world over.

Because of their relative lack of social interactions with asfalis people, there is a widespread stereotype that amagia are socially awkward. This stigma is compounded by amagia's powerful wyrds, as their emanations and even their mere presence exude an imposing amount of magical pressure that many non-amagia find oppressive. And as one might expect, amagia's supernatural abilities are subject to ill-informed speculation and superstitious hearsay. In many communities, amagia are quietly ostracized, and the respect they are accorded is frequently garnished with scorn or fear.

![An Amagia](/lp/blog/amagia-img-2.png)


## Bear No Crowns or Cloths of Creed

Amagia are forbidden from holding any kind of offices in civic, state, or national governments. They also cannot hold religious title of any kind. This convention dates back to one of Homer's edicts for the first Amagium, as loyalties to a kingdom or God could lead to conflicts of amagiate interests.

There is no unifying pattern in the political preferences of amagia as a whole, though there are biases among certain disciplines. Peacekeepers and Guardians, like most law enforcement and first responders, tend to be more conservative. Animathurges and Arcanists skew toward the more liberal end of the spectrum.

Where religion is concerned, most amagia are agnostic, pseudo-theists, or contra-creationist. Outright atheists are extremely rare and akin to conspiracy theorists, as the Third Amagium has objectively verified the metaphysical existence of various entities humans consider to be deities. That said, the amagium classifies these so-called "gods" as a sort of "apex egregores" (hence pseudo-theism). The amagium also uniformly rejects premises of intelligent design, or other forms of divine creationism, as there is no physical or magical evidence of such divine authorship.


## What Do Amagia Do?

Amagia are meant to make magic safer. Amagiate Detectives break curses, slay monsters, and apprehend magical criminals. Medithurges combat magical maladies, infections, and heal injuries to one's wyrd. Leximancers tirelessly test spells and refine licenses to allow for new exempt spells that can be used by asfalis practitioners. Guardians use the supernatural for disaster relief and search and rescue. Archivists study and curate magical artifacts too volatile for public display. Animathurges develop new kinds of spirits that can perform magic under various constraints or highly specialized functions. Arcanists, Artificers, and Alchemists all forward humanity's understanding of the underlying principles that govern magic, producing technology and pharmaceuticals that improve quality of life.

The benevolent mission of the Third Amagium is often overshadowed by the dark and militant history of its predecessors, however. Homer's Amagium prohibited the asfalis populace from using magic of any kind with the specific goal of preventing another Cataclysm, and its methods were undeniably inhumane. Inhibitor brands maimed asfalis wyrds, restricting their magical voices to the barest whisper. And those who refused to comply were unequivocally put to death.

The Second Amagium opened the door to gentler inhibitor tattoos and ushered in the concept of exempt magic, setting the stage for the Renaissance and Enlightenment. At the same time, the institution was erected and ruled by Esmeryl Chaucer, an appalling tyrant who annihilated one of the world's greatest cities and killed thousands of people besides.

Even in modern day, it is hard to deny that the Third Amagium has many of the characteristics of a hegemony, despite its purported apoliticality. A monopoly on magical patents, and the compulsory tattooing of newborns in its area of governance have raised the collective eyebrows of human rights activists the world over. But it is important to note that the Third Amagium is not monolithic, despite accusations from anticordant detractors.

The Third Amagium is a deeply human institution. It is blessed with our finest qualities and guided by our best intentions. It is also cursed by all of our flaws and susceptible to our most selfish interests. In the end, an amagia is a person who pursues magic as more than a means to an end: a person who has surrendered themselves to an all-consuming calling to master the powers of the supernatural.
`;

export default function DeepLoreWhatMakesAnAmagiaPage() {
  const isAvailable = new Date() >= new Date('2026-06-15T00:00:00');

  if (!isAvailable) {
    return (
      <main className="w-full h-full min-h-screen bg-[url('/lp/Update/bgroleplay.png')] bg-cover bg-center">
        <div className="w-full h-full min-h-screen bg-black/70 flex items-center justify-center p-8 pt-24">
          <div className="flex flex-col items-center justify-center text-center py-20">
            <h1 className="text-4xl font-semibold text-white mb-4">Coming Soon</h1>
            <p className="text-lg text-white/50">This post will be available on June 15, 2026.</p>
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
