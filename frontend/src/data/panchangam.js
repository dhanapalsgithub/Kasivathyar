// Indicative panchangam dataset (2026–2030) — the Vadhyar confirms exact tithis per ritual.
// Events page and muhurat calendar derive their dates from here, so they roll forward automatically.

const FESTIVAL_IMG = {
  mahalaya: "https://images.unsplash.com/photo-1608412525521-08980a1f210e?q=85&w=800",
  vinayaka: "https://images.unsplash.com/photo-1614164974666-057a7c713ba6?q=85&w=800",
  gokulashtami: "https://images.unsplash.com/photo-1744287813968-1bb9e4ba4bb6?q=85&w=800",
  navratri: "https://images.unsplash.com/photo-1657089975754-c93bde43b01e?q=85&w=800",
  shivaratri: "https://images.unsplash.com/photo-1699630923504-9a24dbaab37c?q=85&w=800",
};

export const FESTIVALS = [
  {
    id: "mahalaya",
    titleEn: "Mahalaya Paksh", titleTa: "மஹாளய பக்ஷம்", titleHi: "महालय पक्ष",
    img: FESTIVAL_IMG.mahalaya,
    descEn: "Mahalaya Paksha (Pitru Paksha) is a significant 16-day period dedicated to honoring our ancestors during the waning moon of the Ashwin month — a sacred time to seek their blessings and acknowledge their contributions to our lives.",
    descTa: "மஹாளய பக்ஷம் (பித்ரு பக்ஷம்) என்பது ஆசுவின் மாத கிருஷ்ண பக்ஷத்தில் 16 நாட்கள் நமது முன்னோர்களைக் கௌரவிக்க அர்ப்பணிக்கப்பட்ட முக்கியமான காலம் — அவர்களின் ஆசீர்வாதத்தை நாடும் புனித காலம்.",
    descHi: "महालय पक्ष (पितृ पक्ष) आश्विन माह के कृष्ण पक्ष की 16 दिवसीय अवधि है जो हमारे पूर्वजों के सम्मान को समर्पित है — उनका आशीर्वाद पाने का पवित्र समय।",
    ritualsEn: ["Tarpanam (Offerings)", "Pinda Pradaan", "Sacred Verses", "Water Offerings"],
    ritualsTa: ["தர்ப்பணம் (அர்ப்பணங்கள்)", "பிண்ட பிரதானம்", "புனித மந்திரங்கள்", "நீர் அர்ப்பணங்கள்"],
    ritualsHi: ["तर्पणम् (अर्पण)", "पिंड प्रदान", "पवित्र मंत्र", "जल अर्पण"],
    occurrences: [
      { start: "2026-09-26", end: "2026-10-10" },
      { start: "2027-09-16", end: "2027-09-30" },
      { start: "2028-09-04", end: "2028-09-18" },
      { start: "2029-09-23", end: "2029-10-07" },
      { start: "2030-09-12", end: "2030-09-26" },
    ],
  },
  {
    id: "vinayaka",
    titleEn: "Vinayaka Chaturthi", titleTa: "விநாயகர் சதுர்த்தி", titleHi: "विनायक चतुर्थी",
    img: FESTIVAL_IMG.vinayaka,
    descEn: "Vinayaka Chaturthi honors Lord Ganesha, the remover of obstacles. Special Ganapathi homam and poojas are performed for new beginnings and family welfare.",
    descTa: "விநாயகர் சதுர்த்தி தடைகளை நீக்கும் விநாயகரைக் கௌரவிக்கிறது. புதிய தொடக்கங்களுக்கும் குடும்ப நலனுக்கும் சிறப்பு கணபதி ஹோமம் மற்றும் பூஜைகள் நடத்தப்படுகின்றன.",
    descHi: "विनायक चतुर्थी विघ्नहर्ता भगवान गणेश का सम्मान है। नई शुरुआत और पारिवारिक कल्याण के लिए विशेष गणपति होम और पूजाएँ होती हैं।",
    ritualsEn: ["Ganapathi Homam", "Modak Offering", "Abhishekam"],
    ritualsTa: ["கணபதி ஹோமம்", "மோதக அர்ப்பணம்", "அபிஷேகம்"],
    ritualsHi: ["गणपति होम", "मोदक अर्पण", "अभिषेक"],
    occurrences: [
      { start: "2026-09-14" }, { start: "2027-09-03" }, { start: "2028-08-22" },
      { start: "2029-09-10" }, { start: "2030-08-30" },
    ],
  },
  {
    id: "gokulashtami",
    titleEn: "Gokulashtami", titleTa: "கோகுலாஷ்டமி", titleHi: "गोकुलाष्टमी",
    img: FESTIVAL_IMG.gokulashtami,
    descEn: "Gokulashtami (Janmashtami) rejoices in the birth of Lord Krishna — the eighth avatar of Vishnu — celebrated on the Ashtami of the Krishna Paksha in Bhadrapada.",
    descTa: "கோகுலாஷ்டமி (ஜன்மாஷ்டமி) விஷ்ணுவின் எட்டாவது அவதாரமான ஸ்ரீ கிருஷ்ணரின் பிறப்பைக் கொண்டாடுகிறது — பாத்ரபத மாத கிருஷ்ண பக்ஷ அஷ்டமியில்.",
    descHi: "गोकुलाष्टमी (जन्माष्टमी) भगवान विष्णु के आठवें अवतार श्रीकृष्ण के जन्म का उत्सव है — भाद्रपद कृष्ण अष्टमी को मनाया जाता है।",
    ritualsEn: ["Krishna Abhishekam", "Bhajan & Kirtan", "Midnight Pooja"],
    ritualsTa: ["கிருஷ்ண அபிஷேகம்", "பஜனை & கீர்த்தனை", "நள்ளிரவுப் பூஜை"],
    ritualsHi: ["कृष्ण अभिषेक", "भजन और कीर्तन", "मध्यरात्रि पूजा"],
    occurrences: [
      { start: "2026-09-04" }, { start: "2027-08-25" }, { start: "2028-09-13" },
      { start: "2029-09-02" }, { start: "2030-08-22" },
    ],
  },
  {
    id: "navratri",
    titleEn: "Navratri Puja", titleTa: "நவராத்திரிப் பூஜை", titleHi: "नवरात्रि पूजा",
    img: FESTIVAL_IMG.navratri,
    descEn: "Navratri spans nine nights symbolizing the triumph of good over evil, honoring Maa Durga, Maa Lakshmi and Maa Saraswati — fostering spiritual growth, inner strength and devotion.",
    descTa: "நவராத்திரி ஒன்பது இரவுகள் நீடித்து, துர்கா, லக்ஷ்மி, சரஸ்வதி தேவிகளைக் கௌரவித்து, ஆன்மீக வளர்ச்சியையும் பக்தியையும் வளர்க்கிறது.",
    descHi: "नवरात्रि की नौ रातें बुराई पर अच्छाई की जीत का प्रतीक हैं — माँ दुर्गा, लक्ष्मी और सरस्वती की आराधना से आध्यात्मिक विकास और भक्ति बढ़ती है।",
    ritualsEn: ["Durga Saptashati Path", "Chandi Homam", "Kanya Poojan"],
    ritualsTa: ["துர்கா சப்தசதி பாராயணம்", "சண்டி ஹோமம்", "கன்யா பூஜை"],
    ritualsHi: ["दुर्गा सप्तशती पाठ", "चंडी होम", "कन्या पूजन"],
    occurrences: [
      { start: "2026-10-11", end: "2026-10-19" },
      { start: "2027-10-01", end: "2027-10-09" },
      { start: "2028-09-20", end: "2028-09-28" },
      { start: "2029-10-09", end: "2029-10-17" },
      { start: "2030-09-28", end: "2030-10-06" },
    ],
  },
  {
    id: "shivaratri",
    titleEn: "Shivaratri Special Puja", titleTa: "சிவராத்திரி சிறப்புப் பூஜை", titleHi: "शिवरात्रि विशेष पूजा",
    img: FESTIVAL_IMG.shivaratri,
    descEn: "Maha Shivaratri celebrates Lord Shiva — the cosmic dancer and embodiment of divine energy. Devotees fast, pray and meditate, seeking Shiva's blessings at Kashi Vishwanath.",
    descTa: "மஹா சிவராத்திரி ஸ்ரீ சிவபெருமானைக் கொண்டாடுகிறது. பக்தர்கள் காசி விஸ்வநாதரில் உபவாசமிருந்து, பிரார்த்தித்து, சிவனின் ஆசீர்வாதத்தை நாடுகின்றனர்.",
    descHi: "महाशिवरात्रि भगवान शिव का महापर्व है। भक्त काशी विश्वनाथ में उपवास, प्रार्थना और ध्यान से शिव का आशीर्वाद माँगते हैं।",
    ritualsEn: ["Rudrabhishek", "Bilva Offering", "Night-long Jaap"],
    ritualsTa: ["ருத்ராபிஷேகம்", "பில்வ அர்ப்பணம்", "இரவு முழுவதும் ஜபம்"],
    ritualsHi: ["रुद्राभिषेक", "बिल्व अर्पण", "रात्रिभर जाप"],
    occurrences: [
      { start: "2026-02-15" }, { start: "2027-02-04" }, { start: "2028-02-24" },
      { start: "2029-02-12" }, { start: "2030-03-02" },
    ],
  },
];

