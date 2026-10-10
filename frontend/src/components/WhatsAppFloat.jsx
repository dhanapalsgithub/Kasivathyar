import { motion } from "framer-motion";
import { CONTACT } from "@/data/content";
import { useLang } from "@/i18n/LanguageContext";

const WhatsAppFloat = () => {
  const { t } = useLang();

  return (
    <motion.a
      href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(t("wa_default_msg"))}`}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float"
      aria-label="Chat with Kashi Vadhyar on WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 16 }}
      whileHover={{ scale: 1.12, rotate: 6 }}
      whileTap={{ scale: 0.92 }}
      className="group fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_30px_rgba(37,211,102,0.45)]"
    >
      <span className="kv-ping absolute inset-0 rounded-full bg-[#25D366]/60" aria-hidden="true" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-white" aria-hidden="true">
        <path d="M16 .8C7.6.8.8 7.6.8 16c0 2.7.7 5.3 2 7.6L.8 31.2l7.8-2c2.2 1.2 4.7 1.9 7.4 1.9 8.4 0 15.2-6.8 15.2-15.2S24.4.8 16 .8zm0 27.6c-2.3 0-4.6-.6-6.5-1.8l-.5-.3-4.6 1.2 1.2-4.5-.3-.5c-1.3-2-2-4.3-2-6.7C3.3 9 9 3.3 16 3.3S28.7 9 28.7 16 23 28.4 16 28.4zm7-9.4c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.7.1-.3.1-.5 0-.7-.1-.2-.8-2-1.1-2.8-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.9c.2.3 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5z" />
      </svg>
      <span className="glass-strong pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold text-amber-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
        {t("wa_tooltip")}
      </span>
    </motion.a>
  );
};

export default WhatsAppFloat;
