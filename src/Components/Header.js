import React from 'react';

export default class Header extends React.Component {
  render(){
    return(
      <div className='faixa-header'>
        <h1>Portifólio</h1>
        <section>
          <a>linkedin</a>
          <a>github</a>
        </section>
      </div>
    );
  }
}