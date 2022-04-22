import React from 'react';
import { useSelector } from 'react-redux';
import {Link, Outlet} from 'react-router-dom';


function Navigation() {
    return (
        <div>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/">Home</Link> |{" "}
                <Link to="/register">Register</Link> |{" "}
                <Link to="/login">Log in</Link> |{" "}
                <Link to="/employee">Employee</Link> |{" "}
                <Link to="/search-cars">Search Cars</Link> |{" "}
                <Link to="/test">Test</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default Navigation;