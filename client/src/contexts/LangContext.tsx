import { createContext, useContext, useState, ReactNode } from "react";

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
  const [lang, setLang] = useState<Lang>("zh");
  const toggleLang = () => setLang((l) => (l === "zh" ? "en" : "zh"));
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
