import React from "react";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard  from "./components/Dashboard/Dashboard";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'


function App() {
  return(
    <Router >
      <Routes>
        <Route exact path="/" Component={Signup}></Route>
        <Route exact path="/Login" Component={Login}></Route>
        <Route exact path="/dashboard" Component={Dashboard}></Route>
      </Routes>
    </Router>
    
    
  )
}

export default App;
