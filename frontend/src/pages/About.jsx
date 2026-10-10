import { Link } from "react-router-dom";
import { ArrowRight, Flame, HeartHandshake, Landmark, ScrollText, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { ABOUT_SERVICES } from "@/data/content";
import { useLang } from "@/i18n/LanguageContext";
import { SERVICES_TA, VALUES_TA } from "@/i18n/translations";

const VALUES_EN = [
  { icon: Flame, title: "Vedic Authenticity", desc: "Every samskara performed exactly as prescribed in the shastras, in Tamil and Sanskrit tradition." },
  { icon: Landmark, title: "Hereditary Kshetra Purohit", desc: "A family line of Tamil Vadhyars serving at Kashi's ghats and temples for over a hundred years." },
  { icon: HeartHandshake, title: "Seva, Not Business", desc: "We treat every yatri as family — honest guidance, transparent arrangements, genuine care." },
  { icon: ScrollText, title: "Complete Arrangements", desc: "Rituals, stay, transport and darshan — one trusted point of contact for your entire yatra." },
];

const About = () => {
  const { lang, t } = useLang();
  const services = ABOUT_SERVICES.map((s, i) => (lang === "ta" ? SERVICES_TA[i] : s));
  const values = VALUES_EN.map((v, i) => (lang === "ta" ? { ...v, ...VALUES_TA[i] } : v));

  return (
    <div data-testid="about-page">
      <PageHero
        eyebrow={t("ph_about_eyebrow")}
        title={t("ph_about_t1")}
        accent={t("ph_about_t2")}
        image="https://images.unsplash.com/photo-1608412525521-08980a1f210e?q=85&w=1400"
      />
      <Marquee />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHead
            align="left"
            eyebrow={t("story_eyebrow")}
            title={<>{t("story_title1")} <span className="gold-text italic">{t("story_title2")}</span></>}
          />
          <Reveal delay={0.1}>
            <div className="-mt-6 space-y-4 text-sm leading-relaxed text-stone-300 sm:text-base">
              <p>{t("story_p1")}</p>
              <p>{t("story_p2")}</p>
              <p>{t("story_p3")}</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to="/contact-us"
              data-testid="about-contact-cta"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-7 py-3.5 text-sm font-bold text-stone-950 shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-shadow duration-300 hover:shadow-[0_0_46px_rgba(212,175,55,0.55)]"
            >
              {t("plan_visit")}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <Reveal className="relative" delay={0.15}>
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-500/15 to-transparent blur-2xl" aria-hidden="true" />
          <img
            src="/images/vadhyars-boat-tarpan.jpg"
            alt="Kashi Vadhyars performing tarpan ritual on a Ganga boat"
            loading="lazy"
            className="glass relative aspect-[4/5] w-full rounded-[2rem] object-cover"
          />
          <div className="glass-strong absolute -bottom-5 left-6 right-6 rounded-2xl p-4 text-center sm:left-10 sm:right-10">
            <p className="gold-text font-display text-3xl font-bold">{t("years100")}</p>
            <p className="text-xs uppercase tracking-widest text-stone-400">{t("years_sub")}</p>
          </div>
        </Reveal>
      </section>

      {/* FAMILY PHOTO */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <Reveal>
          <div className="glass group relative overflow-hidden rounded-[2rem]" data-testid="about-family-photo">
            <img
              src="/images/kashi-yatra-group.jpg"
              alt="A yatri family with the Kashi Vadhyar after completing their rituals"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:aspect-[21/9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E]/85 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end gap-4 p-6 sm:p-8">
              <span className="glass-strong flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                <Users className="h-5 w-5 text-amber-400" />
              </span>
              <div>
                <p className="font-display text-xl font-bold text-amber-100 sm:text-2xl">
                  {lang === "ta" ? "எங்கள் யாத்ரீகர் குடும்பங்கள்" : "The Families We Serve"}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-stone-300 sm:text-sm">
                  {lang === "ta"
                    ? "சடங்குகள் நிறைவேறிய பின் வாத்தியாருடன் ஒரு யாத்ரீகர் குடும்பம் — ஒவ்வொரு குடும்பமும் எங்கள் சொந்தக் குடும்பம் போல."
                    : "A yatri family with the Vadhyar after their rituals — every family is received as our own."}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <SectionHead
          eyebrow={t("what_eyebrow")}
          title={<>{t("what_title1")} <span className="gold-text italic">{t("what_title2")}</span></>}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
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
          eyebrow={t("values_eyebrow")}
          title={<>{t("values_title1")} <span className="gold-text italic">{t("values_title2")}</span></>}
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
};

export default About;
