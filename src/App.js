import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import Weather from './components/Weather.jsx'

function App() {
  return (
    <div className="App">

      <Weather />
    </div>
  );
}

export default App;
