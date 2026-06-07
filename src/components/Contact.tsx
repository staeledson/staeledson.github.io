"use client";

import { useLang } from "@/context/LangContext";
import { links } from "@/lib/content";
import SectionHead from "./ui/SectionHead";
import { IconArrowUpRight, IconGithub, IconLinkedin, IconMail, IconWhatsapp } from "./icons";

export default function Contact() {
  const { t } = useLang();
  const cards = [
    { k: t.contact.email, v: links.email, href: `mailto:${links.email}`, icon: <IconMail size={20} />, ext: false },
    { k: t.contact.whatsapp, v: links.whatsappLabel, href: links.whatsapp, icon: <IconWhatsapp size={20} />, ext: true },
    { k: t.contact.linkedin, v: "in/staeledson", href: links.linkedin, icon: <IconLinkedin size={20} />, ext: true },
    { k: t.contact.github, v: "@staeledson", href: links.github, icon: <IconGithub size={20} />, ext: true },
  ];
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact-inner">
        <div className="contact-glow" aria-hidden="true" />
        <SectionHead kicker={t.contact.kicker} title={t.contact.title} sub={t.contact.sub} center id="contact-title" />
        <div className="contact-grid">
          {cards.map((cd) => (
            <a
              className="contact-card"
              key={cd.k}
              href={cd.href}
              {...(cd.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="contact-ico">{cd.icon}</span>
              <span className="contact-meta">
                <span className="contact-k">{cd.k}</span>
                <span className="contact-v">{cd.v}</span>
              </span>
              <IconArrowUpRight size={16} className="contact-arrow" />
            </a>
          ))}
        </div>
        <div className="contact-cta">
          <a className="btn btn--solid btn--lg" href={links.whatsapp} target="_blank" rel="noopener noreferrer">
            <IconWhatsapp size={18} />{t.contact.cta}
          </a>
          <span className="contact-avail"><span className="avail-dot" aria-hidden="true" />{t.contact.availability}</span>
        </div>
      </div>
    </section>
  );
}
