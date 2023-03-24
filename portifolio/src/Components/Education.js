import React from 'react';

export default class Education extends React.Component {
  render(){
    return(
      <div className='education'>
        <h3>Desenvolvimento front-end pela @Trybe</h3>
        <p className='education-itens'>No momento estou estudando o módulo de Desenvolvimento Back-end, como parte da minha formação full stack</p>
        <p className='education-itens'>
          A Trybe é uma escola de tecnologia que tem compromisso genuíno com o sucesso profissional das pessoas estudantes.
          Com o Modelo de Sucesso Compartilhado, quem estuda na Trybe tem a opção de pagar apenas quando já estiver trabalhando.
        </p>
        <p className='education-itens'>
          São mais de 1500 horas de formação que aborda fundamentos de desenvolvimento web, desenvolvimento, Front-end, Back-end,
           ciência da computação, metodologias ágeis e habilidades comportamentais.
        </p>
      </div>
    );
  }
}