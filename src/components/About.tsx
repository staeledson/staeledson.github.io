"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";

export default function About() {
  const { t } = useLang();
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-media">
          <Reveal className="about-photo">
            <Image src="/profile.jpg" alt={t.about.photoAlt} width={520} height={640} />
            <div className="about-photo-tag">
              <span className="avail-dot" aria-hidden="true" />Sobral · BR
            </div>
          </Reveal>
        </div>
        <div className="about-body">
          <SectionHead kicker={t.about.kicker} title={t.about.title} id="about-title" />
          <Reveal delay={80}><p className="about-p">{t.about.p1}</p></Reveal>
          <Reveal delay={120}><p className="about-p">{t.about.p2}</p></Reveal>
          <Reveal delay={160}><p className="about-p">{t.about.p3}</p></Reveal>
          <Reveal delay={200}><p className="about-p about-p--accent">{t.about.p4}</p></Reveal>
        </div>
      </div>
    </section>
  );
}
