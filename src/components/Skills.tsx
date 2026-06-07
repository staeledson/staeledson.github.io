"use client";

import { useLang } from "@/context/LangContext";
import { skills } from "@/lib/content";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";

export default function Skills() {
  const { t, lang } = useLang();
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHead kicker={t.skills.kicker} title={t.skills.title} sub={t.skills.sub} id="skills-title" />
        <div className="skills-legend">
          <span><i className="dot dot--adv" />{t.skills.legendAdv}</span>
          <span><i className="dot dot--int" />{t.skills.legendInt}</span>
        </div>
        <div className="skills-grid">
          {skills.map((cat, ci) => (
            <Reveal className="skill-card" key={cat.id} delay={ci * 60}>
              <h3 className="skill-cat">{lang === "pt" ? cat.pt : cat.en}</h3>
              <ul className="skill-list">
                {cat.items.map((it) => (
                  <li className="skill-row" key={it.name}>
                    <span className="skill-name">{it.name}</span>
                    <span className="skill-bar">
                      <span
                        className={`skill-fill ${it.level >= 85 ? "is-adv" : "is-int"}`}
                        style={{ "--w": `${it.level}%` } as React.CSSProperties}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
