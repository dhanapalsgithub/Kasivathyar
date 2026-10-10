import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";

const SITE = "https://kashivadhyar.com";

const META = {
  "/": {
    en: {
      title: "Kashi Vadhyar – Hindu Rites & Spiritual Yatras | Kashi · Gaya · Prayagraj",
      desc: "Pind Daan, Shradh, Asthi Visarjan, Pitru Tarpan and guided Kashi–Gaya–Prayag yatras by hereditary Tamil Kshetra Purohit. Book on WhatsApp.",
    },
    ta: {
      title: "காசி வாத்தியார் – இந்து சடங்குகள் & ஆன்மீக யாத்திரைகள் | காசி · கயா · பிரயாக்",
      desc: "பாரம்பரிய தமிழ் க்ஷேத்திர புரோகிதரின் வழிகாட்டுதலில் பிண்ட தானம், ஸ்ராத்தம், அஸ்தி விசர்ஜனம், பித்ரு தர்ப்பணம் மற்றும் காசி–கயா–பிரயாக் யாத்திரைகள். WhatsApp-இல் முன்பதிவு செய்யுங்கள்.",
    },
    hi: {
      title: "काशी वाध्यार – हिंदू अनुष्ठान और आध्यात्मिक यात्राएँ | काशी · गया · प्रयागराज",
      desc: "पैतृक तमिल क्षेत्र पुरोहित के मार्गदर्शन में पिंड दान, श्राद्ध, अस्थि विसर्जन, पितृ तर्पण और काशी–गया–प्रयाग यात्राएँ। WhatsApp पर बुक करें।",
    },
  },
  "/about-us": {
    en: {
      title: "About Kashi Vadhyar — Tamil Kshetra Purohit Serving Pilgrims 100+ Years",
      desc: "The hereditary Tamil Vadhyar family of Varanasi guiding pilgrims through Vedic rituals, yatras, stays and transport at Kashi, Gaya and Prayag for over a century.",
    },
    ta: {
      title: "எங்களைப் பற்றி — 100+ ஆண்டுகள் யாத்ரீகர் சேவை | காசி வாத்தியார்",
      desc: "நூற்றாண்டுக்கும் மேலாக காசி, கயா, பிரயாகில் வேத சடங்குகள், யாத்திரைகள், தங்குமிடம் மற்றும் போக்குவரத்து வழிகாட்டும் பாரம்பரிய தமிழ் வாத்தியார் குடும்பம்.",
    },
    hi: {
      title: "हमारे बारे में — 100+ वर्षों की तीर्थयात्री सेवा | काशी वाध्यार",
      desc: "एक सौ वर्षों से काशी, गया, प्रयाग में वैदिक अनुष्ठान, यात्रा, आवास और वाहन का मार्गदर्शन करता पैतृक तमिल वाध्यार परिवार।",
    },
  },
  "/poojas": {
    en: {
      title: "Poojas & Vedic Rituals — Pind Daan, Shradh, Tarpan | Kashi Vadhyar",
      desc: "Pind Daan, Shradh, Pitra Dosh Nivaran, Asthi Visarjan, Pitru Tarpan and special poojas performed with complete vidhi at Kashi, Gaya and Prayag.",
    },
    ta: {
      title: "பூஜைகள் & வேத சடங்குகள் — பிண்ட தானம், ஸ்ராத்தம் | காசி வாத்தியார்",
      desc: "காசி, கயா, பிரயாகில் முழு விதியுடன் நடத்தப்படும் பிண்ட தானம், ஸ்ராத்தம், பித்ரு தோஷ நிவாரணம், அஸ்தி விசர்ஜனம், பித்ரு தர்ப்பணம் மற்றும் சிறப்புப் பூஜைகள்.",
    },
    hi: {
      title: "पूजाएँ और वैदिक अनुष्ठान — पिंड दान, श्राद्ध, तर्पण | काशी वाध्यार",
      desc: "काशी, गया, प्रयाग में पूर्ण विधि से पिंड दान, श्राद्ध, पितृ दोष निवारण, अस्थि विसर्जन, पितृ तर्पण और विशेष पूजाएँ।",
    },
  },
  "/packages": {
    en: {
      title: "Kashi Gaya Prayag Yatra Packages — 5, 7 & 11 Days | Kashi Vadhyar",
      desc: "All-inclusive 5, 7 and 11 day pilgrimage packages across Prayag, Kashi and Gaya with stay, transport and hereditary Vadhyar guidance.",
    },
    ta: {
      title: "காசி கயா பிரயாக் யாத்திரைத் தொகுப்புகள் — 5, 7 & 11 நாட்கள் | காசி வாத்தியார்",
      desc: "தங்குமிடம், போக்குவரத்து மற்றும் பாரம்பரிய வாத்தியார் வழிகாட்டுதலுடன் பிரயாக், காசி, கயா முழுவதும் 5, 7 மற்றும் 11 நாள் யாத்திரைத் தொகுப்புகள்.",
    },
    hi: {
      title: "काशी गया प्रयाग यात्रा पैकेज — 5, 7 और 11 दिन | काशी वाध्यार",
      desc: "ठहरने, वाहन और पैतृक वाध्यार मार्गदर्शन सहित प्रयाग, काशी, गया की 5, 7 और 11 दिन की तीर्थ यात्रा पैकेज।",
    },
  },
  "/packages/5-day-package": {
    en: {
      title: "5 Day Kashi Gaya Prayag Yatra — Stay & Transport | Kashi Vadhyar",
      desc: "The essential 5 day yatra: Prayag Sangam, Kashi Vishwanath darshan, Ganga Aarti and Gaya Pind Daan — with stay, transport and Vadhyar guidance.",
    },
    ta: {
      title: "5 நாள் காசி கயா பிரயாக் யாத்திரை | காசி வாத்தியார்",
      desc: "அத்தியாவசிய 5 நாள் யாத்திரை: பிரயாக் சங்கமம், காசி விஸ்வநாதர் தரிசனம், கங்கை ஆரத்தி மற்றும் கயா பிண்ட தானம் — தங்குமிடம், போக்குவரத்து மற்றும் வாத்தியார் வழிகாட்டுதலுடன்.",
    },
    hi: {
      title: "5 दिन काशी गया प्रयाग यात्रा — ठहरना व वाहन | काशी वाध्यार",
      desc: "आवश्यक 5 दिन की यात्रा: प्रयाग संगम, काशी विश्वनाथ दर्शन, गंगा आरती और गया पिंड दान — ठहरना, वाहन और वाध्यार मार्गदर्शन सहित।",
    },
  },
  "/packages/7-day-package": {
    en: {
      title: "7 Day Kashi Gaya Prayag Yatra — Stay & Transport | Kashi Vadhyar",
      desc: "The complete 7 day pilgrimage: Prayag, Kashi rituals and Gaya Pind Daan at Vishnupad — with stay, transport and hereditary Vadhyar guidance.",
    },
    ta: {
      title: "7 நாள் காசி கயா பிரயாக் யாத்திரை | காசி வாத்தியார்",
      desc: "முழுமையான 7 நாள் யாத்திரை: பிரயாக், காசி சடங்குகள் மற்றும் விஷ்ணுபாதத்தில் கயா பிண்ட தானம் — தங்குமிடம், போக்குவரத்து மற்றும் வாத்தியார் வழிகாட்டுதலுடன்.",
    },
    hi: {
      title: "7 दिन काशी गया प्रयाग यात्रा — ठहरना व वाहन | काशी वाध्यार",
      desc: "सम्पूर्ण 7 दिन की तीर्थ यात्रा: प्रयाग, काशी अनुष्ठान और विष्णुपद में गया पिंड दान — ठहरना, वाहन और पैतृक वाध्यार मार्गदर्शन सहित।",
    },
  },
  "/packages/11-day-package": {
    en: {
      title: "11 Day Grand Ancestral Yatra — Kashi, Gaya, Prayag | Kashi Vadhyar",
      desc: "The grand 11 day ancestral yatra with full Pind Daan, Shradh and special poojas across Kashi, Gaya and Prayag — stay, transport and Vadhyar guidance included.",
    },
    ta: {
      title: "11 நாள் பெரும் பித்ரு யாத்திரை — காசி, கயா, பிரயாக் | காசி வாத்தியார்",
      desc: "காசி, கயா, பிரயாகில் முழு பிண்ட தானம், ஸ்ராத்தம் மற்றும் சிறப்புப் பூஜைகளுடன் 11 நாள் பெரும் பித்ரு யாத்திரை — தங்குமிடம், போக்குவரத்து அடங்கும்.",
    },
    hi: {
      title: "11 दिन महान पितृ यात्रा — काशी, गया, प्रयाग | काशी वाध्यार",
      desc: "काशी, गया, प्रयाग में पूर्ण पिंड दान, श्राद्ध और विशेष पूजाओं सहित 11 दिन की महान पितृ यात्रा — ठहरना और वाहन शामिल।",
    },
  },
  "/events": {
    en: {
      title: "Festival Rituals & Panchangam Events | Kashi Vadhyar",
      desc: "Book rituals for Mahalaya Paksha, Navratri, Vinayaka Chaturthi, Gokulashtami and Maha Shivaratri at Kashi — dates auto-updated from the panchangam.",
    },
    ta: {
      title: "விழா சடங்குகள் & பஞ்சாங்க நாட்கள் | காசி வாத்தியார்",
      desc: "மஹாளய பக்ஷம், நவராத்திரி, விநாயகர் சதுர்த்தி, கோகுலாஷ்டமி மற்றும் மஹா சிவராத்திரிக்கு காசியில் சடங்குகள் முன்பதிவு செய்யுங்கள் — தேதிகள் பஞ்சாங்கத்திலிருந்து தானாகப் புதுப்பிக்கப்படும்.",
    },
    hi: {
      title: "पर्व अनुष्ठान और पंचांग कार्यक्रम | काशी वाध्यार",
      desc: "महालय पक्ष, नवरात्रि, विनायक चतुर्थी, गोकुलाष्टमी और महाशिवरात्रि के लिए काशी में अनुष्ठान बुक करें — तिथियाँ पंचांग से स्वतः अपडेट होती हैं।",
    },
  },
  "/gallery": {
    en: {
      title: "Kashi Photo & Video Gallery — Ghats, Aarti, Rituals | Kashi Vadhyar",
      desc: "HD photos and films of the Ganga Aarti, Varanasi ghats, temple traditions and real rituals performed by our hereditary Tamil Vadhyars.",
    },
    ta: {
      title: "காசி புகைப்பட & காணொளித் தொகுப்பு | காசி வாத்தியார்",
      desc: "கங்கை ஆரத்தி, வாரணாசி படித்துறைகள், கோயில் பாரம்பரியங்கள் மற்றும் எங்கள் பாரம்பரிய தமிழ் வாத்தியார்களின் உண்மையான சடங்குகளின் HD புகைப்படங்கள் மற்றும் காணொளிகள்.",
    },
    hi: {
      title: "काशी फ़ोटो और वीडियो गैलरी | काशी वाध्यार",
      desc: "गंगा आरती, वाराणसी घाट, मंदिर परंपरा और हमारे पैतृक तमिल वाध्यारों के वास्तविक अनुष्ठानों की HD तस्वीरें और फ़िल्में।",
    },
  },
  "/contact-us": {
    en: {
      title: "Contact Kashi Vadhyar — Book Rituals on WhatsApp | Varanasi",
      desc: "Call or WhatsApp Kashi Vadhyar at +91 99194 03288 to book Pind Daan, Shradh or a Kashi–Gaya–Prayag yatra. Pitambarpura, Harishchandra Road, Varanasi.",
    },
    ta: {
      title: "தொடர்பு கொள்ள — WhatsApp-இல் சடங்கு முன்பதிவு | காசி வாத்தியார்",
      desc: "பிண்ட தானம், ஸ்ராத்தம் அல்லது காசி–கயா–பிரயாக் யாத்திரை முன்பதிவுக்கு +91 99194 03288 எண்ணில் அழைக்கவும் அல்லது WhatsApp செய்யவும். பிதாம்பர்புரா, வாரணாசி.",
    },
    hi: {
      title: "संपर्क करें — WhatsApp पर अनुष्ठान बुक करें | काशी वाध्यार",
      desc: "पिंड दान, श्राद्ध या काशी–गया–प्रयाग यात्रा बुक करने के लिए +91 99194 03288 पर कॉल या WhatsApp करें। पीताम्बरपुरा, हरिश्चंद्र रोड, वाराणसी।",
    },
  },
};

const setMeta = (selector, value) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    const m = selector.match(/meta\[(name|property)="(.+?)"\]/);
    if (!m) return;
    el.setAttribute(m[1], m[2]);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

const RouteSeo = () => {
  const { pathname } = useLocation();
  const { lang } = useLang();

  useEffect(() => {
    const entry = META[pathname] || META["/"];
    const m = entry[lang] || entry.en;
    document.title = m.title;
    setMeta('meta[name="description"]', m.desc);
    setMeta('meta[property="og:title"]', m.title);
    setMeta('meta[property="og:description"]', m.desc);
    setMeta('meta[name="twitter:title"]', m.title);
    setMeta('meta[name="twitter:description"]', m.desc);
    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `${SITE}${pathname}`);
    const ogUrl = document.head.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", `${SITE}${pathname}`);
    const ogLocale = document.head.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", lang === "ta" ? "ta_IN" : lang === "hi" ? "hi_IN" : "en_IN");
  }, [pathname, lang]);

  return null;
};

export default RouteSeo;
