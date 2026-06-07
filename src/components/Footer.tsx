"use client";

import { useLang } from "@/context/LangContext";
import { links } from "@/lib/content";
import { IconArrowUp, IconGithub, IconLinkedin, IconMail, IconWhatsapp } from "./icons";

export default function Footer() {
  const { t } = useLang();
  const top = (e: React.MouseEvent) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">SE</span>
          <div>
            <p className="footer-name">Stael Edson</p>
            <p className="footer-tag">{t.footer.tagline}</p>
          </div>
        </div>
        <div className="footer-links">
          <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><IconGithub size={20} /></a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><IconLinkedin size={20} /></a>
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><IconWhatsapp size={20} /></a>
          <a href={`mailto:${links.email}`} aria-label="E-mail"><IconMail size={20} /></a>
        </div>
        <a href="#top" className="footer-top" onClick={top}>{t.footer.top}<IconArrowUp size={16} /></a>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Stael Edson. {t.footer.built}</p>
      </div>
    </footer>
  );
}
