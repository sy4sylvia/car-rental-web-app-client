import { render } from "react-dom";
import {BrowserRouter, Routes, Route,} from "react-router-dom";

import './index.css';

import App from "./App";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Test from "./routes/Test";

const rootElement = document.getElementById("root");
render(<BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="home" element={<Home />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Route>
            <Route path="test" element={<Test />} />
        </Routes>
    </BrowserRouter>,
     rootElement);