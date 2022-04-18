import { Outlet, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";


import { Container } from '@mui/material';

function App() {
    return (
        <Container>
            <Navigation />
            <Home />
            <Footer />
        </Container>

        );
}

export default App;
