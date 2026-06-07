"use client";

import { useLang } from "@/context/LangContext";
import Reveal from "./ui/Reveal";
import CountUp from "./ui/CountUp";

export default function Stats() {
  const { t } = useLang();
  return (
    <section className="stats-band" aria-label={t.stats.kicker}>
      <div className="container stats-grid">
        {t.stats.items.map((s, i) => (
          <Reveal className="stat" key={i} delay={i * 70}>
            <div className="stat-num"><CountUp value={s.value} suffix={s.suffix} /></div>
            <div className="stat-label">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
