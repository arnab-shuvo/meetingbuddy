import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import RouteList from './Routes'
function App() {
  return (
    <BrowserRouter>
      <RouteList />
    </BrowserRouter>
  );
}

export default App;
