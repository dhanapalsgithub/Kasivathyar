import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const PageHero = ({ title, accent, image, eyebrow }) => {
  const { t } = useLang();

  return (
    <section data-testid="page-hero" className="relative flex min-h-[52vh] items-end overflow-hidden pb-14 pt-36">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-[#0A0B0E]/70 to-[#0A0B0E]/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0E]/70 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow}
        </motion.p>
        <div className="mt-3 overflow-hidden">
          <motion.h1
            className="font-display text-4xl font-bold text-amber-100 sm:text-5xl lg:text-6xl"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {title} {accent && <span className="gold-text italic">{accent}</span>}
          </motion.h1>
        </div>
        <motion.nav
          className="mt-4 flex items-center gap-1.5 text-xs tracking-wider text-stone-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          aria-label="Breadcrumb"
        >
          <Link to="/" className="transition-colors hover:text-amber-300" data-testid="breadcrumb-home">{t("crumb_home")}</Link>
          <ChevronRight className="h-3 w-3 text-amber-500" />
          <span className="text-amber-200/90">{title} {accent}</span>
        </motion.nav>
      </div>
    </section>
  );
};

export default PageHero;
