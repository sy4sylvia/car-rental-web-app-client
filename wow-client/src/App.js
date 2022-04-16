import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

//import all the components we want to render in our page.
import Home from "./components/home";
import Login from './components/login';
import Register from "./components/register";

function App() {
  // configure route paths
  return (
      <Router>
          <Layout>
              <Routes>
                  {/*switch replaced by routes*/}
                  <Route path = '/' element={<Home/>}/>
                  <Route path = '/Login' element={<Login/>}/>
                  <Route path = '/Register' element={<Register/>}/>
              </Routes>
          </Layout>
      </Router>
  );

  //originally from React tutorial

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
