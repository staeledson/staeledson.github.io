"use client";

import { useLang } from "@/context/LangContext";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import { IconCheck } from "./icons";

export default function Experience() {
  const { t } = useLang();
  return (
    <section className="section experience" id="experience" aria-labelledby="exp-title">
      <div className="container">
        <SectionHead kicker={t.experience.kicker} title={t.experience.title} id="exp-title" />
        <div className="timeline">
          {t.experience.items.map((job, i) => (
            <Reveal className="tl-item" key={i} delay={i * 80}>
              <div className="tl-marker" aria-hidden="true">
                <span className="tl-node" />
                {i < t.experience.items.length - 1 ? <span className="tl-line" /> : null}
              </div>
              <div className="tl-card">
                <div className="tl-head">
                  <div>
                    <h3 className="tl-role">{job.role}</h3>
                    <p className="tl-company">{job.company} · <span>{job.location}</span></p>
                  </div>
                  <span className={`tl-period ${i === 0 ? "is-present" : ""}`}>{job.period}</span>
                </div>
                <p className="tl-summary">{job.summary}</p>
                <ul className="tl-bullets">
                  {job.bullets.map((b, bi) => (
                    <li key={bi}><IconCheck size={16} className="tl-check" /><span>{b}</span></li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
