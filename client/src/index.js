import { render } from "react-dom";
import {BrowserRouter, Routes, Route,} from "react-router-dom";

import './index.css';

import App from "./App";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Test from "./routes/Test";
import Employee from "./routes/Employee";
import SearchCars from "./routes/SearchCars";
import Display from "./routes/Display";
import Order from "./routes/Order";

const rootElement = document.getElementById("root");
render(<BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="home" element={<Home />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="employee" element={<Employee />} />
                <Route path="search-cars" element={<SearchCars />} />
                <Route path="display" element={<Display />} />
                <Route path="order" element={<Order />} />
                <Route path="test" element={<Test />} />
            </Route>



        </Routes>
    </BrowserRouter>,
     rootElement);