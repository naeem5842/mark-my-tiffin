import React from "react";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'


function App() {
  return(
    <Router >
      <Routes>
        <Route exact path="/" Component={Signup}></Route>
        <Route exact path="/Login" Component={Login}></Route>
      </Routes>
    </Router>
    
    
  )
}

export default App;
