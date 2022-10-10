import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar'>
            <div>
                <h1 className='title'>Quiz Crackers</h1>
            </div>
            <div className='link-container'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/statistics'>Statistics</Link>
                <Link className='link' to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;