import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';


function App() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Home /> } />
      <Route exact path="/about" render={ () => <About /> } />
      <Route exact path="/projects" render={ () => <Projects /> } />
      <Route exact path="/contact" render={ () => <Contact /> } />
    </Switch>
  );
}

export default App;
