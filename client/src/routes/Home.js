import React from 'react';
import { Link } from "react-router-dom";

function Home(){
    return (
        <div className="container">
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="about">About</Link> |{" "}
                <Link to="/register">Register</Link> |{" "}
                <Link to="/login">Login</Link> |{" "}
                <Link to="/employee">Employee</Link>
            </nav>
        </div>
    );
}
export default Home;