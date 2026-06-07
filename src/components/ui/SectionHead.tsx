"use client";

import Reveal from "./Reveal";

export default function SectionHead({
  kicker, title, sub, center, id,
}: { kicker: string; title: string; sub?: string; center?: boolean; id?: string }) {
  return (
    <div className={`sec-head ${center ? "sec-head--center" : ""}`}>
      <Reveal className="kicker" style={{ display: "inline-flex" }}>
        <span className="kicker-dot" aria-hidden="true" />
        {kicker}
      </Reveal>
      <Reveal delay={60}>
        <h2 className="sec-title" id={id}>{title}</h2>
      </Reveal>
      {sub ? <Reveal delay={120}><p className="sec-sub">{sub}</p></Reveal> : null}
    </div>
  );
}