export const AMAVASYA = [
  "2026-01-18", "2026-02-17", "2026-03-19", "2026-04-17", "2026-05-16", "2026-06-15",
  "2026-07-14", "2026-08-12", "2026-09-11", "2026-10-10", "2026-11-09", "2026-12-09",
  "2027-01-07", "2027-02-06", "2027-03-08", "2027-04-06", "2027-05-06", "2027-06-04",
  "2027-07-03", "2027-08-02", "2027-08-31", "2027-09-30", "2027-10-29", "2027-11-28", "2027-12-27",
];

export const POURNAMI = [
  "2026-01-03", "2026-02-01", "2026-03-03", "2026-04-02", "2026-05-01", "2026-05-31",
  "2026-06-29", "2026-07-29", "2026-08-28", "2026-09-26", "2026-10-26", "2026-11-24", "2026-12-24",
  "2027-01-22", "2027-02-20", "2027-03-22", "2027-04-21", "2027-05-20", "2027-06-19",
  "2027-07-18", "2027-08-17", "2027-09-15", "2027-10-15", "2027-11-14", "2027-12-13",
];

const todayISO = () => {
  const n = new Date();
  return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`;
};

const d = (s) => new Date(`${s}T00:00:00`);

export const LOCALE = { en: "en-IN", ta: "ta-IN", hi: "hi-IN" };
const loc = (lang) => LOCALE[lang] || "en-IN";

export const formatDay = (iso, lang, opts = { day: "numeric", month: "short", year: "numeric" }) =>
  d(iso).toLocaleDateString(loc(lang), opts);

export const formatRange = (start, end, lang) => {
  if (!end || end === start) return formatDay(start, lang);
  const s = d(start);
  const e = d(end);
  const sameMonth = s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear();
  if (sameMonth) {
    const day = (x) => x.toLocaleDateString(loc(lang), { day: "numeric" });
    return `${day(s)} – ${formatDay(end, lang)}`;
  }
  const short = (x) => x.toLocaleDateString(loc(lang), { day: "numeric", month: "short" });
  return `${short(s)} – ${formatDay(end, lang)}`;
};

export const getUpcomingFestivals = (ref = todayISO()) =>
  FESTIVALS.map((f) => {
    const next = f.occurrences.find((o) => (o.end || o.start) >= ref);
    if (!next) return null;
    return {
      id: f.id,
      img: f.img,
      start: next.start,
      end: next.end || null,
      dateEn: formatRange(next.start, next.end, "en"),
      dateTa: formatRange(next.start, next.end, "ta"),
      dateHi: formatRange(next.start, next.end, "hi"),
      titleEn: f.titleEn,
      titleTa: f.titleTa,
      titleHi: f.titleHi,
      descEn: f.descEn,
      descTa: f.descTa,
      descHi: f.descHi,
      ritualsEn: f.ritualsEn,
      ritualsTa: f.ritualsTa,
      ritualsHi: f.ritualsHi,
    };
  }).filter(Boolean);

export const getFestivalRanges = () =>
  FESTIVALS.flatMap((f) => f.occurrences.map((o) => ({ start: o.start, end: o.end || o.start })));

export const getMuhuratDays = (ref = todayISO(), count = 6) => {
  const monthName = (iso, lang) => d(iso).toLocaleDateString(loc(lang), { month: "long" });
  const days = [
    ...AMAVASYA.map((iso) => ({
      date: iso, type: "amavasya",
      en: `${monthName(iso, "en")} Amavasai`, ta: `${monthName(iso, "ta")} அமாவாசை`, hi: `${monthName(iso, "hi")} अमावस्या`,
    })),
    ...POURNAMI.map((iso) => ({
      date: iso, type: "pournami",
      en: `${monthName(iso, "en")} Pournami`, ta: `${monthName(iso, "ta")} பௌர்ணமி`, hi: `${monthName(iso, "hi")} पूर्णिमा`,
    })),
    ...getUpcomingFestivals("2026-01-01").map((f) => ({ date: f.start, type: "festival", en: f.titleEn, ta: f.titleTa, hi: f.titleHi })),
  ];
  return days
    .filter((x) => x.date >= ref)
    .sort((a, b) => (a.date < b.date ? -1 : 1))
    .slice(0, count);
};
