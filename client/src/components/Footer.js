import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className="about-section footer">
            <h2 className="about-section__primary">
                <Link className="nav-link white" to="/">
                    {/*direct to homepage ---necessary?*/}
                    {/*<img className="logo" src={logo} alt="logo not assigned right now" />*/}
                </Link>
            </h2>
            <p>
                <strong>World On Wheels</strong>
                {' '}
                Copyright® {new Date().getFullYear()}
            </p>

        </section>
    );
}

export default Footer;
