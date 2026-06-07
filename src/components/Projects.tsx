"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { projects as allProjects } from "@/lib/content";
import type { Project } from "@/lib/types";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import ProjectModal from "./ProjectModal";
import { IconArrow, IconArrowUpRight, IconExternal, IconGithub } from "./icons";

function ProjectCard({ p, onOpen, large }: { p: Project; onOpen: (p: Project) => void; large?: boolean }) {
  const { t, lang } = useLang();
  const d = lang === "pt" ? p.pt : p.en;
  return (
    <Reveal className={`pcard ${large ? "pcard--lg" : ""}`}>
      <button className="pcard-media" onClick={() => onOpen(p)} aria-label={`${t.projects.viewCase}: ${d.title}`}>
        <Image src={p.image} alt={d.title} width={760} height={475} />
        {p.featured ? <span className="pcard-flag">{t.projects.featuredLabel}</span> : null}
        <span className="pcard-hover"><span>{t.projects.viewCase}</span><IconArrowUpRight size={18} /></span>
      </button>
      <div className="pcard-body">
        <span className="pcard-cat">{d.category}</span>
        <h3 className="pcard-title">{d.title}</h3>
        <p className="pcard-tagline">{d.tagline}</p>
        <div className="pcard-tags">
          {p.tags.slice(0, large ? 5 : 4).map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
        <div className="pcard-links">
          <button className="link-btn" onClick={() => onOpen(p)}>{t.projects.viewCase}<IconArrow size={16} /></button>
          {p.link ? (
            <a className="link-btn link-btn--ghost" href={p.link} target="_blank" rel="noopener noreferrer">
              <IconExternal size={15} />{t.projects.live}
            </a>
          ) : null}
          {p.github ? (
            <a className="link-btn link-btn--ghost" href={p.github} target="_blank" rel="noopener noreferrer">
              <IconGithub size={15} />{t.projects.code}
            </a>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const { t } = useLang();
  const [active, setActive] = useState<Project | null>(null);
  const featured = allProjects.filter((p) => p.featured);
  const rest = allProjects.filter((p) => !p.featured);

  return (
    <section className="section projects" id="projects" aria-labelledby="proj-title">
      <div className="container">
        <SectionHead kicker={t.projects.kicker} title={t.projects.title} sub={t.projects.sub} id="proj-title" />
        <div className="pgrid pgrid--featured">
          {featured.map((p) => <ProjectCard key={p.id} p={p} onOpen={setActive} large />)}
        </div>
        <div className="pgrid pgrid--rest">
          {rest.map((p) => <ProjectCard key={p.id} p={p} onOpen={setActive} />)}
        </div>
      </div>
      {active ? <ProjectModal project={active} onClose={() => setActive(null)} /> : null}
    </section>
  );
}
