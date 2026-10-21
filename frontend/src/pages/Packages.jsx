import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { PACKAGES } from "@/data/content";
import { useLang } from "@/i18n/LanguageContext";
import { PACKAGES_TA, PACKAGES_HI, pickLang } from "@/i18n/translations";

const MOKSHA_CIRCUIT_DATA = [
  {
    slug: "kashi",
    img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    en: {
      title: "KASHI",
      tagline: "MOKSHA PURI • VAISHNAVA SRARDHAM",
      desc: "॥ अविमुक्तं तु तत्क्षेत्रं काशीति परिकीर्तितम्। यत्र देहत्यजं प्राप्य जीवः कैवल्यमश्नुते॥ The eternal city of Lord Shiva, Kashi is the ultimate destination for Anugna, Vaishnava Srardham, Gou Daanam, and Manikarnika Snanam under expert Vedic guidance."
    },
    ta: {
      title: "காசி (KASHI)",
      tagline: "மோட்ச புரி • வைஷ்ணவ சிரார்த்தம்",
      desc: "॥ अविमुक्तं तु तत्क्षेत्रं काशीति परिकीर्तितम्। यत्र देहत्यजं प्राप्य जीवः कैवल्यमश्नुते॥ காசி மாநகரில் அனுக்ஞை, வைஷ்ணவ சிரார்த்தம், கோ தானம் மற்றும் மணிகர்ணிகா தீர்த்த ஸ்நானம் ஆகியவை வைதீக முறையில் செய்யப்படுகின்றன."
    },
    hi: {
      title: "काशी (KASHI)",
      tagline: "मोक्ष पुरी • वैष्णव श्राद्ध",
      desc: "॥ अविमुक्तं तु तत्क्षेत्रं काशीति परिकीर्तितम्। यत्र देहत्यजं प्राप्य जीवः कैवल्यमश्नुते॥ काशी में अनुज्ञा, वैष्णव श्राद्ध, गो दान और मणिकर्णिका स्नान वैदिक विधि से संपन्न करें।"
    }
  },
  {
    slug: "prayagraj",
    img: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=80",
    en: {
      title: "PRAYAGRAJ",
      tagline: "TRIVENI SANGAM • VENI DAANAM",
      desc: "॥ त्रिषु लोकेषु यत् तीर्थं प्रयागः परिकीर्तितः। गङ्गा यमुना संगमात् पुण्यं वर्धयते सदा ॥ Perform Veni Daanam, Saikatalinga Pujai, Triveni Snanam, and collect sacred water for Ramanathar Abhishekam."
    },
    ta: {
      title: "பிரயாக்ராஜ் (PRAYAGRAJ)",
      tagline: "திரிவேணி சங்கமம் • வேணி தானம்",
      desc: "॥ त्रिषु लोकेषु यत् तीर्थं प्रयागः परिकीर्तितः। गङ्गा यमुना संगमात् पुण्यं वर्धयते सदा ॥ திரிவேணி சங்கமத்தில் வேணி தானம், மணல் பூஜை, மற்றும் ராமேஸ்வர அபிஷேகத்திற்காக நீர் சேகரித்தல்."
    },
    hi: {
      title: "प्रयागराज (PRAYAGRAJ)",
      tagline: "त्रिवेणी संगम • वेणी दान",
      desc: "॥ त्रिषु लोकेषु यत् तीर्थं प्रयागः परिकीर्तितः। गङ्गा यमुना संगमात् पुण्यं वर्धयते सदा ॥ त्रिवेणी संगम पर वेणी दान, बालू पूजा और रामेश्वरम अभिषेक हेतु जल संकलन करें।"
    }
  },
  {
    slug: "gaya",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    en: {
      title: "GAYA JI",
      tagline: "PHALGU RIVER • 64+ PIND DAAN",
      desc: "॥ न गयासदृशं तीर्थं पितॄणां तारणं क्वचित्। पिण्डदानेन विधिना यान्ति ते परमां गतिम् ॥ Perform Falguni Hiranya Shraddham (17 Pindam) and Vishnupada Akshyayavata Shraddham (64+ Pindam) for ultimate ancestral liberation."
    },
    ta: {
      title: "கயா ஜி (GAYA JI)",
      tagline: "பல்கு நதி • பிண்ட தானம்",
      desc: "॥ न गयासदृशं तीर्थं पितॄणां तारणं क्वचित्। पिण्डदानेन विधिना यान्ति ते परमां गतिम् ॥ பல்கு நதிக்கரையில் ஹிரண்ய சிரார்த்தம் மற்றும் விष्णुपद, அக்ஷய வடம் ஆகியவற்றில் 64+ பிண்ட தானங்களைச் செய்து பித்ரு மோட்சம் பெறுக."
    },
    hi: {
      title: "गया जी (GAYA JI)",
      tagline: "फल्गु नदी • पिंड दान",
      desc: "॥ न गयासदृशं तीर्थं पितॄणां तारणं क्वचित्। पिण्डदानेन विधिना यान्ति ते परमां गतिम् ॥ फल्गु नदी तट पर फल्गुनी हिरण्य श्राद्ध (17 पिंड) और विष्णुपद-अक्षय वट श्राद्ध (64+ पिंड) संपन्न करें।"
    }
  },
  {
    slug: "rameshwaram",
    img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    en: {
      title: "RAMESHWARAM",
      tagline: "THEERTHAM SNAN • PITRU TARPANAM",
      desc: "Undertake Theertham Snan and Pitru Tarpanam at ancient sacred waters for karmic cleansing and divine grace."
    },
    ta: {
      title: "ராமேஸ்வரம் (RAMESHWARAM)",
      tagline: "தீர்த்த ஸ்நானம் • பித்ரு தர்ப்பணம்",
      desc: "கர்ம வினைகளைப் போக்கி இறைவனின் அருள் பெற, பழமையான மற்றும் புனிதமான தீர்த்தங்களில் ஸ்நானம் செய்து பித்ரு தர்ப்பணம் செய்தல்."
    },
    hi: {
      title: "रामेश्वरम (RAMESHWARAM)",
      tagline: "तीर्थ स्नान • पितृ तर्पण",
      desc: "कर्मों की शुद्धि और दैवीय कृपा प्राप्त करने के लिए प्राचीन पवित्र जलों में तीर्थ स्नान और पितृ तर्पण करें।"
    }
  },
  {
    slug: "matru-gaya",
    img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80",
    en: {
      title: "MATRU GAYA",
      tagline: "SIDDHPUR • GUJARAT",
      desc: "Matru Gaya at Siddhpur is a sacred pilgrimage dedicated exclusively to performing Shraddha and Pinda Daan for one's mother."
    },
    ta: {
      title: "மாத்ரு கயா (MATRU GAYA)",
      tagline: "சித்தபூர் • குஜராத்",
      desc: "தாய்வழி முன்னோர்களுக்கும், குறிப்பாகத் தாயாரின் ஆன்ம சாந்திக்காகவும் சிரார்த்தம் மற்றும் பிண்ட தான சடங்குகளைச் செய்வதற்காகவே பிரத்யேகமாக அமைக்கப்பட்ட புனித யாத்திரை தலமாகும்."
    },
    hi: {
      title: "मातृ गया (MATRU GAYA)",
      tagline: "सिद्धपुर • गुजरात",
      desc: "सिद्धपुर में मातृ गया विशेष रूप से माता के लिए श्राद्ध और पिंड दान करने के लिए समर्पित एक पवित्र तीर्थ स्थल है।"
    }
  },
  {
    slug: "ashta-gaya",
    img: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80",
    en: {
      title: "ASHTA GAYA SHRADDHAM",
      tagline: "SPIRITUAL HARMONY • MOKSHA BLESSINGS",
      desc: "The ritual involves Sankalpam, Pinda Daan, Tila Tarpanam, and Shraddha ceremonies, performed under the guidance of Vedic priests."
    },
    ta: {
      title: "அஷ்ட கயா சிரார்த்தம் (ASHTA GAYA SHRADDHAM)",
      tagline: "ஆன்மீக நல்லிணக்கம் • மோட்ச ஆசிகள்",
      desc: "வேத விற்பன்னர்களின் நேரடி வழிகாட்டுதலின் கீழ் சங்கல்பம், பிண்ட தானம், தில தர்ப்பணம் மற்றும் முழுமையான சிரார்த்தச் சடங்குகளை உள்ளடக்கிய ஆன்மீக நிகழ்வு."
    },
    hi: {
      title: "अष्ट गया श्राद्धम (ASHTA GAYA SHRADDHAM)",
      tagline: "आध्यात्मिक सद्भाव • मोक्ष आशीर्वाद",
      desc: "वैदिक पुरोहितों के मार्गदर्शन में संकल्पम, पिंड दान, तिल तर्पण और श्राद्ध अनुष्ठान शामिल हैं।"
    }
  }
];

