import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
import store from "./store";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
//import EventDetail from "./components/EventDetail/EventDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Card from './Card';
import Badge from './Badge';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
       
          <Switch>
            <Route path="/" exact component={Badge}/>
            <Route path="/Card" exact component={Card}/>
            
            <Route component={PageNotFound}/> 
        </Switch>
       
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
