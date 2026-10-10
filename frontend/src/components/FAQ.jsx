import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import { useLang } from "@/i18n/LanguageContext";
import { pickLang } from "@/i18n/translations";

export const FAQS = [
  {
    qEn: "How much does it cost to perform Asthi Visarjan in Varanasi?",
    aEn: "The cost depends on the rituals you choose, the ghat, samagri and brahmin bhojan arrangements. Share your requirement on WhatsApp and the Vadhyar will give you a clear, exact estimate before you book — no hidden charges.",
    qTa: "வாரணாசியில் அஸ்தி விசர்ஜனம் செய்ய எவ்வளவு செலவாகும்?",
    aTa: "செலவு நீங்கள் தேர்ந்தெடுக்கும் சடங்குகள், படித்துறை, சாமக்ரி மற்றும் பிராம்மண போஜன ஏற்பாடுகளைப் பொறுத்தது. WhatsApp-இல் உங்கள் தேவையைப் பகிருங்கள் — முன்பதிவுக்கு முன் வாத்தியார் தெளிவான, சரியான மதிப்பீட்டைத் தருவார். மறைப்புக் கட்டணங்கள் இல்லை.",
    qHi: "वाराणसी में अस्थि विसर्जन कराने की लागत कितनी है?",
    aHi: "लागत आपके चुने हुए अनुष्ठानों, घाट, सामग्री और ब्राह्मण भोजन व्यवस्था पर निर्भर करती है। WhatsApp पर अपनी आवश्यकता बताएँ — बुकिंग से पहले वाध्यार स्पष्ट और सटीक अनुमान देंगे। कोई छिपा शुल्क नहीं।",
  },
  {
    qEn: "Which place is best for Asthi Visarjan — Kashi, Gaya or Prayag?",
    aEn: "All three are supreme for ancestral rites: Kashi (Manikarnika and Harishchandra ghats on the Ganga), Gaya (Vishnupad Temple, especially for Pind Daan) and Prayag (the Triveni Sangam). The Vadhyar will recommend the right kshetra for your family tradition.",
    qTa: "அஸ்தி விசர்ஜனத்திற்கு சிறந்த இடம் எது — காசி, கயா அல்லது பிரயாக்?",
    aTa: "மூன்றும் பித்ரு காரியங்களுக்கு மிக உயர்ந்தவை: காசி (கங்கையில் மணிகர்ணிகா மற்றும் ஹரிஷ்சந்திர படித்துறைகள்), கயா (விஷ்ணுபாதம் கோயில் — குறிப்பாகப் பிண்ட தானத்திற்கு), பிரயாக் (திரிவேணி சங்கமம்). உங்கள் குடும்பப் பாரம்பரியத்திற்கு ஏற்ப சரியான க்ஷேத்திரத்தை வாத்தியார் பரிந்துரைப்பார்.",
    qHi: "अस्थि विसर्जन के लिए सबसे अच्छी जगह कौन सी है — काशी, गया या प्रयाग?",
    aHi: "तीनों पितृ कर्मों के लिए सर्वोत्कृष्ट हैं: काशी (गंगा पर मणिकर्णिका और हरिश्चंद्र घाट), गया (विष्णुपद मंदिर — विशेषकर पिंड दान हेतु), प्रयाग (त्रिवेणी संगम)। आपकी पारिवारिक परंपरा के अनुसार सही क्षेत्र वाध्यार बताएँगे।",
  },
  {
    qEn: "Which day is best for Asthi Visarjan or Pind Daan?",
    aEn: "Amavasya days, Mahalaya Paksha and Thai/Aadi Amavasai are especially powerful, but rites can be performed on other days too. Use the muhurat calendar on our Contact page — the Vadhyar confirms the exact tithi for your ritual.",
    qTa: "அஸ்தி விசர்ஜனம் அல்லது பிண்ட தானத்திற்குச் சிறந்த நாள் எது?",
    aTa: "அமாவாசை நாட்கள், மஹாளய பக்ஷம், தை/ஆடி அமாவாசை மிகவும் சிறப்பானவை, ஆனால் மற்ற நாட்களிலும் சடங்குகள் செய்யலாம். எங்கள் தொடர்புப் பக்கத்திலுள்ள முஹூர்த்த நாட்காட்டியைப் பயன்படுத்துங்கள் — உங்கள் சடங்கிற்கான சரியான திதியை வாத்தியார் உறுதி செய்வார்.",
    qHi: "अस्थि विसर्जन या पिंड दान के लिए सबसे अच्छा दिन कौन सा है?",
    aHi: "अमावस्या, महालय पक्ष और थाई/आड़ी अमावस्या विशेष शुभ हैं, पर अन्य दिनों में भी अनुष्ठान हो सकते हैं। हमारे संपर्क पृष्ठ का मुहूर्त कैलेंडर देखें — आपके अनुष्ठान की सटीक तिथि वाध्यार पुष्टि करेंगे।",
  },
  {
    qEn: "Will the rituals be explained in Tamil?",
    aEn: "Yes. We are hereditary Tamil Kshetra Purohits — every step of the ritual is explained in Tamil, so your family understands and participates fully. Sanskrit mantras, Tamil guidance.",
    qTa: "சடங்குகள் தமிழில் விளக்கப்படுமா?",
    aTa: "ஆம். நாங்கள் பாரம்பரிய தமிழ் க்ஷேத்திர புரோகிதர்கள் — சடங்கின் ஒவ்வொரு படியும் தமிழில் விளக்கப்படும், உங்கள் குடும்பம் முழுமையாகப் புரிந்து பங்கேற்கும். சமஸ்கிருத மந்திரங்கள், தமிழ் வழிகாட்டுதல்.",
    qHi: "क्या अनुष्ठान तमिल में समझाए जाते हैं?",
    aHi: "हाँ। हम पैतृक तमिल क्षेत्र पुरोहित हैं — अनुष्ठान का हर चरण तमिल में समझाया जाता है, ताकि आपका परिवार पूरी तरह समझकर भाग ले। संस्कृत मंत्र, तमिल मार्गदर्शन।",
  },
  {
    qEn: "How do I book a ritual or yatra package?",
    aEn: "Tap any 'Book via WhatsApp' button or fill the enquiry form — your details open directly in WhatsApp to +91 99194 03288. We confirm availability, muhurat and arrangements, and take care of stay and transport.",
    qTa: "சடங்கு அல்லது யாத்திரைத் தொகுப்பை எப்படி முன்பதிவு செய்வது?",
    aTa: "'WhatsApp மூலம் முன்பதிவு' பட்டனைத் தட்டுங்கள் அல்லது விசாரணைப் படிவத்தை நிரப்புங்கள் — உங்கள் விவரங்கள் நேரடியாக +91 99194 03288 எண்ணில் WhatsApp-இல் திறக்கும். கிடைக்கும் நிலை, முஹூர்த்தம் மற்றும் ஏற்பாடுகளை உறுதி செய்து, தங்குமிடம் மற்றும் போக்குவரத்தை நாங்கள் கவனித்துக்கொள்வோம்.",
    qHi: "अनुष्ठान या यात्रा पैकेज कैसे बुक करें?",
    aHi: "किसी भी 'WhatsApp से बुक करें' बटन को टैप करें या पूछताछ फ़ॉर्म भरें — आपके विवरण सीधे +91 99194 03288 पर WhatsApp में खुलेंगे। उपलब्धता, मुहूर्त और व्यवस्था की पुष्टि करके ठहरना व वाहन हम संभालते हैं।",
  },
  {
    qEn: "Do you arrange stay and transport in Kashi, Gaya and Prayag?",
    aEn: "Yes — clean, comfortable stays near the ghats and temples, plus reliable cars and tempo travellers for families and groups, door to door. Both are included in our 5, 7 and 11 day packages.",
    qTa: "காசி, கயா, பிரயாகில் தங்குமிடம் மற்றும் போக்குவரத்து ஏற்பாடு செய்கிறீர்களா?",
    aTa: "ஆம் — படித்துறைகள் மற்றும் கோயில்களுக்கு அருகில் சுத்தமான, வசதியான தங்குமிடங்கள், குடும்பங்கள் மற்றும் குழுக்களுக்கு நம்பகமான கார்கள் மற்றும் டெம்போ டிராவலர்கள். எங்கள் 5, 7 மற்றும் 11 நாள் தொகுப்புகளில் இவை இரண்டும் அடங்கும்.",
    qHi: "क्या आप काशी, गया और प्रयाग में ठहरने और वाहन की व्यवस्था करते हैं?",
    aHi: "हाँ — घाटों और मंदिरों के पास स्वच्छ, आरामदायक ठहरना, साथ ही परिवारों और समूहों के लिए भरोसेमंद कारें और टेम्पो ट्रैवलर, द्वार से द्वार तक। हमारे 5, 7 और 11 दिन के पैकेजों में दोनों शामिल हैं।",
  },
];

