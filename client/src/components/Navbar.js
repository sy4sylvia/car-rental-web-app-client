import React from "react";
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "../containers/NavbarElements";
import {Link, Outlet} from "react-router-dom";

function Navbar() {
    return (
        <div>
            <Nav>
                <NavLink to="/home">WOW</NavLink>

                <Bars />
                <NavMenu>

                    <NavLink to="/register" activeStyle>Register</NavLink>
                    <NavLink to="/login" activeStyle>Log in</NavLink>
                    <NavLink to="/search-cars" activeStyle>Search Cars</NavLink>
                    <NavLink to="/user-profile" activeStyle>Customer Profile</NavLink>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to="/user-profile" activeStyle>Customer Profile</NavBtnLink>
                    <h4 />
                    <NavBtnLink to="/employee-login" activeStyle>Employee Profile</NavBtnLink>
                </NavBtn>
            </Nav>
            <Outlet />

        </div>
    );
}

export default Navbar;
