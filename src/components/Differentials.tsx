"use client";

import { useLang } from "@/context/LangContext";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import { DIFF_ICONS } from "./icons";

export default function Differentials() {
  const { t } = useLang();
  return (
    <section className="section diff" aria-labelledby="diff-title">
      <div className="container">
        <SectionHead kicker={t.diff.kicker} title={t.diff.title} id="diff-title" />
        <div className="diff-grid">
          {t.diff.items.map((it, i) => {
            const IconC = DIFF_ICONS[i % DIFF_ICONS.length];
            return (
              <Reveal className="diff-card" key={i} delay={i * 50}>
                <span className="diff-ico"><IconC size={22} /></span>
                <h3 className="diff-t">{it.t}</h3>
                <p className="diff-d">{it.d}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
