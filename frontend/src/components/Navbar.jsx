import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Languages } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/data/content";
import { useLang } from "@/i18n/LanguageContext";
import LogoFull from "@/components/Logo";

const NAV_KEYS = { "/": "nav_home", "/about-us": "nav_about", "/poojas": "nav_poojas", "/packages": "nav_packages", "/events": "nav_events", "/gallery": "nav_gallery", "/contact-us": "nav_contact" };

const NEXT_LANG = { en: "ta", ta: "hi", hi: "en" };
const LANG_LABEL = { en: "தமிழ்", ta: "हिंदी", hi: "EN" };

const LangToggle = ({ className = "" }) => {
  const { lang, setLang } = useLang();
  return (
    <button
      data-testid="lang-toggle"
      onClick={() => setLang(NEXT_LANG[lang])}
      className={`glass flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold tracking-wide text-amber-200 transition-all duration-300 hover:border-amber-400/50 hover:text-amber-300 ${className}`}
      aria-label="Switch language"
    >
      <Languages className="h-3.5 w-3.5" />
      {LANG_LABEL[lang]}
    </button>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      data-testid="main-navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-2" : "bg-gradient-to-b from-black/70 to-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" aria-label="Kashi Vadhyar home">
          <LogoFull />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "bg-amber-500/15 text-amber-300"
                    : "text-stone-300 hover:bg-white/5 hover:text-amber-200"
                }`
              }
            >
              {t(NAV_KEYS[l.path])}
            </NavLink>
          ))}
          <LangToggle className="ml-2" />
          <a
            href={CONTACT.phone1Href}
            data-testid="nav-call-button"
            className="ml-2 flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-5 py-2.5 text-sm font-bold text-stone-950 shadow-[0_0_24px_rgba(212,175,55,0.35)] transition-transform duration-300 hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            {CONTACT.phone1}
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle />
          <button
            data-testid="mobile-menu-button"
            onClick={() => setOpen(!open)}
            className="glass rounded-full p-2.5 text-amber-200"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong mx-3 mt-3 overflow-hidden rounded-2xl lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col p-3">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavLink
                    to={l.path}
                    data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-base font-medium ${
                        isActive ? "bg-amber-500/15 text-amber-300" : "text-stone-200 hover:bg-white/5"
                      }`
                    }
                  >
                    {t(NAV_KEYS[l.path])}
                  </NavLink>
                </motion.div>
              ))}
              <a
                href={CONTACT.phone1Href}
                data-testid="mobile-call-button"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 px-4 py-3 font-bold text-stone-950"
              >
                <Phone className="h-4 w-4" /> {CONTACT.phone1}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
