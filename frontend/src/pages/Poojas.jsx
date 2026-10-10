import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import ContactForm from "@/components/ContactForm";
import { RITUALS, CONTACT } from "@/data/content";

const Poojas = () => (
  <div data-testid="poojas-page">
    <PageHero
      eyebrow="Sacred Rituals"
      title="Poojas &"
      accent="Vedic Rites"
      image="https://images.unsplash.com/photo-1703173342540-fba340054867?q=85&w=1400"
    />
    <Marquee />

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHead
        eyebrow="Holy Spiritual Rites"
        title={<>Rituals Performed with <span className="gold-text italic">Complete Vidhi</span></>}
        sub="Each rite is conducted by hereditary Tamil Vadhyars at the sacred ghats of Kashi, Gaya and Prayag — explained to your family in Tamil, every step of the way."
      />
      <div className="space-y-8">
        {RITUALS.map((r, i) => (
          <Reveal key={r.slug} delay={0.05}>
            <article
              data-testid={`pooja-detail-${r.slug}`}
              className={`glass group grid overflow-hidden rounded-3xl transition-all duration-500 hover:border-amber-400/40 md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative h-64 overflow-hidden md:h-auto">
                <img
                  src={r.img}
                  alt={r.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0B0E]/40" />
                <span className="glass-strong absolute left-4 top-4 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <h2 className="font-display text-3xl font-bold text-amber-100 lg:text-4xl">{r.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-stone-300 sm:text-base">{r.desc}</p>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">
                  Available at <span className="font-semibold text-amber-300">Kashi · Gaya · Prayag</span> — with
                  samagri, brahmin bhojan and daan arrangements handled end to end.
                </p>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                    `Namaste Kashi Vadhyar, I would like to book / know more about ${r.title}.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`pooja-book-${r.slug}`}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-amber-500/40 px-6 py-3 text-sm font-bold tracking-wide text-amber-300 transition-all duration-300 hover:bg-amber-500 hover:text-stone-950"
                >
                  Book via WhatsApp
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
      <SectionHead
        eyebrow="Not Sure Which Rite?"
        title={<>Ask the <span className="gold-text italic">Vadhyar</span></>}
        sub="Tell us your family requirement — we will guide you to the right ritual, muhurat and ghat."
      />
      <Reveal>
        <ContactForm />
      </Reveal>
    </section>
  </div>
);

export default Poojas;
