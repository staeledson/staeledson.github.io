import React from 'react';

export default class Learned extends React.Component {
  render(){
    return(
      <div className='learned-card'>
        <p>Habilidades e ferramentas que já utilizo:</p>
        <section>
          <img className='learned-itens' src = "https://img.shields.io/badge/-HTML5-1C1C1C?style=plastic&logo=html5&logoColor=E34F26" alt="html5" width="85px"/> 
          <img className='learned-itens' src = "https://img.shields.io/badge/-CSS3-1C1C1C?style=plastic&logo=css3&logoColor=1572B6" alt="css3" width="75px"/> 
          <img className='learned-itens' src = "https://img.shields.io/badge/-JavaScript-1C1C1C?style=plastic&logo=javascript&logoColor=eed718" alt="javascript" width="110px"/> 
          <img className='learned-itens' src="https://img.shields.io/badge/-ReactJs-1C1C1C?logo=react&logoColor=61DAFB&style=plastic" alt="react" width="90px"/> 
          <img className='learned-itens' src="https://img.shields.io/badge/-React%20Router-1C1C1C?logo=react-router&logoColor=CA4245&style=plastic" alt="react_router" width="130px"/>
          <img className='learned-itens' src="https://img.shields.io/badge/-Redux-1C1C1C?logo=redux&logoColor=764ABC&style=plastic" alt="redux" width="85px"/> 
          <img className='learned-itens' src="https://img.shields.io/badge/-Jest-1C1C1C?logo=jest&logoColor=C21325&style=plastic" alt="jest" width="65px"/> 
          <img className='learned-itens' src="https://img.shields.io/badge/-Testing%20Library-1C1C1C?logo=testing-library&logoColor=E33332&style=plastic" alt="RTL" width="150px"/>
          <img className='learned-itens' src="https://img.shields.io/badge/-Linux-1C1C1C?style=plastic&logo=Linux&logoColor=eed718" alt="Linux" width="75px"/>
          <img className='learned-itens' src="https://img.shields.io/badge/-Git-1C1C1C?logo=git&logoColor=F05032&style=plastic" alt="git" width="55px"/>
          <img className='learned-itens' src="https://img.shields.io/badge/-NPM-1C1C1C?logo=npm&logoColor=CB3837&style=plastic" alt="npm" width="70px"/>
          <img className='learned-itens' src="https://img.shields.io/badge/-Docker-1C1C1C?style=plastic&logo=docker&logoColor=1572B6" alt="docker" width="85px"/>
          <img className='learned-itens' src="https://img.shields.io/badge/-MySQL-1C1C1C?style=plastic&logo=mysql&logoColor=4479A1" alt="mysql" width="85px"/>
          <img className='learned-itens' src="https://img.shields.io/badge/-Node.js-1C1C1C?style=plastic&logo=Node.js&logoColor=3C873A" alt="nodeJS" width="90px"/>
          <img className='learned-itens' src="https://img.shields.io/badge/-Express-1C1C1C?style=plastic&logo=express&logoColor=fff" alt="express" width="95px"/>
          <img className='learned-itens' src="https://img.shields.io/badge/-TypeScript-1C1C1C?style=plastic&logo=typescript&logoColor=3178C6" alt="typescript" width="110px"/>
        </section>
          <p>Em desenvolvimento:</p>
          <section>
            <img className='learned-itens' src="https://img.shields.io/badge/-MongoDB-1C1C1C?style=plastic&logo=mongodb&logoColor=47A248" alt="mongodb" width="105px"/>
            <img className='learned-itens' src="https://img.shields.io/badge/-Heroku-1C1C1C?style=plastic&logo=heroku&logoColor=764ABC" alt="heroku" width="90px"/>
            <img className='learned-itens' src="https://img.shields.io/badge/-Python-1C1C1C?style=plastic&logo=python&logoColor=fff" alt="phyton" width="85px"/>   
          </section>

      </div>
    );
  }
}