import React from "react";
import Navi from './components/Navi'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import "./App.css";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <div className="App">
      <Route path='/'>
        <Navi />
      </Route>
    
      <Route>
        <Toolbar />
      </Route>
    </div>
  )
}

export default App;