import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

//import all the components we want to render in our page.
import Home from "./components/home";
import Login from './components/login';
import Register from "./components/register";

const App = () => (
    <Router>
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/login' element = {<Login />} />
            <Route path = '/register' element = {<Register />} />
        </Routes>
    </Router>
);
export default App;
