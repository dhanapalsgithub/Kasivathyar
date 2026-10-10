import { Link } from "react-router-dom";
import { ArrowRight, Flame, HeartHandshake, Landmark, ScrollText } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { ABOUT_SERVICES } from "@/data/content";

const values = [
  { icon: Flame, title: "Vedic Authenticity", desc: "Every samskara performed exactly as prescribed in the shastras, in Tamil and Sanskrit tradition." },
  { icon: Landmark, title: "Hereditary Kshetra Purohit", desc: "A family line of Tamil Vadhyars serving at Kashi's ghats and temples for over a hundred years." },
  { icon: HeartHandshake, title: "Seva, Not Business", desc: "We treat every yatri as family — honest guidance, transparent arrangements, genuine care." },
  { icon: ScrollText, title: "Complete Arrangements", desc: "Rituals, stay, transport and darshan — one trusted point of contact for your entire yatra." },
];

const About = () => (
  <div data-testid="about-page">
    <PageHero
      eyebrow="Our Tradition"
      title="About"
      accent="Kashi Vadhyar"
      image="https://images.unsplash.com/photo-1608412525521-08980a1f210e?q=85&w=1400"
    />
    <Marquee />

    <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
      <div>
        <SectionHead
          align="left"
          eyebrow="Our Story"
          title={<>A Family Vow Kept for <span className="gold-text italic">Generations</span></>}
        />
        <Reveal delay={0.1}>
          <div className="-mt-6 space-y-4 text-sm leading-relaxed text-stone-300 sm:text-base">
            <p>
              For more than a century, the family of Tamil Kshetra Purohit{" "}
              <span className="font-semibold text-amber-200">Mr. Venu Gopal Shastrigal</span> has
              welcomed Tamil-speaking pilgrims to the sacred cities of Kashi (Varanasi), Prayag
              (Prayagraj) and Gaya — guiding them through the ancient Vedic traditions and rituals
              of their ancestors.
            </p>
            <p>
              What began as a hereditary calling at the ghats of the Ganga continues today as a
              complete spiritual service: we explain each ritual in your own language, arrange
              stays and transport, and ensure your Pind Daan, Shradh or darshan is performed with
              the same vidhi our forefathers followed.
            </p>
            <p>
              Whether you come to honor your ancestors, seek blessings at Kashi Vishwanath, or
              simply deepen your spiritual journey — you are received as family.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <Link
            to="/contact-us"
            data-testid="about-contact-cta"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-7 py-3.5 text-sm font-bold text-stone-950 shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-shadow duration-300 hover:shadow-[0_0_46px_rgba(212,175,55,0.55)]"
          >
            Plan Your Visit
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
      <Reveal className="relative" delay={0.15}>
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-500/15 to-transparent blur-2xl" aria-hidden="true" />
        <img
          src="https://images.unsplash.com/photo-1614164974666-057a7c713ba6?q=85&w=1000"
          alt="Purohit performing vedic ritual"
          loading="lazy"
          className="glass relative aspect-[4/5] w-full rounded-[2rem] object-cover"
        />
        <div className="glass-strong absolute -bottom-5 left-6 right-6 rounded-2xl p-4 text-center sm:left-10 sm:right-10">
          <p className="gold-text font-display text-3xl font-bold">100+ Years</p>
          <p className="text-xs uppercase tracking-widest text-stone-400">of hereditary service to pilgrims</p>
        </div>
      </Reveal>
    </section>

    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <SectionHead
        eyebrow="What We Do"
        title={<>Services for Every <span className="gold-text italic">Pilgrim</span></>}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ABOUT_SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div data-testid={`about-service-card-${i}`} className="glass h-full rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40">
              <span className="gold-text font-display text-4xl font-bold">0{i + 1}</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-amber-100">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-stone-400">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
      <SectionHead
        eyebrow="Why Families Trust Us"
        title={<>The Values We <span className="gold-text italic">Live By</span></>}
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.08}>
            <div data-testid={`value-card-${i}`} className="glass flex gap-5 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/40">
              <span className="glass-strong flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                <v.icon className="h-5 w-5 text-amber-400" />
              </span>
              <span>
                <h3 className="font-display text-xl font-semibold text-amber-100">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-400">{v.desc}</p>
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  </div>
);

export default About;
