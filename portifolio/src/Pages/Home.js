import React from 'react';
import CardCentral from '../Components/CardCentral';
import MenuLateral from '../Components/MenuLateral';

    class Home extends React.Component {
      // constructor(){
      //   super();
      // };
      render(){
        return(
          <>
            <div className='faixa-lateral'>
              <div>
                <div>
                  <div className='minha-foto'>
                  </div>
                  <p>Stael Edson</p>
                </div>
                <MenuLateral/>
              </div>
            </div>
            <div>
            <CardCentral/>
            </div>
          </>
        );
      };
    }
    
    export default Home;
    