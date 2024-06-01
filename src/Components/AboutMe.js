import React, { useContext } from "react";
import ContextApp from "../context/../context/ContextApp";

export default function AboutMe() {
  const { setUsedCard } = useContext(ContextApp);
  return (
    <section id="about-me" className="h-screen m-auto">
      <div className="mt-48">
        <p className="w-9/12 m-auto mb-10 text-4xl text-center font-poppins ">
          Natural de Fortaleza-CE, sou Desenvolvedor Web Full Stack formado na
          <a
            href="https://www.betrybe.com/formacao-desenvolvimento-web"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            @Trybe
          </a>
        </p>
      </div>
      <div>
        <p className="w-8/12 m-auto mt-3 mb-10 text-2xl text-center font-poppins">
          Atualmente, presto serviços de desenvolvimento web e mobile, para as
          empresas
          <a
            href="https://www.pluralmed.com.br/src/pages/home/index.html"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            @Pluralmed
          </a>
          , e
          <a
            href="https://www.igepsaude.org.br/#/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            @IGEPSaude
          </a>
        </p>

        <div className="flex justify-center">
          <p className="text-2xl font-normal text-center font-poppins">
            Também aceito serviços freelancer
          </p>
          <a
            className="p-2 px-3 mx-5 bg-blue-600 rounded-lg animate-pulse text-slate-200"
            onClick={(event) => setUsedCard("contacts")}
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
}
