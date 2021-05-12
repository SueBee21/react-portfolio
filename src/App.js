import React from "react";
import home from "./Pages/home";
import about from "./Pages/about";
import contact from "./Pages/contact";
import portfolio from "./Pages/portfolio";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation/index.js';
import "./App.css";

function App ()  {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={home} exact/>
             <Route path="/about" component={about}/>
             <Route path="/contact" component={contact}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }

 
export default App;
