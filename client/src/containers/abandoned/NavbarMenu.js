import React, { useState } from 'react';
import { NavbarButton } from "./NavbarButton";
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';

function NavbarMenu() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
                    WOW
                    <i class='fab fa-firstdraft' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}>
                        <Link
                            to='/user-profile'
                            className='nav-links'
                            onClick={closeMobileMenu}>
                            Customers
                            <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>

                    <li className='nav-item'>
                        <Link
                            to='/search-cars'
                            className='nav-links'
                            onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>


                    <li className='nav-item'>
                        <Link
                            to='/employee'
                            className='nav-links'
                            onClick={closeMobileMenu}>
                            Employee
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link
                            to='/test'
                            className='nav-links'
                            onClick={closeMobileMenu}>
                            TEST ONLY
                        </Link>
                    </li>

                    <li>
                        <Link
                            to='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <NavbarButton />
            </nav>
        </>
    );
}

export default NavbarMenu;
