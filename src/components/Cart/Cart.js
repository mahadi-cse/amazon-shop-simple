import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';
const Cart = (props) => {
    const cart = props.cart;
    const productPrice = cart.reduce((productPrice, prd) => productPrice + prd.price*prd.quantity, 0);

    let shipping = 0;
    if (productPrice > 35) {
        shipping = 0;
    }
    else if (productPrice > 15) {
        shipping = 5.99;
    }
    else if (productPrice > 0) {
        shipping = 12.99;
    }

    const tax = productPrice / 10;

    const total = Math.round(productPrice + shipping + tax);
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items orders : {cart.length}</p>
            <p>Product price : ${productPrice}</p>
            <p>Shipping : ${shipping}</p>
            <p>Tax + Vat : ${tax}</p>
            <p>Total : ${total}</p>
            <Link to={"/review"}> <button className='main-button'>Review order</button> </Link>
        </div>
    );
};

export default Cart;