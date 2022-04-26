import React from "react";
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "../containers/NavbarElements";
import {Outlet} from "react-router-dom";

function Navbar() {
    return (
        <div>
            <Nav>
                <NavLink to="/home">Home</NavLink>

                <Bars />
                <NavMenu>
                    <NavLink to="/register" activeStyle>Register</NavLink>
                    <NavLink to="/login" activeStyle>Log in</NavLink>
                    <NavLink to="/search-cars" activeStyle>Search Cars</NavLink>
                    <NavLink to="/test" activeStyle>TEST ONLY</NavLink>
                    <NavLink to="/user-profile" activeStyle>user profile testing</NavLink>
                </NavMenu>

                <NavBtn>
                    {/*<NavBtnLink to="/test">Test</NavBtnLink>*/}
                    <NavBtnLink to="/employee" activeStyle>Employee</NavBtnLink>
                </NavBtn>
            </Nav>
            <Outlet />

        </div>
    );
}

export default Navbar;
