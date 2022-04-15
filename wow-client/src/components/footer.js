import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../imgs/logo_dark.png';

// do i need a logo at the footer???

function Footer() {
    return (
        <section className="about-section footer">
            <h2 className="about-section__primary">
                <Link className="nav-link white" to="/">
                    {/*direct to homepage ---necessary?*/}
                    <img className="logo" src={logo} alt="logo" />
                </Link>
            </h2>
            <p>
                World On Wheels
                {' '}
                <br />
            </p>
            <p>
                Copyright® {new Date().getFullYear()}
            </p>
        </section>
    );
}

export default Footer;
