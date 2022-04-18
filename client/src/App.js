import { Outlet, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import { Container } from '@mui/material';

function App() {
    return (
        <Container>
            <Navigation />
            <Footer />
        </Container>

        );
}

export default App;
