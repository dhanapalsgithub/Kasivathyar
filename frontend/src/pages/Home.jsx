import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CalendarDays, Flame, MapPin, Sparkles } from "lucide-react";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import ContactForm from "@/components/ContactForm";
import VideoCard from "@/components/VideoCard";
import { HERO_VIDEO, HERO_POSTER, STATS, RITUALS, PACKAGES, TESTIMONIALS, EVENTS, VIDEOS, ABOUT_SERVICES, CONTACT } from "@/data/content";

const heroLines = [
  { text: "Experience Sacred" },
  { text: "Hindu Rites in" },
  { text: "Kashi", accent: true },
];

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.25]);

  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section ref={heroRef} className="relative flex min-h-[100svh] items-end overflow-hidden">
        <motion.video
          src={HERO_VIDEO}
          poster={HERO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          style={{ scale: videoScale }}
          className="absolute inset-0 h-full w-full object-cover"
          data-testid="hero-video"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-[#0A0B0E]/45 to-[#0A0B0E]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0E]/80 via-transparent to-transparent" />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative mx-auto w-full max-w-7xl px-4 pb-28 pt-40 sm:px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2"
          >
            <Flame className="h-3.5 w-3.5 text-amber-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-200/90">
              Tamil Kshetra Purohit · Kashi | Gaya | Prayagraj
            </span>
          </motion.div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] text-amber-50 sm:text-6xl lg:text-8xl">
            {heroLines.map((line, i) => (
              <span key={line.text} className="block overflow-hidden pb-1">
                <motion.span
                  className={`block ${line.accent ? "gold-text italic pr-4" : ""}`}
                  initial={{ y: "112%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.4 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-stone-300 sm:text-base"
          >
            Explore the sacred Kashi Vishwanath Temple on the banks of the holy Ganga.
            Participate in aarti ceremonies, perform ancestral rites with hereditary
            Tamil Vadhyars, and meditate to attain inner peace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact-us"
              data-testid="hero-book-button"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-8 py-4 text-sm font-bold tracking-wide text-stone-950 shadow-[0_0_36px_rgba(212,175,55,0.4)] transition-all duration-300 hover:shadow-[0_0_54px_rgba(212,175,55,0.6)]"
            >
              Book Now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/packages"
              data-testid="hero-packages-button"
              className="glass rounded-full px-8 py-4 text-sm font-semibold tracking-wide text-amber-100 transition-colors duration-300 hover:border-amber-400/50 hover:text-amber-300"
            >
              View Yatra Packages
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
          aria-hidden="true"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-amber-200/60">Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-px bg-gradient-to-b from-amber-400 to-transparent"
          />
        </motion.div>
      </section>

      <Marquee />

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="glass grid grid-cols-2 gap-px overflow-hidden rounded-3xl lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center gap-2 px-4 py-8 text-center" data-testid={`stat-${i}`}>
                <span className="gold-text font-display text-4xl font-bold sm:text-5xl">{s.value}</span>
                <span className="text-xs uppercase tracking-widest text-stone-400">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-500/15 to-transparent blur-2xl" aria-hidden="true" />
          <div className="glass relative overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1614164974666-057a7c713ba6?q=85&w=1000"
              alt="Tamil Kshetra Purohit performing a ritual"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-2xl p-4">
              <p className="font-display text-lg font-semibold text-amber-100">Mr. Venu Gopal Shastrigal</p>
              <p className="text-xs tracking-wider text-stone-400">Tamil Kshetra Purohit · Serving pilgrims for over a century</p>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHead
            align="left"
            eyebrow="Embark on a Sacred Journey"
            title={<>A Century of Devotion at the <span className="gold-text italic">Holy Ghats</span></>}
          />
          <Reveal delay={0.1}>
            <p className="-mt-6 text-sm leading-relaxed text-stone-300 sm:text-base">
              Discover the spiritual heritage of Kashi (Varanasi), Prayag (Prayagraj) and Gaya with
              Kashi Vadhyar. Under the esteemed guidance of Tamil Kshetra Purohit Mr. Venu Gopal
              Shastrigal, whose family has served pilgrims for over a century, we offer comprehensive
              guidance and exclusive pilgrimage packages — ancient Vedic rituals, sacred temples,
              ghats on the holy Ganges, and historical monuments.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {ABOUT_SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={0.12 + i * 0.06}>
                <div className="glass rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1" data-testid={`about-service-${i}`}>
                  <Sparkles className="h-5 w-5 text-amber-400" />
                  <h3 className="mt-3 font-display text-lg font-semibold text-amber-100">{s.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-stone-400">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <Link
              to="/about-us"
              data-testid="home-about-link"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-amber-300 transition-colors hover:text-amber-200"
            >
              Learn more about our tradition
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* RITUALS */}
      <section className="relative py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-amber-600/10 blur-[140px]" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            eyebrow="We Offer"
            title={<>Holy <span className="gold-text italic">Spiritual Rites</span></>}
            sub="Every ritual is performed by hereditary Tamil Vadhyars at the most sacred ghats and temples of Kashi, Gaya and Prayag."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RITUALS.map((r, i) => (
              <Reveal key={r.slug} delay={(i % 3) * 0.1}>
                <Link
                  to="/poojas"
                  data-testid={`ritual-card-${r.slug}`}
                  className="glass group block overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={r.img}
                      alt={r.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-bold text-amber-100">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-400">{r.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400">
                      Know more <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHead
          eyebrow="Our Packages"
          title={<>Yatras Crafted for <span className="gold-text italic">Your Family</span></>}
          sub="Stay, transport and hereditary Vadhyar guidance included in every package across Prayag, Kashi and Gaya."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <div
                data-testid={`package-card-${p.slug}`}
                className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-transparent to-transparent" />
                  <span className="glass-strong absolute left-4 top-4 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-300">
                    {p.tagline}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-3xl font-bold text-amber-100">{p.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {p.plan.map((d) => (
                      <li key={d} className="flex items-center gap-2.5 text-sm text-stone-300">
                        <MapPin className="h-3.5 w-3.5 shrink-0 text-amber-500" /> {d}
                      </li>
                    ))}
                    <li className="flex items-center gap-2.5 text-sm font-semibold text-amber-300">
                      <Sparkles className="h-3.5 w-3.5 shrink-0" /> Stay & Transport Included
                    </li>
                  </ul>
                  <Link
                    to={`/packages/${p.slug}`}
                    data-testid={`package-view-${p.slug}`}
                    className="group/btn mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-amber-500/40 px-6 py-3 text-sm font-bold tracking-wide text-amber-300 transition-all duration-300 hover:bg-amber-500 hover:text-stone-950"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VIDEO GALLERY */}
      <section className="relative py-16">
        <div className="pointer-events-none absolute right-0 top-1/3 h-[380px] w-[380px] rounded-full bg-teal-900/25 blur-[130px]" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            eyebrow="Experience Kashi in Motion"
            title={<>Sacred Moments, <span className="gold-text italic">Captured in HD</span></>}
            sub="Cinematic glimpses of the Ganga Aarti, the eternal ghats and living Hindu tradition — filmed on location."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.map((v, i) => (
              <VideoCard key={v.src} video={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHead
          eyebrow="Devotee Testimonials"
          title={<>Blessings from <span className="gold-text italic">Our Yatris</span></>}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure data-testid={`testimonial-${i}`} className="glass flex h-full flex-col rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-2">
                <span className="font-display text-6xl leading-none text-amber-500/40" aria-hidden="true">"</span>
                <blockquote className="-mt-4 flex-1 text-sm leading-relaxed text-stone-300">{t.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-700 font-display text-lg font-bold text-stone-950">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-amber-100">{t.name}</span>
                    <span className="block text-xs text-stone-500">{t.place}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHead
          eyebrow="Sacred Calendar"
          title={<>Upcoming <span className="gold-text italic">Events</span></>}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {EVENTS.slice(0, 3).map((ev, i) => (
            <Reveal key={ev.title} delay={i * 0.1}>
              <Link
                to="/events"
                data-testid={`event-preview-${i}`}
                className="glass group block overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={ev.img} alt={ev.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] to-transparent" />
                  <span className="glass-strong absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold text-amber-300">
                    <CalendarDays className="h-3.5 w-3.5" /> {ev.date}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl font-bold text-amber-100">{ev.title}</h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-stone-400">{ev.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-600/10 blur-[150px]" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Begin Your Yatra</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-amber-100 sm:text-4xl lg:text-5xl">
              Speak to the Vadhyar, <span className="gold-text italic">Today</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-400 sm:text-base">
              Share your requirement and the details open straight in WhatsApp to{" "}
              <span className="font-semibold text-amber-300">{CONTACT.whatsappDisplay}</span> —
              no accounts, no waiting. Or simply call us.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={CONTACT.phone1Href}
                data-testid="home-call-cta"
                className="glass rounded-full px-6 py-3.5 text-sm font-semibold text-amber-200 transition-colors duration-300 hover:border-amber-400/50 hover:text-amber-300"
              >
                Call {CONTACT.phone1}
              </a>
              <a
                href={CONTACT.phone2Href}
                data-testid="home-call-cta-2"
                className="glass rounded-full px-6 py-3.5 text-sm font-semibold text-amber-200 transition-colors duration-300 hover:border-amber-400/50 hover:text-amber-300"
              >
                Call {CONTACT.phone2}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
