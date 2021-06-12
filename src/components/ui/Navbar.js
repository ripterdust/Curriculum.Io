import React from 'react';
import {NavLink} from 'react-router-dom';
import { NavbarOptions } from './NavbarOptions';



// This component ins the navigation bar
export const Navbar = () => {
    return <nav>
        <NavLink exact to='/' className="mainLink">
            <i className="wallet lni lni-wallet"></i>
        </NavLink>
        <div className="content">
            <NavLink exact to='/' className="home" activeClassName="navActive">Home</NavLink>
            {/* Dropdown */}
            <div className="dropdown">
                <NavLink exact to='/templates' className="menu" activeClassName="navActive">Curriculum</NavLink>
                <div className="dropdown-content">
                    <NavbarOptions />
                </div>
            </div>
        </div>
    </nav>
}
