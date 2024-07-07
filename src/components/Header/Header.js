import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <div>
            <img src={logo} alt=""  className='logo'/>
            <nav>
                <a href="shop">Shop</a>
                <a href="order">Order</a>
                <a href="manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;