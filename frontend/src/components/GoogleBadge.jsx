import { Star, ExternalLink, PenLine } from "lucide-react";
import Reveal from "@/components/Reveal";
import { CONTACT } from "@/data/content";
import { useLang } from "@/i18n/LanguageContext";

const GLogo = ({ className = "h-9 w-9" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z" />
    <path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z" />
    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
  </svg>
);

const LABELS = {
  en: { label: "Google Rating", based: "Based on 60 Google reviews", read: "Read all reviews", write: "Review us on Google" },
  ta: { label: "Google மதிப்பீடு", based: "60 மதிப்புரைகளின் அடிப்படையில்", read: "அனைத்து மதிப்புரைகளையும் படிக்க", write: "Google-இல் மதிப்புரை எழுதுங்கள்" },
  hi: { label: "Google रेटिंग", based: "60 Google समीक्षाओं के आधार पर", read: "सभी समीक्षाएँ पढ़ें", write: "Google पर समीक्षा लिखें" },
};

const GoogleBadge = () => {
  const { lang } = useLang();
  const L = LABELS[lang] || LABELS.en;

  return (
    <Reveal className="mb-12">
      <div
        data-testid="google-rating-badge"
        className="glass gold-ring mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl px-6 py-7 sm:flex-row sm:justify-between sm:px-9"
      >
        <div className="flex items-center gap-5">
          <GLogo className="h-11 w-11 shrink-0" />
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-500">{L.label}</p>
            <div className="mt-1 flex items-center gap-2.5">
              <span className="gold-text font-display text-4xl font-bold leading-none">{CONTACT.googleRating}</span>
              <span className="flex gap-0.5" aria-label={`${CONTACT.googleRating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
            </div>
            <p className="mt-1.5 text-xs text-stone-400">{L.based}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 sm:items-end">
          <a
            href={CONTACT.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="google-read-reviews"
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 px-5 py-2.5 text-xs font-bold tracking-wide text-amber-300 transition-all duration-300 hover:bg-amber-500 hover:text-stone-950"
          >
            <ExternalLink className="h-3.5 w-3.5" /> {L.read}
          </a>
          <a
            href={CONTACT.googleWriteReview}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="google-write-review"
            className="inline-flex items-center gap-2 px-2 text-xs font-semibold text-stone-400 transition-colors hover:text-amber-300"
          >
            <PenLine className="h-3.5 w-3.5" /> {L.write}
          </a>
        </div>
      </div>
    </Reveal>
  );
};

export default GoogleBadge;
