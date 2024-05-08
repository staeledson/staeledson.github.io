import React from "react";

export default class AboutMe extends React.Component {
  render() {
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
        </div>
      </section>
    );
  }
}
