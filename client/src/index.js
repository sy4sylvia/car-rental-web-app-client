import { render } from "react-dom";
import {BrowserRouter, Routes, Route,} from "react-router-dom";

import './index.css';

import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
//???

import App from "./App";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Test from "./routes/Test";
import Employee from "./routes/Employee";
import SearchCars from "./routes/SearchCars";
import Display from "./routes/Display";
import Checkout from "./routes/Checkout";
import Complete from "./routes/Complete";
import Review from "./routes/Review";
import CarManagement from "./routes/CarManagement";
import UserProfile from "./routes/UserProfile";


const rootElement = document.getElementById("root");
render(<BrowserRouter>

        <Routes>


            <Route path="/" element={<App />}>
                <Route path="home" element={<Home />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />

                <Route path="search-cars" element={<SearchCars />} />
                <Route path="display" element={<Display />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="review" element={<Review />} />
                <Route path="complete" element={<Complete />} />

                <Route path="user-profile" element={<UserProfile />} />

                <Route path="employee" element={<Employee />} />
                <Route path="car-management" element={<CarManagement />} />

                <Route path="records" element={<Records />} />

            </Route>

            <Route path="test" element={<Test />} />
            {/*outside route - no navbar, header, footer*/}

        </Routes>
    </BrowserRouter>,
     rootElement);