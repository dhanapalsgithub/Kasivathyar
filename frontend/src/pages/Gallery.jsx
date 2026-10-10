import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import VideoCard from "@/components/VideoCard";
import { GALLERY, VIDEOS } from "@/data/content";
import { useLang } from "@/i18n/LanguageContext";
import { FILTERS_TA, GALLERY_TA, VIDEO_TITLES_TA } from "@/i18n/translations";

const FILTERS = ["All", "Ghats", "Aarti", "Rituals", "Temples"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const { lang, t } = useLang();
  const items = filter === "All" ? GALLERY : GALLERY.filter((g) => g.cat === filter);

  const caption = useCallback(
    (g) => (lang === "ta" ? GALLERY_TA[GALLERY.indexOf(g)]?.cap ?? g.cap : g.cap),
    [lang],
  );

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir) => setLightbox((cur) => (cur === null ? null : (cur + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, step]);

  return (
    <div data-testid="gallery-page">
      <PageHero
        eyebrow={t("ph_gallery_eyebrow")}
        title={t("ph_gallery_t1")}
        accent={t("ph_gallery_t2")}
        image="https://images.unsplash.com/photo-1744287813968-1bb9e4ba4bb6?q=85&w=1400"
      />
      <Marquee />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHead
          eyebrow={t("gallery_pg_eyebrow")}
          title={<>{t("gallery_pg_title1")} <span className="gold-text italic">{t("gallery_pg_title2")}</span></>}
        />
        <Reveal className="mb-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              data-testid={`gallery-filter-${f.toLowerCase()}`}
              onClick={() => { setFilter(f); setLightbox(null); }}
              className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                filter === f
                  ? "bg-gradient-to-r from-amber-400 to-amber-600 text-stone-950 shadow-[0_0_24px_rgba(212,175,55,0.35)]"
                  : "glass text-stone-300 hover:border-amber-400/40 hover:text-amber-300"
              }`}
            >
              {lang === "ta" ? FILTERS_TA[f] : f}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {items.map((g, i) => {
              const cap = caption(g);
              const catLabel = lang === "ta" ? FILTERS_TA[g.cat] : g.cat;
              return (
                <motion.figure
                  layout
                  key={g.img}
                  data-testid={`gallery-item-${i}`}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="glass group relative aspect-[3/4] cursor-zoom-in overflow-hidden rounded-2xl"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={g.img}
                    alt={cap}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-black/90 to-transparent p-4 pt-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm font-semibold text-amber-100">{cap}</p>
                    <p className="text-[10px] uppercase tracking-widest text-amber-400">{catLabel}</p>
                  </figcaption>
                </motion.figure>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && items[lightbox] && (
          <motion.div
            data-testid="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/92 p-4 backdrop-blur-md"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
          >
            <button
              data-testid="lightbox-close"
              onClick={close}
              aria-label="Close"
              className="glass-strong absolute right-5 top-5 z-10 rounded-full p-3 text-amber-200 transition-transform duration-300 hover:scale-110"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              data-testid="lightbox-prev"
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              aria-label="Previous photo"
              className="glass-strong absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full p-3 text-amber-200 transition-transform duration-300 hover:scale-110 sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              data-testid="lightbox-next"
              onClick={(e) => { e.stopPropagation(); step(1); }}
              aria-label="Next photo"
              className="glass-strong absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full p-3 text-amber-200 transition-transform duration-300 hover:scale-110 sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.figure
              key={items[lightbox].img}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={items[lightbox].img}
                alt={caption(items[lightbox])}
                className="gold-ring max-h-[78vh] w-auto max-w-full rounded-2xl object-contain"
              />
              <figcaption className="mt-4 text-center">
                <span className="text-sm font-semibold text-amber-100">{caption(items[lightbox])}</span>
                <span className="ml-3 text-xs uppercase tracking-widest text-amber-400">
                  {lang === "ta" ? FILTERS_TA[items[lightbox].cat] : items[lightbox].cat} · {lightbox + 1}/{items.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <SectionHead
          eyebrow={t("video_pg_eyebrow")}
          title={<>{t("video_pg_title1")} <span className="gold-text italic">{t("video_pg_title2")}</span></>}
          sub={t("video_pg_sub")}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((v, i) => (
            <VideoCard key={v.src} video={lang === "ta" ? { ...v, title: VIDEO_TITLES_TA[i] } : v} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
