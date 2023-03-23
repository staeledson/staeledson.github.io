import React from 'react';
import backgroudImage from '../assets/background1.jpg';
import CardCentral from '../Components/CardCentral';
import MenuLateral from '../Components/MenuLateral';

    class Home extends React.Component {
      // constructor(){
      //   super();
      // };
      render(){
        return(
          <div className='home'>
            <div className='overlay'/>
            <img className='backImg' src={backgroudImage} alt='backgroudImage'/>
            <div className='content'>
              <h1>Portifólio</h1>
              <div className='separador'/>
              <div className='center'>
              <MenuLateral/>
              <CardCentral/>
              </div>
            </div>
          </div>
        );
      };
    }
    
    export default Home;
    
    // <div className="App">
    //   <header className="App-header">
    //     <body style={{
    //       backgroundSize: '100%',
    //       backgroundHeigth: '1000px',
    //       backgroundImage: `url(${IMAGES.background1})`
    //     }}>
    //       <h1>
    //         Portifólio
    //       </h1> 
    //       <div classname="menu-lateral">
    //         <h1>teste</h1>
    //       </div>
    //     <a
    //       className="Linkedin"
    //       href="https://www.linkedin.com/in/staeledson/"
    //       target="_blank"
    //       rel="Linkedin noreferrer"
    //     >
    //       linkedin
    //     </a>
    //     </body>
    //   </header>
    // </div>