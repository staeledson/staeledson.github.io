"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { content } from "@/lib/content";
import type { Dictionary, Lang } from "@/lib/types";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dictionary;
}

const Ctx = createContext<LangCtx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("se_lang") as Lang | null;
      if (saved === "pt" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("se_lang", l); } catch {}
  }, []);

  const toggle = useCallback(() => setLang(lang === "pt" ? "en" : "pt"), [lang, setLang]);

  return (
    <Ctx.Provider value={{ lang, setLang, toggle, t: content[lang] }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLang() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
