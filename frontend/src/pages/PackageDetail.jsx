import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { PACKAGES, CONTACT } from "@/data/content";
import { useLang } from "@/i18n/LanguageContext";
import { PACKAGES_TA, INCLUDES_TA } from "@/i18n/translations";

const INCLUDES_EN = ["Comfortable stay near the ghats", "Private transport throughout", "Hereditary Tamil Vadhyar at every kshetra", "Ritual samagri & arrangements", "Darshan assistance at temples"];

const PackageDetail = () => {
  const { slug } = useParams();
  const { lang, t } = useLang();
  const base = PACKAGES.find((p) => p.slug === slug);
  if (!base) return <Navigate to="/packages" replace />;

  const pkg = lang === "ta"
    ? { ...base, ...PACKAGES_TA[slug], itinerary: base.itinerary.map((s, i) => ({ ...s, ...PACKAGES_TA[slug].itinerary[i] })) }
    : base;
  const includes = lang === "ta" ? INCLUDES_TA : INCLUDES_EN;

  return (
    <div data-testid="package-detail-page">
      <section className="relative flex min-h-[62vh] items-end overflow-hidden pb-14 pt-36">
        <img src={base.img} alt={pkg.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-[#0A0B0E]/60 to-[#0A0B0E]/35" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong inline-block rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-300"
          >
            {pkg.tagline}
          </motion.span>
          <div className="mt-3 overflow-hidden">
            <motion.h1
              data-testid="package-detail-title"
              className="font-display text-4xl font-bold text-amber-100 sm:text-5xl lg:text-7xl"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              key={lang}
            >
              {pkg.title}
            </motion.h1>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 flex flex-wrap gap-2">
            {pkg.plan.map((d) => (
              <span key={d} className="glass rounded-full px-4 py-1.5 text-xs font-semibold text-amber-200/90">{d}</span>
            ))}
          </motion.div>
        </div>
      </section>
      <Marquee />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Link
          to="/packages"
          data-testid="back-to-packages"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition-colors hover:text-amber-200"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          {t("back_packages")}
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <h2 className="font-display text-3xl font-bold text-amber-100">{t("itinerary_h")}</h2>
            <div className="mt-8 space-y-0">
              {pkg.itinerary.map((step, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <div data-testid={`itinerary-${i}`} className="relative flex gap-6 pb-8">
                    {i < pkg.itinerary.length - 1 && (
                      <span className="absolute left-[21px] top-12 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-amber-500/50 to-amber-500/5" aria-hidden="true" />
                    )}
                    <span className="glass-strong gold-ring z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-amber-300">
                      {i + 1}
                    </span>
                    <div className="glass flex-1 rounded-2xl p-5 transition-colors duration-300 hover:border-amber-400/40">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-amber-500">{t("day_prefix")} {i + 1}</p>
                      <h3 className="mt-1 font-display text-xl font-semibold text-amber-100">{step.place}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-stone-400">{step.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="glass rounded-3xl p-7">
                <h3 className="font-display text-2xl font-bold text-amber-100">{t("includes_h")}</h3>
                <ul className="mt-5 space-y-3">
                  {includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-sm text-stone-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" /> {inc}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                    lang === "ta"
                      ? `நமஸ்தே காசி வாத்தியாரே, நான் ${pkg.title} (${pkg.tagline}) முன்பதிவு செய்ய விரும்புகிறேன். விவரங்களைப் பகிருங்கள்.`
                      : `Namaste Kashi Vadhyar, I would like to book the ${base.title} (${base.tagline}). Please share availability and details.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="package-whatsapp-book"
                  className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-sm font-bold text-stone-950 shadow-[0_8px_28px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:scale-[1.03]"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("book_pkg_wa")}
                </a>
                <p className="mt-4 text-center text-xs text-stone-500">
                  {t("or_call")} <a href={CONTACT.phone1Href} className="text-amber-300 hover:underline">{CONTACT.phone1}</a>
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default PackageDetail;
