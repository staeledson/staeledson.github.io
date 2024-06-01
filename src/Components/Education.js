import React from "react";

export default class Education extends React.Component {
  render() {
    return (
      <section className="h-screen m-auto text-center education2 ">
        <p className="text-4xl font-poppins mt-44">
          Desenvolvedor Full Stack{" "}
          <a
            href="https://www.betrybe.com/formacao-desenvolvimento-web"
            target="_blank"
            rel="noreferrer"
          >
            @Trybe
          </a>
        </p>

        <p className="w-9/12 m-auto mt-16 text-xl font-poppins">
          A
          <a
            href="https://www.betrybe.com/formacao-desenvolvimento-web"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Trybe{" "}
          </a>
          é uma escola de tecnologia que tem compromisso genuíno com o sucesso
          profissional das pessoas estudantes. Com o Modelo de Sucesso
          Compartilhado, quem estuda na Trybe tem a opção de pagar apenas quando
          já estiver trabalhando.
        </p>
        <p className="w-9/12 m-auto mt-16 text-xl font-poppins">
          São mais de 1500 horas de formação que aborda fundamentos de
          desenvolvimento web, desenvolvimento, Front-end, Back-end, ciência da
          computação, metodologias ágeis e habilidades comportamentais.
        </p>
      </section>
    );
  }
}
