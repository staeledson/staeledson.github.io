"use client";

import Script from "next/script";

/** Código do site no GoatCounter (painel em https://staeledson.goatcounter.com). */
const GOATCOUNTER_CODE = "staeledson";

/** Seções da página única que contam como "parte do site vista". */
const SECTIONS: Record<string, string> = {
  about: "Sobre",
  skills: "Skills",
  experience: "Experiência",
  projects: "Projetos",
  contact: "Contato",
};

type GoatCounter = { count: (vars: { path: string; title?: string; event?: boolean }) => void };

/** Registra cada seção uma única vez por visita, quando ela passa pelo meio da tela. */
function trackSections() {
  const gc = (window as unknown as { goatcounter?: GoatCounter }).goatcounter;
  if (!gc?.count) return;
  const seen = new Set<string>();
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      const id = e.target.id;
      if (!e.isIntersecting || seen.has(id)) continue;
      seen.add(id);
      io.unobserve(e.target);
      gc.count({ path: `secao-${id}`, title: `Seção: ${SECTIONS[id]}`, event: true });
    }
  }, { rootMargin: "-45% 0px -45% 0px" });
  Object.keys(SECTIONS).forEach((id) => {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  });
}

/** Contador de visitas sem cookies (GoatCounter). Não conta acessos em localhost. */
export default function Analytics() {
  return (
    <Script
      src="https://gc.zgo.at/count.js"
      data-goatcounter={`https://${GOATCOUNTER_CODE}.goatcounter.com/count`}
      strategy="afterInteractive"
      onLoad={trackSections}
    />
  );
}
