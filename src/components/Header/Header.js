import React from 'react';
import logo from '../../images/Logo.svg';
import logo2 from '../../images/logo.jpg';
import './Header.css'
const Header = () => {
    return (
        <div>
            <img src={logo} alt=""  className='logo'/>
            <nav>
                <a href="shop">Shop</a>
                <a href="review">Order Review</a>
                <a href="manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;