"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

/** Accent presets — [accent, accent-2]. Default matches the design (indigo). */
export const ACCENTS: Record<string, [string, string]> = {
  indigo: ["#6366f1", "#818cf8"],
  violet: ["#8b5cf6", "#a78bfa"],
  emerald: ["#10b981", "#34d399"],
  cyan: ["#06b6d4", "#22d3ee"],
  rose: ["#f43f5e", "#fb7185"],
  amber: ["#f59e0b", "#fbbf24"],
};

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((x) => x + x).join("") : h, 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

interface ThemeCtx {
  accent: string;
  setAccent: (key: string) => void;
}

const Ctx = createContext<ThemeCtx | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [accent, setAccentState] = useState<string>("indigo");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("se_accent");
      if (saved && ACCENTS[saved]) setAccentState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    const [a, a2] = ACCENTS[accent] ?? ACCENTS.indigo;
    const root = document.documentElement;
    root.style.setProperty("--accent", a);
    root.style.setProperty("--accent-2", a2);
    root.style.setProperty("--accent-rgb", hexToRgb(a));
  }, [accent]);

  const setAccent = useCallback((key: string) => {
    setAccentState(key);
    try { localStorage.setItem("se_accent", key); } catch {}
  }, []);

  return <Ctx.Provider value={{ accent, setAccent }}>{children}</Ctx.Provider>;
}

export function useTheme() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
