import React, { useContext } from "react";
import ContextApp from "../context/../context/ContextApp";

export default function MenuLateral() {
  const { setUsedCard } = useContext(ContextApp);

  const setandoClicado = (event) => {
    const { target } = event;
    setUsedCard(target.id);
  };

  return (
    <div className="mt-14">
      <div>
        <span className="w-[170px] p-2 bg-blue-800 rounded-full h-[170px] m-auto flex">
          <div className="p-2 minha-foto" />
        </span>
        <p className="my-1 mt-4 text-gray-300 text-md font-poppins">
          Stael Edson
        </p>
      </div>
      <div className="text-xl text-gray-300 menu-latera my-14">
        <ul>
          <li
            id="home"
            onClick={(event) => setandoClicado(event)}
            className="itemMenuLateral hover:text-gray-600 hover:underline underline-offset-4 font-poppins"
            alt="home"
          >
            Home
          </li>
          <li
            id="aboutme"
            onClick={(event) => setandoClicado(event)}
            className="itemMenuLateral hover:text-gray-600 hover:underline underline-offset-4 font-poppins"
          >
            Sobre Mim
          </li>
          <li
            id="learned"
            onClick={(event) => setandoClicado(event)}
            className="itemMenuLateral hover:text-gray-600 hover:underline underline-offset-4 font-poppins"
          >
            Linguagens/Ferramentas
          </li>
          {/* <li id='home' onClick={(event)=> setandoClicado(event)} className='itemMenuLateral'>Ferramentas</li> */}
          <li
            id="education"
            onClick={(event) => setandoClicado(event)}
            className="itemMenuLateral hover:text-gray-600 hover:underline underline-offset-4 font-poppins"
          >
            Formação
          </li>
          <li
            id="projects"
            onClick={(event) => setandoClicado(event)}
            className="itemMenuLateral hover:text-gray-600 hover:underline underline-offset-4 font-poppins"
          >
            Projetos
          </li>
          <li
            id="contacts"
            onClick={(event) => setandoClicado(event)}
            className="itemMenuLateral hover:text-gray-600 hover:underline underline-offset-4 font-poppins"
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
