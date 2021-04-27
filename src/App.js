import React from "react";
import home from "./Pages/home";
import about from "./Pages/about";
import contact from "./Pages/contact";
import portfolio from "./Pages/portfolio";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Router>
      <Route exact path="/" component={home} />
          <Route exact path="/contact" component={contact} />
          <Route exact path="/portfolio" component={portfolio} />
          <Route exact path="/about" component={about} /> 
      </Router>


    </div>

  );
}

export default App;


