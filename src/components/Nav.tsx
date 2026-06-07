"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/context/LangContext";
import { IconClose, IconMenu } from "./icons";

export default function Nav() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 76, behavior: "smooth" });
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="brand" onClick={go("top")} aria-label="Stael Edson — início">
          <span className="brand-mark">SE</span>
          <span className="brand-name">stael<span className="brand-dim">edson</span></span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {t.nav.links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={go(l.id)}>{l.label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            <span className={lang === "pt" ? "on" : ""}>PT</span>
            <span className="lang-sep">/</span>
            <span className={lang === "en" ? "on" : ""}>EN</span>
          </button>
          <a className="btn btn--solid btn--sm nav-cv" href="#contact" onClick={go("contact")}>{t.nav.contact}</a>
          <button className="nav-burger" onClick={() => setOpen((v) => !v)} aria-label="Menu" aria-expanded={open}>
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="nav-mobile">
          {t.nav.links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={go(l.id)}>{l.label}</a>
          ))}
          <a className="btn btn--solid" href="#contact" onClick={go("contact")}>{t.nav.contact}</a>
        </div>
      )}
    </header>
  );
}
