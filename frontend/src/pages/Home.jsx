import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CalendarDays, Flame, MapPin, Sparkles } from "lucide-react";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import GoogleBadge from "@/components/GoogleBadge";
import VideoCard from "@/components/VideoCard";
import { useLang } from "@/i18n/LanguageContext";
import { RITUALS_TA, PACKAGES_TA, TESTIMONIALS_TA, SERVICES_TA, VIDEO_TITLES_TA } from "@/i18n/translations";
import { getUpcomingFestivals } from "@/data/panchangam";
import { HERO_VIDEO, HERO_POSTER, STATS, RITUALS, PACKAGES, TESTIMONIALS, VIDEOS, ABOUT_SERVICES, CONTACT } from "@/data/content";

const Home = () => {
  const { lang, t } = useLang();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.25]);

  const heroLines = [
    { text: t("hero_l1") },
    { text: t("hero_l2") },
    { text: t("hero_l3"), accent: true },
  ];
  const statLabels = [t("stat1_label"), t("stat2_label"), t("stat3_label"), t("stat4_label")];
  const services = ABOUT_SERVICES.map((s, i) => (lang === "ta" ? SERVICES_TA[i] : s));
  const events = getUpcomingFestivals().slice(0, 3);

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
            className="glass inline-flex max-w-full items-center gap-2 rounded-full px-4 py-2"
          >
            <Flame className="h-3.5 w-3.5 shrink-0 text-amber-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] leading-relaxed text-amber-200/90">
              {t("hero_eyebrow")}
            </span>
          </motion.div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.08] text-amber-50 sm:text-6xl lg:text-8xl" key={lang}>
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
            {t("hero_sub")}
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
              {t("hero_book")}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/packages"
              data-testid="hero-packages-button"
              className="glass rounded-full px-8 py-4 text-sm font-semibold tracking-wide text-amber-100 transition-colors duration-300 hover:border-amber-400/50 hover:text-amber-300"
            >
              {t("hero_pkgs")}
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
          <span className="text-[10px] uppercase tracking-[0.3em] text-amber-200/60">{t("scroll")}</span>
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
                <span className="text-xs uppercase tracking-widest text-stone-400">{statLabels[i]}</span>
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
              <p className="text-xs tracking-wider text-stone-400">{t("purohit_role")}</p>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHead
            align="left"
            eyebrow={t("about_eyebrow")}
            title={<>{t("about_title1")} <span className="gold-text italic">{t("about_title2")}</span></>}
          />
          <Reveal delay={0.1}>
            <p className="-mt-6 text-sm leading-relaxed text-stone-300 sm:text-base">{t("about_p")}</p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {services.map((s, i) => (
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
              {t("about_learn")}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* RITUALS */}
      <section className="relative overflow-hidden py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-amber-600/10 blur-[140px]" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            eyebrow={t("rituals_eyebrow")}
            title={<>{t("rituals_title1")} <span className="gold-text italic">{t("rituals_title2")}</span></>}
            sub={t("rituals_sub")}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RITUALS.map((r, i) => {
              const rt = lang === "ta" ? RITUALS_TA[r.slug] : r;
              return (
                <Reveal key={r.slug} delay={(i % 3) * 0.1}>
                  <Link
                    to="/poojas"
                    data-testid={`ritual-card-${r.slug}`}
                    className="glass group block overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={r.img}
                        alt={rt.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-2xl font-bold text-amber-100">{rt.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone-400">{rt.desc}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400">
                        {t("know_more")} <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHead
          eyebrow={t("pkgs_eyebrow")}
          title={<>{t("pkgs_title1")} <span className="gold-text italic">{t("pkgs_title2")}</span></>}
          sub={t("pkgs_sub")}
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((p, i) => {
            const pt = lang === "ta" ? { ...p, ...PACKAGES_TA[p.slug] } : p;
            return (
              <Reveal key={p.slug} delay={i * 0.1}>
                <div
                  data-testid={`package-card-${p.slug}`}
                  className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img src={p.img} alt={pt.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-transparent to-transparent" />
                    <span className="glass-strong absolute left-4 top-4 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-300">
                      {pt.tagline}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-3xl font-bold text-amber-100">{pt.title}</h3>
                    <ul className="mt-4 space-y-2">
                      {pt.plan.map((d) => (
                        <li key={d} className="flex items-center gap-2.5 text-sm text-stone-300">
                          <MapPin className="h-3.5 w-3.5 shrink-0 text-amber-500" /> {d}
                        </li>
                      ))}
                      <li className="flex items-center gap-2.5 text-sm font-semibold text-amber-300">
                        <Sparkles className="h-3.5 w-3.5 shrink-0" /> {t("stay_transport")}
                      </li>
                    </ul>
                    <Link
                      to={`/packages/${p.slug}`}
                      data-testid={`package-view-${p.slug}`}
                      className="group/btn mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-amber-500/40 px-6 py-3 text-sm font-bold tracking-wide text-amber-300 transition-all duration-300 hover:bg-amber-500 hover:text-stone-950"
                    >
                      {t("view_details")}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* VIDEO GALLERY */}
      <section className="relative overflow-hidden py-16">
        <div className="pointer-events-none absolute right-0 top-1/3 h-[380px] w-[380px] rounded-full bg-teal-900/25 blur-[130px]" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            eyebrow={t("videos_eyebrow")}
            title={<>{t("videos_title1")} <span className="gold-text italic">{t("videos_title2")}</span></>}
            sub={t("videos_sub")}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.map((v, i) => (
              <VideoCard key={v.src} video={lang === "ta" ? { ...v, title: VIDEO_TITLES_TA[i] } : v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHead
          eyebrow={t("testi_eyebrow")}
          title={<>{t("testi_title1")} <span className="gold-text italic">{t("testi_title2")}</span></>}
        />
        <GoogleBadge />
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((tm, i) => {
            const tt = lang === "ta" ? { ...tm, ...TESTIMONIALS_TA[i] } : tm;
            return (
              <Reveal key={tm.name} delay={i * 0.1}>
                <figure data-testid={`testimonial-${i}`} className="glass flex h-full flex-col rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-2">
                  <span className="font-display text-6xl leading-none text-amber-500/40" aria-hidden="true">"</span>
                  <blockquote className="-mt-4 flex-1 text-sm leading-relaxed text-stone-300">{tt.quote}</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-700 font-display text-lg font-bold text-stone-950">
                      {tm.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-amber-100">{tm.name}</span>
                      <span className="block text-xs text-stone-500">{tt.place}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* EVENTS PREVIEW — dates roll forward automatically from the panchangam dataset */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHead
          eyebrow={t("events_eyebrow")}
          title={<>{t("events_title1")} <span className="gold-text italic">{t("events_title2")}</span></>}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {events.map((ev, i) => {
            const title = lang === "ta" ? ev.titleTa : ev.titleEn;
            const date = lang === "ta" ? ev.dateTa : ev.dateEn;
            const desc = lang === "ta" ? ev.descTa : ev.descEn;
            return (
              <Reveal key={ev.id} delay={i * 0.1}>
                <Link
                  to="/events"
                  data-testid={`event-preview-${i}`}
                  className="glass group block overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={ev.img} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] to-transparent" />
                    <span className="glass-strong absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold text-amber-300">
                      <CalendarDays className="h-3.5 w-3.5" /> {date}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-2xl font-bold text-amber-100">{title}</h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-stone-400">{desc}</p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CONTACT CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-600/10 blur-[150px]" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">{t("cta_eyebrow")}</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-amber-100 sm:text-4xl lg:text-5xl">
              {t("cta_title1")} <span className="gold-text italic">{t("cta_title2")}</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-400 sm:text-base">{t("cta_p")}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={CONTACT.phone1Href}
                data-testid="home-call-cta"
                className="glass rounded-full px-6 py-3.5 text-sm font-semibold text-amber-200 transition-colors duration-300 hover:border-amber-400/50 hover:text-amber-300"
              >
                {t("call_prefix")} {CONTACT.phone1}
              </a>
              <a
                href={CONTACT.phone2Href}
                data-testid="home-call-cta-2"
                className="glass rounded-full px-6 py-3.5 text-sm font-semibold text-amber-200 transition-colors duration-300 hover:border-amber-400/50 hover:text-amber-300"
              >
                {t("call_prefix")} {CONTACT.phone2}
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
