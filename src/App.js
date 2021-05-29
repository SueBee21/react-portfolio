import React from "react";
import home from "./Pages/home";
import contact from "./Pages/contact";
import portfolio from "./Pages/portfolio";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import Navigation from './Navigation/index.js';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App ()  {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={home} exact/>
             <Route path="/contact" component={contact}/>
             <Route path="/portfolio" component={portfolio}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }

 
export default App;
