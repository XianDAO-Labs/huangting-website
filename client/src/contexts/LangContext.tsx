import { createContext, useContext, useState, ReactNode } from "react";

const STORAGE_KEY = "huangting_lang";

type Lang = "zh" | "en";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (zh: string, en: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "zh",
  toggleLang: () => {},
  t: (zh) => zh,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "zh") return stored;
    } catch {}
    return "zh";
  });

  const toggleLang = () => {
    setLang((l) => {
      const next = l === "zh" ? "en" : "zh";
      try { localStorage.setItem(STORAGE_KEY, next); } catch {}
      return next;
    });
  };

  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
