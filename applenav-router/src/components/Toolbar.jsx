import React from "react";
import { Route, Link } from "react-router-dom";
import Mac from "./Mac";
import Ipad from "./IPad";
import Iphone from './Iphone'
import "./Toolbar.css";

function Blank(props) {
  return (
    <div className='blank-toolbar'>
    </div>
  )
}

const Toolbar = props => {
  return (
    <div className="toolbarWrapper">
      <Route exact path="/">
        <Blank />
      </Route>
      <Route path="/mac">
        <Mac />
      </Route>
      <Route path="/ipad">
        <Ipad />
      </Route>
      <Route path="/iphone">
        <Iphone />
      </Route>
    </div>
  );
};

export default Toolbar;