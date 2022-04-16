import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import './index.css';
import Register from "./routes/Register";
import Login from "./routes/Login";

const rootElement = document.getElementById("root");
render(<BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Route>
        </Routes>
    </BrowserRouter>,
     rootElement);