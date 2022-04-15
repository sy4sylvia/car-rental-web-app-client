import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

/*change to session instead of div??*/
// ✅

function Header() {
    return (
        <header className = "header">
            <Navigation />
            {/*change to session instead of div??*/}
            <div className = "header-content">
                <h1 className = "header-content-title">Explore the world on wheels with WOW</h1>
                <p className = "header-content-description">
                    Want to travel with a fancy and comfortable car?
                    Come explore all the options here at World On Wheels!
                </p>
                <p><Link className = "btn btn-light" to = "/register">Register</Link></p>
                {/*click button and direct to the register webpage*/}
            </div>

        </header>
    );
}
export default Header;
