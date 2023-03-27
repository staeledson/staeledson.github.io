import React from 'react';

export default class Contacts extends React.Component {
  
  render(){
    const linkWpp = 'https://wa.me/5585992641804?text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20link%20em%20seu%20portf%C3%B3lio.'
    return(
      <div className='contatos-card'>
        <h2>Entre em contato:</h2>
        <h5 className='contatos-itens'>Email: edsonstael@gmail.com</h5>
        <h5 className='contatos-itens'>Telefone: (85) 992641804</h5>
        
        <h5 className='contatos-itens'>Linkedin:  
          <a href='https://www.linkedin.com/in/staeledson/' target='_blank' rel="noreferrer"> www.linkedin.com/in/staeledson</a>
        </h5>
        
        <h5 className='contatos-itens'>Github:  
          <a href='https://github.com/staeledson' target='_blank' rel="noreferrer"> https://github.com/staeledson</a>
        </h5>

        <h5 className='contatos-itens'>Wpp:  
          <a href={linkWpp} target='_blank' rel="noreferrer"> Whatsapp</a>
        </h5>
      </div>
    );
  }
}
