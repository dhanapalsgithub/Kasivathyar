import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { PACKAGES } from "@/data/content";
import { useLang } from "@/i18n/LanguageContext";
import { PACKAGES_TA } from "@/i18n/translations";

const Packages = () => {
  const { lang, t } = useLang();

  return (
    <div data-testid="packages-page">
      <PageHero
        eyebrow={t("ph_packages_eyebrow")}
        title={t("ph_packages_t1")}
        accent={t("ph_packages_t2")}
        image="https://images.unsplash.com/photo-1657089975754-c93bde43b01e?q=85&w=1400"
      />
      <Marquee />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHead
          eyebrow={t("packages_pg_eyebrow")}
          title={<>{t("packages_pg_title1")} <span className="gold-text italic">{t("packages_pg_title2")}</span></>}
          sub={t("packages_pg_sub")}
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {PACKAGES.map((p, i) => {
            const pt = lang === "ta" ? { ...p, ...PACKAGES_TA[p.slug] } : p;
            return (
              <Reveal key={p.slug} delay={i * 0.1}>
                <div
                  data-testid={`packages-card-${p.slug}`}
                  className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img src={p.img} alt={pt.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-transparent to-transparent" />
                    <span className="glass-strong absolute left-4 top-4 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-300">
                      {pt.tagline}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="font-display text-3xl font-bold text-amber-100">{pt.title}</h2>
                    <ul className="mt-5 space-y-2.5">
                      {pt.plan.map((d) => (
                        <li key={d} className="flex items-center gap-2.5 text-sm text-stone-300">
                          <MapPin className="h-4 w-4 shrink-0 text-amber-500" /> {d}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-4 space-y-2 border-t border-amber-500/10 pt-4">
                      {pt.includes.map((inc) => (
                        <li key={inc} className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-amber-300/90">
                          <Sparkles className="h-3.5 w-3.5 shrink-0" /> {inc}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/packages/${p.slug}`}
                      data-testid={`packages-view-${p.slug}`}
                      className="group/btn mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3.5 text-sm font-bold tracking-wide text-stone-950 shadow-[0_0_24px_rgba(212,175,55,0.3)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]"
                    >
                      {t("view_itinerary")}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Packages;
