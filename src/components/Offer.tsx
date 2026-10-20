"use client";

import { useLang } from "@/context/LangContext";
import { links } from "@/lib/content";
import Reveal from "./ui/Reveal";
import { IconArrow, IconCheck, IconWhatsapp } from "./icons";

/* Highlighted offer: taking AI-built apps (Lovable, Bolt, Cursor…) to production. */
export default function Offer() {
  const { t } = useLang();
  const o = t.offer;
  const href = `${links.whatsapp}?text=${encodeURIComponent(o.message)}`;

  return (
    <section className="section offer" aria-labelledby="offer-title">
      <div className="container">
        <Reveal className="offer-card">
          <div className="offer-main">
            <span className="kicker"><span className="kicker-dot" aria-hidden="true" />{o.kicker}</span>
            <h2 className="offer-title" id="offer-title">{o.title}</h2>
            <p className="offer-sub">{o.sub}</p>
            <p className="offer-proof">{o.proof}</p>
            <div className="offer-actions">
              <a className="btn btn--solid btn--lg" href={href} target="_blank" rel="noopener noreferrer">
                <IconWhatsapp size={18} />{o.cta}
              </a>
              <a className="btn btn--ghost btn--lg" href="#projects">
                {o.ctaProjects}<IconArrow size={18} />
              </a>
            </div>
          </div>
          <ul className="offer-list">
            {o.items.map((it) => (
              <li key={it}>
                <span className="offer-check" aria-hidden="true"><IconCheck size={16} /></span>
                {it}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
