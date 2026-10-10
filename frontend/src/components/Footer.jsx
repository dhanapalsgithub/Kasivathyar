import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, MessageCircle } from "lucide-react";
import { CONTACT, NAV_LINKS, RITUALS, SHLOKA } from "@/data/content";
import { LogoMark } from "@/components/Logo";

const Footer = () => (
  <footer data-testid="site-footer" className="relative border-t border-amber-500/15 bg-[#07080B]">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <div className="flex items-center gap-3">
          <LogoMark className="h-11 w-11" />
          <div>
            <p className="font-display text-2xl font-bold text-amber-100">
              Kashi <span className="gold-text">Vadhyar</span>
            </p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-amber-500/80">Tamil Kshetra Purohit</p>
          </div>
        </div>
        <p className="mt-5 font-sanskrit text-sm leading-relaxed text-amber-200/70">{SHLOKA}</p>
        <div className="mt-5 flex gap-3">
          <a
            href={CONTACT.facebook}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-facebook"
            aria-label="Facebook"
            className="glass rounded-full p-2.5 text-amber-200 transition-transform duration-300 hover:scale-110 hover:text-amber-400"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-whatsapp"
            aria-label="WhatsApp"
            className="glass rounded-full p-2.5 text-amber-200 transition-transform duration-300 hover:scale-110 hover:text-green-400"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            data-testid="footer-email"
            aria-label="Email"
            className="glass rounded-full p-2.5 text-amber-200 transition-transform duration-300 hover:scale-110 hover:text-amber-400"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div>
        <h4 className="eyebrow">Quick Links</h4>
        <ul className="mt-5 space-y-3">
          {NAV_LINKS.map((l) => (
            <li key={l.path}>
              <Link
                to={l.path}
                data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-stone-400 transition-colors hover:text-amber-300"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="eyebrow">Poojas</h4>
        <ul className="mt-5 space-y-3">
          {RITUALS.map((r) => (
            <li key={r.slug}>
              <Link
                to="/poojas"
                data-testid={`footer-pooja-${r.slug}`}
                className="text-sm uppercase tracking-wider text-stone-400 transition-colors hover:text-amber-300"
              >
                {r.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="eyebrow">Contact Us</h4>
        <ul className="mt-5 space-y-4 text-sm text-stone-400">
          <li className="flex gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
            <span>{CONTACT.address}</span>
          </li>
          <li>
            <a href={CONTACT.phone1Href} data-testid="footer-phone-1" className="flex gap-3 transition-colors hover:text-amber-300">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              {CONTACT.phone1}
            </a>
          </li>
          <li>
            <a href={CONTACT.phone2Href} data-testid="footer-phone-2" className="flex gap-3 transition-colors hover:text-amber-300">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              {CONTACT.phone2}
            </a>
          </li>
          <li>
            <a href={`mailto:${CONTACT.email}`} data-testid="footer-email-link" className="flex gap-3 transition-colors hover:text-amber-300">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              {CONTACT.email}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-amber-500/10 py-6 text-center text-xs tracking-wider text-stone-500">
      © 2026 Kashi Vadhyar | All Rights Reserved
    </div>
  </footer>
);

export default Footer;
