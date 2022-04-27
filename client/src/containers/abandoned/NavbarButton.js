import React from 'react';
import './NavbarButton.css';
import { Link } from 'react-router-dom';

export function NavbarButton() {
    return (
        <Link to='sign-up'>
            <button className='btn'>Sign Up</button>
        </Link>
    );
}
