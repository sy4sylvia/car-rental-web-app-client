import React, { useState } from 'react';
// import { MenuItems } from './MenuItems';
// import '../abandoned/Dropdown.css';
import "/Users/siyaguo/WebstormProjects/full-stack/client/src/containers/abandoned/Dropdown.css";
import { Link } from 'react-router-dom';

function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const menuItems = [
        {
            title: 'Register',
            path: '/register',
            cName: 'dropdown-link'
        },
        {
            title: 'Log in',
            path: '/login',
            cName: 'dropdown-link'
        }
    ];

    
    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                className={item.cName}
                                to={item.path}
                                onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Dropdown;
