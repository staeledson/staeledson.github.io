import React, { useContext } from "react";
import ContextApp from "../context/../context/ContextApp";

export default function MenuLateral() {
  const { usedCard, setUsedCard } = useContext(ContextApp);

  const setandoClicado = (event) => {
    const { target } = event;
    setUsedCard(target.id);
    console.log(usedCard);
  };

  return (
    <div className="">
      <div>
        <div className="minha-foto mt-8" />
        <p className="text-gray-300 text-md my-1">Stael Edson</p>
      </div>
      <div className="menu-latera text-gray-300 text-xl my-14">
        <ul>
          <li
            id="home"
            onClick={(event) => setandoClicado(event)}
            className="itemMenuLateral hover:text-gray-600 hover:underline underline-offset-4"
            alt="home"
          >
            Home
          </li>
          <li
            id="aboutme"
            onClick={(event) => setandoClicado(event)}
            className="itemMenuLateral hover:text-gray-600 hover:underline underline-offset-4"
          >
            Sobre Mim
          </li>
          <li
            id="learned"
            onClick={(event) => setandoClicado(event)}
            className="itemMenuLateral hover:text-gray-600 hover:underline underline-offset-4"
          >
            Linguagens/Ferramentas
          </li>
          {/* <li id='home' onClick={(event)=> setandoClicado(event)} className='itemMenuLateral'>Ferramentas</li> */}
          <li
            id="education"
            onClick={(event) => setandoClicado(event)}
            className="itemMenuLateral hover:text-gray-600 hover:underline underline-offset-4"
          >
            Formação
          </li>
          <li
            id="projects"
            onClick={(event) => setandoClicado(event)}
            className="itemMenuLateral hover:text-gray-600 hover:underline underline-offset-4"
          >
            Projetos
          </li>
          <li
            id="contacts"
            onClick={(event) => setandoClicado(event)}
            className="itemMenuLateral hover:text-gray-600 hover:underline underline-offset-4"
          >
            Contato
          </li>
        </ul>
      </div>
    </div>
  );
}

// return(
//     <div className='menu-lateral'>
//       <h3 id='home' onClick={(event)=> setandoClicado(event)} className='itemMenuLateral' alt='home'>Home</h3>
//       <h3 id='aboutme' onClick={(event)=> setandoClicado(event)} className='itemMenuLateral'>Sobre Mim</h3>
//       {/* <h3 id='learned' onClick={(event)=> setandoClicado(event)} className='itemMenuLateral'>Linguagens</h3> */}
//       {/* <h3 id='home' onClick={(event)=> setandoClicado(event)} className='itemMenuLateral'>Ferramentas</h3> */}
//       <h3 id='education' onClick={(event)=> setandoClicado(event)} className='itemMenuLateral'>Education</h3>
//       <h3 id='projects' onClick={(event)=> setandoClicado(event)} className='itemMenuLateral'>Projetos</h3>
//       <h3 id='contacts' onClick={(event)=> setandoClicado(event)} className='itemMenuLateral'>Contato</h3>
//     </div>
// );
