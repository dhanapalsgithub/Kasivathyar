import { useState } from "react";
import { toast } from "sonner";
import { CalendarDays, Sparkles } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import { useLang } from "@/i18n/LanguageContext";
import { pickLang } from "@/i18n/translations";
import { MODIFIER_DATES, UPCOMING, toISO, formatDate } from "@/data/muhurat";

const MuhuratCalendar = ({ onPick }) => {
  const { lang, t } = useLang();
  const [selected, setSelected] = useState(null);

  const handleSelect = (day) => {
    if (!day) return;
    setSelected(day);
    onPick(toISO(day));
    toast.success(t("muh_picked"));
  };

  const pickISO = (iso) => {
    setSelected(new Date(`${iso}T00:00:00`));
    onPick(iso);
    toast.success(t("muh_picked"));
  };

  return (
    <section data-testid="muhurat-section" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <SectionHead
        eyebrow={t("muh_eyebrow")}
        title={<>{t("muh_title1")} <span className="gold-text italic">{t("muh_title2")}</span></>}
        sub={t("muh_sub")}
      />
      <div className="grid gap-6 lg:grid-cols-[auto_1fr]">
        <Reveal>
          <div className="glass mx-auto w-fit rounded-3xl p-4 sm:p-6" data-testid="muhurat-calendar">
            <Calendar
              mode="single"
              selected={selected}
              onSelect={handleSelect}
              modifiers={MODIFIER_DATES}
              modifiersClassNames={{
                amavasya: "muh-amavasya",
                pournami: "muh-pournami",
                festival: "muh-festival",
              }}
              className="text-stone-200"
              classNames={{
                caption_label: "text-sm font-semibold text-amber-200",
                head_cell: "text-amber-500/70 rounded-md w-9 font-medium text-[0.75rem]",
                day: "h-9 w-9 p-0 font-normal text-stone-300 hover:bg-amber-500/15 hover:text-amber-200 rounded-full transition-colors aria-selected:opacity-100",
                day_selected: "bg-gradient-to-br from-amber-400 to-amber-600 text-stone-950 font-bold hover:text-stone-950",
                day_today: "border border-amber-400/50 text-amber-300",
                day_outside: "text-stone-600 opacity-60",
                nav_button: "h-8 w-8 bg-transparent p-0 text-amber-300 border border-amber-500/25 rounded-full hover:bg-amber-500/15 transition-colors",
              }}
            />
            <div className="mt-4 flex flex-wrap justify-center gap-4 border-t border-amber-500/10 pt-4 text-xs text-stone-400">
              <span className="flex items-center gap-2"><span className="muh-dot muh-dot-amavasya" />{t("legend_amavasya")}</span>
              <span className="flex items-center gap-2"><span className="muh-dot muh-dot-pournami" />{t("legend_pournami")}</span>
              <span className="flex items-center gap-2"><span className="muh-dot muh-dot-festival" />{t("legend_festival")}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="glass h-full rounded-3xl p-6 sm:p-8">
            <h3 className="flex items-center gap-2 font-display text-2xl font-bold text-amber-100">
              <Sparkles className="h-5 w-5 text-amber-400" />
              {t("muh_upcoming")}
            </h3>
            <ul className="mt-6 space-y-3">
              {UPCOMING.map((m) => (
                <li key={`${m.date}-${m.en}`}>
                  <button
                    onClick={() => pickISO(m.date)}
                    data-testid={`muhurat-day-${m.date}`}
                    className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-amber-500/15 bg-white/[0.03] px-5 py-3.5 text-left transition-all duration-300 hover:border-amber-400/50 hover:bg-amber-500/10"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`muh-dot muh-dot-${m.type}`} />
                      <span className="text-sm font-semibold text-amber-100">{pickLang(lang, m.en, m.ta, m.hi)}</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-stone-400 transition-colors group-hover:text-amber-300">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {formatDate(m.date, lang)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-stone-500">{t("muh_note")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MuhuratCalendar;
