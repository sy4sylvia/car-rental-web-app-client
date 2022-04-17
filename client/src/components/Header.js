import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from "./Navigation";
import {Button} from "react-bootstrap";

function Header() {
    return (
        <header className = "header">
            <Navigation />
            <div className = "header-content">
                <h1 className = "header-content-title">Explore the world on wheels with WOW</h1>
                <p className = "header-content-description">
                    Want to travel with a fancy and comfortable car?
                    <br />
                    <br />
                    Come explore all the affordable options here at World On Wheels!
                </p>
                <p><Link className = "btn btn-light" to = "./register">Register</Link></p>
                <Button href="#">Link</Button>
                {/*click button and redirect to the register webpage*/}
            </div>

        </header>
    );
}
export default Header;
