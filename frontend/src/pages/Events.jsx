import { CalendarDays, Check, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { EVENTS, CONTACT } from "@/data/content";
import { useLang } from "@/i18n/LanguageContext";
import { EVENTS_TA } from "@/i18n/translations";

const Events = () => {
  const { lang, t } = useLang();

  return (
    <div data-testid="events-page">
      <PageHero
        eyebrow={t("ph_events_eyebrow")}
        title={t("ph_events_t1")}
        accent={t("ph_events_t2")}
        image="https://images.unsplash.com/photo-1585484172903-8d21335b9373?q=85&w=1400"
      />
      <Marquee />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHead
          eyebrow={t("events_pg_eyebrow")}
          title={<>{t("events_pg_title1")} <span className="gold-text italic">{t("events_pg_title2")}</span></>}
          sub={t("events_pg_sub")}
        />
        <div className="grid gap-8 md:grid-cols-2">
          {EVENTS.map((ev, i) => {
            const et = lang === "ta" ? { ...ev, ...EVENTS_TA[i] } : ev;
            return (
              <Reveal key={ev.title} delay={(i % 2) * 0.1}>
                <article
                  data-testid={`event-card-${i}`}
                  className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img src={ev.img} alt={et.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-[#0A0B0E]/30 to-transparent" />
                    <span className="glass-strong absolute bottom-4 left-4 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-amber-300">
                      <CalendarDays className="h-4 w-4" /> {et.date}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="font-display text-3xl font-bold text-amber-100">{et.title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-400">{et.desc}</p>
                    <div className="mt-5">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-amber-500">{t("rituals_offered")}</p>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {et.rituals.map((r) => (
                          <span key={r} className="flex items-center gap-1.5 rounded-full border border-amber-500/25 bg-amber-500/5 px-3 py-1.5 text-xs text-amber-200/90">
                            <Check className="h-3 w-3 text-amber-400" /> {r}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                        lang === "ta"
                          ? `நமஸ்தே காசி வாத்தியாரே, ${et.title} (${et.date}) விழாவிற்கு சடங்கு முன்பதிவு செய்ய விரும்புகிறேன்.`
                          : `Namaste Kashi Vadhyar, I would like to book a ritual for ${ev.title} (${ev.date}).`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`event-book-${i}`}
                      className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3 text-sm font-bold text-stone-950 shadow-[0_0_24px_rgba(212,175,55,0.3)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]"
                    >
                      <MessageCircle className="h-4 w-4" /> {t("book_event")}
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-12">
          <p className="glass rounded-2xl p-6 text-center text-sm text-stone-400" data-testid="events-note">
            {t("events_note")}
          </p>
        </Reveal>
      </section>
    </div>
  );
};

export default Events;
