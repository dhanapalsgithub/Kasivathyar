import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { CONTACT, RITUALS, PACKAGES } from "@/data/content";
import { useLang } from "@/i18n/LanguageContext";
import { RITUALS_TA, PACKAGES_TA } from "@/i18n/translations";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const inputCls =
  "w-full rounded-xl border border-amber-500/20 bg-white/5 px-4 py-3 text-sm text-stone-100 placeholder:text-stone-500 outline-none transition-colors duration-300 focus:border-amber-400/70 focus:bg-white/[0.07]";

const ContactForm = ({ defaultService = "", externalDate = "" }) => {
  const { lang, t } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", service: defaultService, date: "", message: "" });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (externalDate) setForm((f) => ({ ...f, date: externalDate }));
  }, [externalDate]);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error(t("form_err"));
      return;
    }
    setSending(true);
    const L = lang === "ta"
      ? { greet: "நமஸ்தே காசி வாத்தியாரே,", name: "பெயர்", phone: "தொலைபேசி", service: "சேவை", date: "விருப்பமான தேதி", msg: "செய்தி", close: "நான் முன்பதிவு செய்ய / மேலும் அறிய விரும்புகிறேன்." }
      : { greet: "Namaste Kashi Vadhyar,", name: "Name", phone: "Phone", service: "Service", date: "Preferred date", msg: "Message", close: "I would like to book / know more." };
    const lines = [
      L.greet,
      `${L.name}: ${form.name}`,
      `${L.phone}: ${form.phone}`,
      form.service && `${L.service}: ${form.service}`,
      form.date && `${L.date}: ${form.date}`,
      form.message && `${L.msg}: ${form.message}`,
      "",
      L.close,
    ].filter(Boolean);
    try {
      await axios.post(`${API}/contact`, {
        name: form.name.trim(),
        phone: form.phone.trim(),
        service: form.service,
        travel_date: form.date,
        message: form.message.trim(),
      });
    } catch {
      // WhatsApp handoff still proceeds
    }
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    toast.success(t("form_success"));
    setSending(false);
  };

  const ritualName = (r) => (lang === "ta" ? RITUALS_TA[r.slug].title : r.title);
  const pkgName = (p) => (lang === "ta" ? PACKAGES_TA[p.slug].title : p.title);

  return (
    <form data-testid="contact-form" onSubmit={submit} className="glass rounded-3xl p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          data-testid="contact-name-input"
          className={inputCls}
          placeholder={t("form_name")}
          value={form.name}
          onChange={update("name")}
          aria-label="Your name"
        />
        <input
          data-testid="contact-phone-input"
          className={inputCls}
          placeholder={t("form_phone")}
          value={form.phone}
          onChange={update("phone")}
          aria-label="Phone number"
        />
        <select
          data-testid="contact-service-select"
          className={`${inputCls} appearance-none`}
          value={form.service}
          onChange={update("service")}
          aria-label="Select a service"
        >
          <option value="" className="bg-stone-900">{t("form_service")}</option>
          <optgroup label={t("optgroup_rituals")} className="bg-stone-900">
            {RITUALS.map((r) => (
              <option key={r.slug} value={r.title} className="bg-stone-900">{ritualName(r)}</option>
            ))}
          </optgroup>
          <optgroup label={t("optgroup_packages")} className="bg-stone-900">
            {PACKAGES.map((p) => (
              <option key={p.slug} value={p.title} className="bg-stone-900">{pkgName(p)}</option>
            ))}
          </optgroup>
          <option value="General Enquiry" className="bg-stone-900">{t("general")}</option>
        </select>
        <input
          data-testid="contact-date-input"
          type="date"
          className={`${inputCls} [color-scheme:dark]`}
          value={form.date}
          onChange={update("date")}
          aria-label="Preferred date"
        />
      </div>
      <textarea
        data-testid="contact-message-input"
        className={`${inputCls} mt-4 min-h-[110px] resize-y`}
        placeholder={t("form_msg")}
        value={form.message}
        onChange={update("message")}
        aria-label="Your message"
      />
      <button
        data-testid="contact-submit-button"
        type="submit"
        disabled={sending}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3.5 text-sm font-bold tracking-wide text-stone-950 shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:shadow-[0_0_44px_rgba(212,175,55,0.5)] disabled:opacity-60"
      >
        <Send className="h-4 w-4" />
        {sending ? t("form_sending") : t("form_submit")}
      </button>
      <p className="mt-3 text-center text-xs text-stone-500">
        {t("form_note").replace("{number}", CONTACT.whatsappDisplay)}
      </p>
    </form>
  );
};

export default ContactForm;
