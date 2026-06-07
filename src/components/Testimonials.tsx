"use client";

import { useLang } from "@/context/LangContext";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import { IconLinkedin } from "./icons";

const initials = (n: string) =>
  n.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

export default function Testimonials() {
  const { t } = useLang();
  return (
    <section className="section tms" aria-labelledby="tms-title">
      <div className="container">
        <SectionHead kicker={t.testimonials.kicker} title={t.testimonials.title} id="tms-title" />
        <div className="tms-grid">
          {t.testimonials.items.map((tm, i) => (
            <Reveal className="tms-card" key={i} delay={i * 70}>
              <span className="tms-badge" aria-label="LinkedIn"><IconLinkedin size={16} /></span>
              <span className="tms-quote" aria-hidden="true">&ldquo;</span>
              <p className="tms-text">{tm.quote}</p>
              <div className="tms-author">
                <span className="tms-avatar" aria-hidden="true">{initials(tm.name)}</span>
                <div>
                  <p className="tms-name">{tm.name}</p>
                  <p className="tms-role">{tm.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="tms-note">{t.testimonials.note}</p>
      </div>
    </section>
  );
}
