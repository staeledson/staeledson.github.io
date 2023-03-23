import React, { useContext } from 'react';
import ContextApp from '../context/../context/ContextApp';

export default function MenuLateral() {

  const {usedCard, setUsedCard } = useContext(ContextApp);

  const setandoClicado = (event) => {
    const {target} = event;
    setUsedCard(target.id);
    console.log(usedCard);
  };
  
  return(
      <div className='menu-lateral'>
        <h3 id='home' onClick={(event)=> setandoClicado(event)} className='itemMenuLateral' alt='home'>Home</h3>
        <h3 id='aboutme' onClick={(event)=> setandoClicado(event)} className='itemMenuLateral'>Sobre Mim</h3>
        {/* <h3 id='learned' onClick={(event)=> setandoClicado(event)} className='itemMenuLateral'>Linguagens</h3> */}
        {/* <h3 id='home' onClick={(event)=> setandoClicado(event)} className='itemMenuLateral'>Ferramentas</h3> */}
        <h3 id='education' onClick={(event)=> setandoClicado(event)} className='itemMenuLateral'>Education</h3>
        <h3 id='projects' onClick={(event)=> setandoClicado(event)} className='itemMenuLateral'>Projetos</h3>
        <h3 id='contacts' onClick={(event)=> setandoClicado(event)} className='itemMenuLateral'>Contato</h3>
      </div>
  );
}