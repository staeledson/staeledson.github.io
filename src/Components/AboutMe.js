import React from "react";

export default class AboutMe extends React.Component {
  render() {
    return (
      <div className="flex-col justify-between m-auto">
        <div>
          <p className="text-2xl mb-10   w-9/12 text-center m-auto">
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
          <p className="text-xl my-10 w-8/12 text-center m-auto">
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
      </div>
    );
  }
}
