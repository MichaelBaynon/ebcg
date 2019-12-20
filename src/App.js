import React from "react";

import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from './screens/Home.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path='/' component={Home} />
      </div>
    </Router>
  );
}

export default App;
