// import logo from './logo.svg';
// import './App.css';
// import React from "react";
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;


import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

//import all the components we want to render in our page.
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from "./pages/Register";

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
