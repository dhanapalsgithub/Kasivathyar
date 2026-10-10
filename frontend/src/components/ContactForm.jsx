import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { CONTACT, RITUALS, PACKAGES } from "@/data/content";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const inputCls =
  "w-full rounded-xl border border-amber-500/20 bg-white/5 px-4 py-3 text-sm text-stone-100 placeholder:text-stone-500 outline-none transition-colors duration-300 focus:border-amber-400/70 focus:bg-white/[0.07]";

const ContactForm = ({ defaultService = "" }) => {
  const [form, setForm] = useState({ name: "", phone: "", service: defaultService, date: "", message: "" });
  const [sending, setSending] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please share your name and phone number");
      return;
    }
    setSending(true);
    const lines = [
      "Namaste Kashi Vadhyar,",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.service && `Service: ${form.service}`,
      form.date && `Preferred date: ${form.date}`,
      form.message && `Message: ${form.message}`,
      "",
      "I would like to book / know more.",
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
    toast.success("Opening WhatsApp — your enquiry is ready to send");
    setSending(false);
  };

  return (
    <form data-testid="contact-form" onSubmit={submit} className="glass rounded-3xl p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          data-testid="contact-name-input"
          className={inputCls}
          placeholder="Your name *"
          value={form.name}
          onChange={update("name")}
          aria-label="Your name"
        />
        <input
          data-testid="contact-phone-input"
          className={inputCls}
          placeholder="Phone / WhatsApp number *"
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
          <option value="" className="bg-stone-900">Select a service…</option>
          <optgroup label="Rituals" className="bg-stone-900">
            {RITUALS.map((r) => (
              <option key={r.slug} value={r.title} className="bg-stone-900">{r.title}</option>
            ))}
          </optgroup>
          <optgroup label="Yatra Packages" className="bg-stone-900">
            {PACKAGES.map((p) => (
              <option key={p.slug} value={p.title} className="bg-stone-900">{p.title}</option>
            ))}
          </optgroup>
          <option value="General Enquiry" className="bg-stone-900">General Enquiry</option>
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
        placeholder="Tell us about your requirement — family gotra, occasion, number of people…"
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
        {sending ? "Preparing WhatsApp…" : "Send Enquiry via WhatsApp"}
      </button>
      <p className="mt-3 text-center text-xs text-stone-500">
        Your details open directly in WhatsApp to {CONTACT.whatsappDisplay} — nothing is shared with third parties.
      </p>
    </form>
  );
};

export default ContactForm;
