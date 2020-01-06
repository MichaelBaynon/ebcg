import React from "react";

import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation";

import Home from './screens/Home.js'
import About from './screens/About.js'
import Contact from './screens/Contact'
import Services from './screens/Services'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/services' component={Services} />
      </div>
    </Router>
  );
}

export default App;
