import React from 'react';
import { emailIcon, githubIcon, linkedinIcon, phoneIcon, wppIcon } from '../utils/icons';

export default class Contacts extends React.Component {
  
  render(){
    const linkWpp = 'https://wa.me/5585992641804?text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20link%20em%20seu%20portf%C3%B3lio.'
    return(
      <div className='contatos-card'>
        <h2>Entre em contato:</h2>
        <h5 className='contatos-itens'>{emailIcon} edsonstael@gmail.com</h5>
        <h5 className='contatos-itens'>{phoneIcon} (85) 992641804</h5>
        
        <h5 className='contatos-itens'>{linkedinIcon} 
          <a href='https://www.linkedin.com/in/staeledson/' target='_blank' rel="noreferrer"> linkedin.com/in/staeledson</a>
        </h5>
        
        <h5 className='contatos-itens'>{githubIcon}
          <a href='https://github.com/staeledson' target='_blank' rel="noreferrer"> github.com/staeledson</a>
        </h5>

        <h5 className='contatos-itens'>{wppIcon} 
          <a href={linkWpp} target='_blank' rel="noreferrer"> Whatsapp</a>
        </h5>
      </div>
    );
  }
}
