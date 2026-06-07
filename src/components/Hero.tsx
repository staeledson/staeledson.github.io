"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { links } from "@/lib/content";
import { IconArrow, IconGithub, IconLinkedin, IconSpark, IconStack } from "./icons";

const STACK = [
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
];

export default function Hero() {
  const { t } = useLang();
  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 76, behavior: "smooth" });
  };

  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="avail">
            <span className="avail-dot" aria-hidden="true" />{t.hero.badge}
          </div>
          <p className="hero-role">{t.hero.role}</p>
          <h1 className="hero-h1">
            {t.hero.h1a} <span className="grad">{t.hero.h1b}</span>
          </h1>
          <p className="hero-sub">{t.hero.sub}</p>
          <div className="hero-ctas">
            <a className="btn btn--solid" href="#projects" onClick={go("projects")}>
              {t.hero.ctaProjects}<IconArrow size={18} />
            </a>
            <a className="btn btn--ghost" href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <IconLinkedin size={18} />{t.hero.ctaLinkedin}
            </a>
            <a className="btn btn--ghost" href={links.github} target="_blank" rel="noopener noreferrer">
              <IconGithub size={18} />{t.hero.ctaGithub}
            </a>
            {/* "Baixar CV" oculto até o PDF ficar pronto. Reative com:
            <a className="btn btn--ghost" href={links.cv} download>
              <IconDownload size={18} />{t.hero.ctaCv}
            </a> */}
          </div>
          <div className="hero-stack">
            <span className="hero-stack-label">{t.hero.stackLabel}</span>
            <div className="hero-stack-row">
              {STACK.map((s) => (
                <span className="stack-chip" key={s.name} title={s.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.icon} alt="" loading="lazy" width={22} height={22} />
                  <span>{s.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="avatar-wrap">
            <div className="avatar-ring" aria-hidden="true" />
            <Image className="avatar" src="/profile.jpg" alt={t.about.photoAlt} width={320} height={320} priority />
            <div className="avatar-badge avatar-badge--1"><IconStack size={16} /> Full Stack</div>
            <div className="avatar-badge avatar-badge--2"><IconSpark size={16} /> IA · RAG</div>
          </div>
        </div>
      </div>
    </section>
  );
}