const Packages = () => {
  const { lang, t } = useLang();

  return (
    <div data-testid="packages-page">
      <PageHero
        eyebrow={t("ph_packages_eyebrow")}
        title={t("ph_packages_t1")}
        accent={t("ph_packages_t2")}
        image="https://images.unsplash.com/photo-1657089975754-c93bde43b01e?auto=format&fit=crop&w=1400&q=80"
      />
      <Marquee />

      {/* 🌟 SACRED MOKSHA CIRCUIT SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-amber-500"
          >
            THE DIVINE LIBERATION PATHWAY
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-2 font-display text-3xl font-bold text-amber-100 sm:text-4xl lg:text-5xl"
          >
            DIVINE HERITAGE <span className="gold-text italic">ETERNAL RITES</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {MOKSHA_CIRCUIT_DATA.map((item, index) => {
            const content = item[lang] || item.en;
            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass group flex flex-col overflow-hidden rounded-3xl border border-amber-500/15 transition-all duration-500 hover:border-amber-400/50 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)]"
              >
                <div className="relative h-56 overflow-hidden bg-stone-900">
                  <img 
                    src={item.img} 
                    alt={content.title} 
                    loading="lazy" 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-transparent to-transparent" />
                  <span className="glass-strong absolute left-4 top-4 rounded-full px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-300">
                    {content.tagline}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-bold text-amber-100">{content.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-300 flex-1">{content.desc}</p>
                  <div className="mt-6 pt-4 border-t border-amber-500/10 flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{lang === "ta" ? "வைதீக முறை • அங்கீகரிக்கப்பட்ட சடங்குகள்" : lang === "hi" ? "वैदिक विधि • प्रामाणिक अनुष्ठान" : "Vedic Method • Authentic Rituals"}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* MAIN PACKAGES SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 border-t border-amber-500/10">
        <SectionHead
          eyebrow={t("packages_pg_eyebrow")}
          title={<>{t("packages_pg_title1")} <span className="gold-text italic">{t("packages_pg_title2")}</span></>}
          sub={t("packages_pg_sub")}
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {PACKAGES.map((p, i) => {
            const pt = lang === "en" ? p : { ...p, ...pickLang(lang, {}, PACKAGES_TA[p.slug], PACKAGES_HI[p.slug]) };
            return (
              <Reveal key={p.slug} delay={i * 0.1}>
                <div
                  data-testid={`packages-card-${p.slug}`}
                  className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40"
                >
                  <div className="relative h-60 overflow-hidden bg-stone-900">
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