import React from 'react';
import {NavLink} from 'react-router-dom';

// This component ins the navigation bar
export const Navbar = () => {
    return <nav>
        <div className="logo">
            <NavLink exact to='/'><i className="lni lni-wallet"></i>Curriculum.io</NavLink>
        </div>
        <NavLink to='/create' />
    </nav>
}
