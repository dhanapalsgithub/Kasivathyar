import { AMAVASYA, POURNAMI, getFestivalRanges, getMuhuratDays, formatDay } from "@/data/panchangam";

const d = (s) => new Date(`${s}T00:00:00`);

const RANGES = getFestivalRanges().map((r) => ({ start: d(r.start), end: d(r.end) }));

export const isFestivalDay = (day) =>
  RANGES.some((r) => day >= r.start && day <= r.end);

export const MODIFIER_DATES = {
  amavasya: AMAVASYA.map(d),
  pournami: POURNAMI.map(d),
  festival: (day) => isFestivalDay(day),
};

export const UPCOMING = getMuhuratDays(undefined, 6);

export const toISO = (date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

export const formatDate = (iso, lang) => formatDay(iso, lang);
