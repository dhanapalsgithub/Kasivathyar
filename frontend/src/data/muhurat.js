const d = (s) => new Date(`${s}T00:00:00`);

export const MUHURAT = [
  { date: "2026-07-14", type: "amavasya", en: "Aadi Amavasai", ta: "ஆடி அமாவாசை" },
  { date: "2026-07-29", type: "pournami", en: "Guru Pournami", ta: "குரு பௌர்ணமி" },
  { date: "2026-08-12", type: "amavasya", en: "Aavani Amavasai", ta: "ஆவணி அமாவாசை" },
  { date: "2026-08-28", type: "pournami", en: "Aavani Pournami", ta: "ஆவணி பௌர்ணமி" },
  { date: "2026-09-04", type: "festival", en: "Gokulashtami", ta: "கோகுலாஷ்டமி" },
  { date: "2026-09-11", type: "amavasya", en: "Purattasi Amavasai", ta: "புரட்டாசி அமாவாசை" },
  { date: "2026-09-14", type: "festival", en: "Vinayaka Chaturthi", ta: "விநாயகர் சதுர்த்தி" },
  { date: "2026-09-26", type: "pournami", en: "Purattasi Pournami", ta: "புரட்டாசி பௌர்ணமி" },
  { date: "2026-09-26", type: "festival", en: "Mahalaya Paksha begins", ta: "மஹாளய பக்ஷம் தொடக்கம்" },
  { date: "2026-10-10", type: "amavasya", en: "Mahalaya Amavasai", ta: "மஹாளய அமாவாசை" },
  { date: "2026-10-11", type: "festival", en: "Navratri begins", ta: "நவராத்திரி தொடக்கம்" },
  { date: "2026-10-26", type: "pournami", en: "Aipasi Pournami", ta: "ஐப்பசி பௌர்ணமி" },
  { date: "2026-11-09", type: "amavasya", en: "Aipasi Amavasai", ta: "ஐப்பசி அமாவாசை" },
  { date: "2026-11-24", type: "pournami", en: "Karthigai Pournami", ta: "கார்த்திகை பௌர்ணமி" },
  { date: "2026-12-09", type: "amavasya", en: "Margazhi Amavasai", ta: "மார்கழி அமாவாசை" },
  { date: "2026-12-24", type: "pournami", en: "Margazhi Pournami", ta: "மார்கழி பௌர்ணமி" },
  { date: "2027-01-18", type: "amavasya", en: "Thai Amavasai", ta: "தை அமாவாசை" },
  { date: "2027-02-15", type: "festival", en: "Maha Shivaratri", ta: "மஹா சிவராத்திரி" },
];

const inRange = (day, start, end) => day >= d(start) && day <= d(end);

export const isFestivalDay = (day) =>
  MUHURAT.some((m) => m.type === "festival" && d(m.date).getTime() === day.getTime()) ||
  inRange(day, "2026-09-26", "2026-10-10") ||
  inRange(day, "2026-10-11", "2026-10-19");

export const MODIFIER_DATES = {
  amavasya: MUHURAT.filter((m) => m.type === "amavasya").map((m) => d(m.date)),
  pournami: MUHURAT.filter((m) => m.type === "pournami").map((m) => d(m.date)),
  festival: (day) => isFestivalDay(day),
};

export const UPCOMING = MUHURAT.filter((m) => d(m.date) >= new Date(new Date().toDateString()))
  .sort((a, b) => d(a.date) - d(b.date))
  .slice(0, 6);

export const toISO = (date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

export const formatDate = (iso, lang) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString(lang === "ta" ? "ta-IN" : "en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
