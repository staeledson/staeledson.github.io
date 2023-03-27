import React from 'react';

export default class Welcome extends React.Component {
  render(){
    return(
      <div className='welcome'>
        <p>Olá, sou Stael Edson.</p>
        <p className='welcome-itens'>Seja bem vindo(a) à minha página.</p>
      </div>
    );
  }
}