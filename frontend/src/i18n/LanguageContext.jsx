import { createContext, useContext, useEffect, useState } from "react";
import { UI } from "@/i18n/translations";

const LanguageContext = createContext({ lang: "en", setLang: () => {}, t: (k) => k });

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => localStorage.getItem("kv-lang") || "en");

  const setLang = (l) => {
    setLangState(l);
    localStorage.setItem("kv-lang", l);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("lang-ta", lang === "ta");
    document.documentElement.classList.toggle("lang-hi", lang === "hi");
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key) => UI[lang]?.[key] ?? UI.en[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
