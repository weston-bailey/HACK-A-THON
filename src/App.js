import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home.jsx'
import Events from './Events.js'
import RealEstate from './components/RealEstate.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/realestate">
            <RealEstate />
          </Route>
        </Switch>
      </Router>  
      <Footer />
    </div>
  );
}

export default App;
