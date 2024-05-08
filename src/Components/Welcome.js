import React from "react";

export default class Welcome extends React.Component {
  render() {
    return (
      <section id="welcome" className="h-screen m-auto text-center welcome2 ">
        <div className="mt-44">
          <p className="font-poppins text-7xl">Seja bem-vindo</p>
        </div>
        <div className="mt-16">
          <p className="text-3xl font-medium font-poppins welcome-itenss">
            Sou Stael Edson, Desenvolvedor Web Full Stack.
          </p>
        </div>
      </section>
    );
  }
}
