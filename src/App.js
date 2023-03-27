import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import AboutMe from './Components/AboutMe';
// import Contacts from './Components/Contacts';
// import Education from './Components/Education';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
