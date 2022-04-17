import { Outlet, Link } from "react-router-dom";
import {Container} from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";

function App() {
    return (<Navigation />);
    // return (
    //     <Container>
    //         {/*<Header />*/}
    //         <Navigation />
    //         <Home />
    //         <Footer />
    //     </Container>
    //     );
}

export default App;
