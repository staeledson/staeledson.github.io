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
          <div className="bg-gray-800 opacity-90 flex-col text-center px-2">
            <MenuLateral />
          </div>
          <div className="flex m-auto w-11/12">
            <CardCentral />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
