"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import type { Project } from "@/lib/types";
import { IconClose, IconExternal, IconGithub } from "./icons";

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { t, lang } = useLang();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  const d = lang === "pt" ? project.pt : project.en;
  const lb = t.projects.labels;
  const rows = [
    { k: lb.problem, v: d.problem, cls: "is-problem" },
    { k: lb.solution, v: d.solution, cls: "is-solution" },
    { k: lb.challenge, v: d.challenge, cls: "is-challenge" },
    { k: lb.result, v: d.result, cls: "is-result" },
  ];

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={d.title} onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar"><IconClose size={20} /></button>
        <div className="modal-hero">
          <Image src={project.image} alt={d.title} width={880} height={440} />
        </div>
        <div className="modal-body">
          <span className="pcard-cat">{d.category}</span>
          <h3 className="modal-title">{d.title}</h3>
          <p className="modal-tagline">{d.tagline}</p>
          <div className="modal-rows">
            {rows.map((r) => (
              <div className={`mrow ${r.cls}`} key={r.k}>
                <span className="mrow-k">{r.k}</span>
                <p className="mrow-v">{r.v}</p>
              </div>
            ))}
          </div>
          <div className="modal-foot">
            <div className="pcard-tags">
              <span className="mrow-k mrow-k--inline">{lb.stack}</span>
              {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
            </div>
            <div className="modal-actions">
              {project.link ? (
                <a className="btn btn--solid btn--sm" href={project.link} target="_blank" rel="noopener noreferrer">
                  <IconExternal size={16} />{t.projects.live}
                </a>
              ) : null}
              {project.github ? (
                <a className="btn btn--ghost btn--sm" href={project.github} target="_blank" rel="noopener noreferrer">
                  <IconGithub size={16} />{t.projects.code}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
