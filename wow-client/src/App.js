import './App.css';
// import {BrowserRouter, Route, Routes} from "react-router-dom";


//import all the components we want to render in our page.
import Login from './components/login';
import Register from "./components/register";

import React, {useState} from 'react';

function App() {
  // configure route paths
  return (
      // <h1>Test on App.js </h1>
      <Routes>
          {/*switch replaced by routes*/}
        <Route path = '/' element={App}/>
        <Route path = '/Login' element={Login}/>
        <Route path = '/Register' element={Register}/>
      </Routes>

  );



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
}

export default App;
