import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home.jsx'
// import Events from './components/Events.jsx'
import RealEstate from './components/RealEstate.jsx'




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
            {/* <Events /> */}
          </Route>
          <Route path="/realestate">
            <RealEstate />
          </Route>
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
