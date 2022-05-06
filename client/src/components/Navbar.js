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

                {/* <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}>
                        <NavLink
                            to='/user-profile'
                            className='nav-links'
                            onClick={closeMobileMenu}>
                            Customers
                            <i className='fas fa-caret-down' />
                        </NavLink>
                        {dropdown && <Dropdown />}
                    </li> */}


                    <NavLink to="/register" activeStyle>Register</NavLink>
                    <NavLink to="/login" activeStyle>Log in</NavLink>
                    <NavLink to="/search-cars" activeStyle>Search Cars</NavLink>
                    <NavLink to="/test" activeStyle>TEST ONLY</NavLink>
                    <NavLink to="/user-profile" activeStyle>user profile testing</NavLink>
                </NavMenu>

                <NavBtn>
                    {/*<NavBtnLink to="/test">Test</NavBtnLink>*/}
                    <NavBtnLink to="/employee-login" activeStyle>Employee</NavBtnLink>
                </NavBtn>
            </Nav>
            <Outlet />

        </div>
    );
}

export default Navbar;
