import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageCircle, Sparkles, Scroll } from "lucide-react";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { PACKAGES, CONTACT } from "@/data/content";
import { useLang } from "@/i18n/LanguageContext";
import { PACKAGES_TA, PACKAGES_HI, INCLUDES_TA, INCLUDES_HI, pickLang } from "@/i18n/translations";

const INCLUDES_EN = [
  "Comfortable stay near the ghats",
  "Private transport throughout",
  "Hereditary Tamil Vadhyar at every kshetra",
  "Ritual samagri & arrangements",
  "Darshan assistance at temples"
];

// 🌟 Detailed Rituals by Place / Location Name
const LOCATION_RITUALS_MAP = {
  prayag: [
    "Ganapati Pooja",
    "Graha Preeti Daanam",
    "Veni Daanam (Hair Offering)",
    "Mahasankalpam (Pap Kshayartham)",
    "Rameshwaram Sand Puja",
    "Hiranya Shraddham",
    "Pinda Pradanam & Tila Tarpanam"
  ],
  kashi: [
    "Poorvanga Sankalpam & Punyaha Vachanam",
    "Chakra & Manikarnika Theertha Snanam",
    "Manikarnika Hiranya Roopa Shraddham (with Homam)",
    "Pinda Daanam & Tila Tarpanam",
    "Gou Daanam & Dasha Daanam"
  ],
  gaya: [
    "Maha Sankalpam & Phalguni Theertha Snanam",
    "Phalguni Hiranya Shraddham",
    "Vishnu Paada Theertha Shraddham & Darshanam",
    "Maatru & Pitru Shodashi",
    "Akshaya Vata Shraddham (with Homam)"
  ]
};

// 🌟 Kshetra Spiritual Data with Shlokas
const KSHETRA_SPIRITUAL_DATA = {
  prayag: {
    shloka: "॥ त्रिषु लोकेषु यत् तीर्थं प्रयागः परिकीर्तितः। गङ्गा यमुना संगमात् पुण्यं वर्धयते सदा ॥",
    overview: "Prayagraj (Prayag) sits at the sacred Triveni Sangam confluence of Ganga, Yamuna, and Saraswati. Revered as Tirth Raj, it is the primary kshetra for Veni Daanam, Pitru Tarpanam, and sacred bathing rituals.",
    rituals: LOCATION_RITUALS_MAP.prayag
  },
  kashi: {
    shloka: "॥ अविमुक्तं तु तत्क्षेत्रं काशीति परिकीर्तितम्। यत्र देहत्यजं प्राप्य जीवः कैवल्यमश्नुते॥",
    overview: "The eternal city of Lord Shiva, Kashi is the ultimate destination for ancestral rites, Manikarnika Ghat ceremonies, and Kashi Vishwanath Darshan under expert Vedic guidance.",
    rituals: LOCATION_RITUALS_MAP.kashi
  },
  gaya: {
    shloka: "॥ न गयासदृशं तीर्थं पितॄणां तारणं क्वचित्। पिण्डदानेन विधिना यान्ति ते परमां गतिम् ॥",
    overview: "The sacred grounds of Gaya Ji provide eternal peace for ancestral lineages. We coordinate Pind Daan rituals at Phalgu River and Vishnupad Temple following strict Vedic traditions.",
    rituals: LOCATION_RITUALS_MAP.gaya
  }
};

const PackageDetail = () => {
  const { slug } = useParams();
  const { lang, t } = useLang();
  const base = PACKAGES.find((p) => p.slug === slug);
  if (!base) return <Navigate to="/packages" replace />;

  const pkg = lang === "en"
    ? base
    : (() => {
        const m = pickLang(lang, {}, PACKAGES_TA[slug], PACKAGES_HI[slug]);
        return { ...base, ...m, itinerary: base.itinerary.map((s, i) => ({ ...s, ...(m.itinerary?.[i] || {}) })) };
      })();

  const includes = pickLang(lang, INCLUDES_EN, INCLUDES_TA, INCLUDES_HI);
  const waMsg = pickLang(
    lang,
    `Namaste Kashi Vadhyar, I would like to book the ${base.title} (${base.tagline}). Please share availability and details.`,
    `நமஸ்தே காசி வாத்தியாரே, நான் ${pkg.title} (${pkg.tagline}) முன்பதிவு செய்ய விரும்புகிறேன். விவரங்களைப் பகிருங்கள்.`,
    `नमस्ते काशी वाध्यार जी, मैं ${pkg.title} (${pkg.tagline}) बुक करना चाहता/चाहती हूँ। कृपया उपलब्धता और विवरण साझा करें।`
  );

  // Helper to match location rituals dynamically for each day
  const getDayRituals = (step) => {
    if (step.rituals && step.rituals.length > 0) return step.rituals;
    const placeLower = (step.place || "").toLowerCase();
    if (placeLower.includes("prayag")) return LOCATION_RITUALS_MAP.prayag;
    if (placeLower.includes("kashi")) return LOCATION_RITUALS_MAP.kashi;
    if (placeLower.includes("gaya")) return LOCATION_RITUALS_MAP.gaya;
    return null;
  };

  // Match main Kshetra shloka header based on package content
  const firstDayPlace = (base.itinerary?.[0]?.place || "").toLowerCase();
  const matchedKshetraKey = Object.keys(KSHETRA_SPIRITUAL_DATA).find(k => slug.includes(k) || firstDayPlace.includes(k)) || "kashi";
  const kshetraHeader = KSHETRA_SPIRITUAL_DATA[matchedKshetraKey];

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

        {/* 🌟 Spiritual Shloka Header Section */}
        {kshetraHeader && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mt-8 rounded-3xl p-6 sm:p-8 border border-amber-500/20"
          >
            <div className="text-center max-w-3xl mx-auto">
              <Scroll className="mx-auto h-8 w-8 text-amber-400 mb-3" />
              <p className="font-sanskrit text-lg sm:text-xl font-medium text-amber-200 leading-relaxed italic">
                {kshetraHeader.shloka}
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-300">
                {kshetraHeader.overview}
              </p>
            </div>
          </motion.div>
        )}

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <h2 className="font-display text-3xl font-bold text-amber-100">{t("itinerary_h")}</h2>
            <div className="mt-8 space-y-0">
              {pkg.itinerary.map((step, i) => {
                const dayRituals = getDayRituals(step);
                return (
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

                        {/* 🌟 Day-wise Specific Rituals List */}
                        {dayRituals && dayRituals.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-amber-500/10">
                            <p className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2.5 flex items-center gap-1.5">
                              <Sparkles className="h-3.5 w-3.5 text-amber-400" /> Key Rituals & Ceremonies Scheduled:
                            </p>
                            <ul className="grid gap-2 sm:grid-cols-2">
                              {dayRituals.map((r, rIdx) => (
                                <li key={rIdx} className="text-xs text-stone-300 flex items-center gap-2">
                                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                                  <span>{r}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
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
                  href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(waMsg)}`}
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