const HEAD = {
  en: { eyebrow: "Common Questions", t1: "Frequently Asked", t2: "Questions", sub: "Clear answers about rituals, muhurat, booking and arrangements." },
  ta: { eyebrow: "உங்கள் சந்தேகங்களுக்கு", t1: "அடிக்கடி கேட்கப்படும்", t2: "கேள்விகள்", sub: "சடங்குகள், முஹூர்த்தம், முன்பதிவு மற்றும் ஏற்பாடுகள் பற்றிய தெளிவான பதில்கள்." },
  hi: { eyebrow: "आपके प्रश्नों के उत्तर", t1: "अक्सर पूछे जाने वाले", t2: "प्रश्न", sub: "अनुष्ठान, मुहूर्त, बुकिंग और व्यवस्था के स्पष्ट उत्तर।" },
};

const FAQ = () => {
  const { lang } = useLang();
  const [open, setOpen] = useState(0);
  const H = HEAD[lang] || HEAD.en;

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6" data-testid="faq-section">
      <SectionHead
        eyebrow={H.eyebrow}
        title={<>{H.t1} <span className="gold-text italic">{H.t2}</span></>}
        sub={H.sub}
      />
      <div className="space-y-4">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={i} delay={i * 0.05}>
              <div
                data-testid={`faq-item-${i}`}
                className={`glass overflow-hidden rounded-2xl transition-colors duration-300 ${isOpen ? "border-amber-400/40" : ""}`}
              >
                <button
                  data-testid={`faq-question-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={`font-display text-lg font-semibold sm:text-xl ${isOpen ? "text-amber-300" : "text-amber-100"}`}>
                    {pickLang(lang, f.qEn, f.qTa, f.qHi)}
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 text-amber-400">
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p data-testid={`faq-answer-${i}`} className="border-t border-amber-500/10 px-6 pb-6 pt-4 text-sm leading-relaxed text-stone-300">
                        {pickLang(lang, f.aEn, f.aTa, f.aHi)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
