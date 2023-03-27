import React, { useContext } from "react";
import ContextApp from "../context/ContextApp";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Education from "./Education";
import Projects from "./Projects";
import Welcome from "./Welcome";

export default function CardCentral (){

  const { usedCard } = useContext(ContextApp);

  return(
     <div className="central-card">
       { usedCard === 'home' && <Welcome/> }
       { usedCard === 'aboutme' && <AboutMe/> }
       { usedCard === 'contacts' && <Contacts/> }
       { usedCard === 'projects' && <Projects/> }
       { usedCard === 'education' && <Education/> }
     </div>
   );
}






// class CardCentral extends React.Component{

//   constructor(){
//     super();
//     this.state = {
//       pathAtual: '',
//     };
//   }

//   componentDidMount() {
//     this.setState({pathAtual: 'aboutme'});
//   }
  
//   // getPathName = () => {
//   //   this.setState({ pathAtual: 'aboutme' })
//   // };
  
//   render() {
//     const {pathAtual} = this.state;    
//     return(
//       <div className="central-card">
//         { pathAtual === 'aboutme' && <AboutMe/> }
//         { pathAtual === 'contacts' && <Contacts/> }
//         { pathAtual === 'education' && <Education/> }
//       </div>
//     );
//   }
// }

// export default CardCentral;