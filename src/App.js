import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./Css/index.css"
import "./Css/responsive.css"
import Nav from "./Components/Nav";
import Home from './Components/Home';
import About from "./Components/About";
import Technology from "./Components/Technology/Technology"

const App = ()=>{
  return (
    <>
    <Nav/>
    <Home/>
    <About/>
    <Technology/>
    </>
  )
}

export default App;
