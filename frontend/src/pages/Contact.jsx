import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/data/content";

const infoCards = [
  { icon: MapPin, label: "Visit Us", value: CONTACT.address, href: "https://www.google.com/maps?q=B6/62+Pitambarpura+Harishchandra+Road+Varanasi+221001", testid: "contact-address" },
  { icon: Phone, label: "Call Us", value: `${CONTACT.phone1} · ${CONTACT.phone2}`, href: CONTACT.phone1Href, testid: "contact-phones" },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}`, testid: "contact-email" },
  { icon: Clock, label: "Seva Hours", value: "Every day · 6:00 AM – 9:00 PM IST", testid: "contact-hours" },
];

const Contact = () => (
  <div data-testid="contact-page">
    <PageHero
      eyebrow="We Are Here for You"
      title="Contact"
      accent="Us"
      image="https://images.unsplash.com/photo-1699630923504-9a24dbaab37c?q=85&w=1400"
    />
    <Marquee />

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <SectionHead
            align="left"
            eyebrow="Reach the Vadhyar"
            title={<>Your Yatra Begins with a <span className="gold-text italic">Namaste</span></>}
          />
          <div className="-mt-4 space-y-4">
            {infoCards.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.07}>
                <a
                  href={c.href || undefined}
                  target={c.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  data-testid={c.testid}
                  className={`glass flex items-center gap-5 rounded-2xl p-5 transition-all duration-300 ${c.href ? "hover:-translate-y-1 hover:border-amber-400/40" : "cursor-default"}`}
                >
                  <span className="glass-strong flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                    <c.icon className="h-5 w-5 text-amber-400" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-amber-500">{c.label}</span>
                    <span className="mt-1 block text-sm font-medium text-stone-200">{c.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-cta"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-bold text-stone-950 shadow-[0_8px_28px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" />
                Chat Instantly on WhatsApp — {CONTACT.whatsappDisplay}
              </a>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
      <Reveal>
        <div className="glass overflow-hidden rounded-3xl" data-testid="contact-map">
          <iframe
            title="Kashi Vadhyar location — Varanasi"
            src="https://www.google.com/maps?q=B6%2F62%20Pitambarpura%20Harishchandra%20Road%2C%20Varanasi%20221001&output=embed"
            className="h-[380px] w-full border-0 grayscale-[35%] invert-[92%] hue-rotate-180"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
    </section>
  </div>
);

export default Contact;
