import React from "react";
import CardCentral from "../Components/CardCentral";
import MenuLateral from "../Components/MenuLateral";

class Home extends React.Component {
  // constructor(){
  //   super();
  // };
  render() {
    return (
      <>
        <div className="flex w-full">
          <div className="flex-col px-2 text-center bg-slate-900 opacity-90">
            <MenuLateral />
          </div>
          <div className="flex w-11/12 m-auto bg-opacity-30 bg-slate-900">
            <CardCentral />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
