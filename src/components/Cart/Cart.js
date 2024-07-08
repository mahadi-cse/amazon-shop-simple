import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    const productPrice = cart.reduce((productPrice, prd) => productPrice + prd.price, 0);

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
            <p>Intems orders : ${cart.length}</p>
            <p>Product price : ${productPrice}</p>
            <p>Shipping : ${shipping}</p>
            <p>Tax + Vat : ${tax}</p>
            <p>Total : ${total}</p>
        </div>
    );
};

export default Cart;