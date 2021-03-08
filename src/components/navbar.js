import React, { useState } from 'react';
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isActive, setisActive] = useState(false);
    return (
        <nav className='navbar is-black' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <Link to='/' className='navbar-item'>
                    <img
                        src={Logo}
                        alt='Logo'
                    />
                </Link>
                <a
                    onClick={() => {
                        setisActive(!isActive)
                    }}
                    role='button'
                    className={`navbar-burger is-black burger ${isActive ? 'is-active' : ''}`}
                    aria-label='menu'
                    aria-expanded='false'
                    data-target='navbarBasicExample'
                >
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </a>
            </div>
            <div id='navbarBasicExample' className={`has-background-black navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className='navbar-end '>
                    <div className='navbar-item'>
                        <Link to='/add'><a style={{ color: 'white' }}>Add Crypto</a></Link>
                    </div>
                    <div className='navbar-item'>
                        <Link to='#'><a style={{ color: 'white' }}>Reload</a></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;