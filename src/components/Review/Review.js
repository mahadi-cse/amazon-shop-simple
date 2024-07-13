import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import fakedata from '../../fakeData/products.json';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savecart = getShoppingCart();
        const productID = Object.keys(savecart);

        const cartProducts = productID.map(pdID => {
            const product = fakedata.find(product => product.id === pdID);
            product.quantity = savecart[pdID];
            return product;
        });
        setCart(cartProducts);
    }, [])
    return (
        <div>
            <h1>Cart Items {cart.length}</h1>
            {
                cart.map(product => <ReviewItems key ={product.id} product={product}></ReviewItems>)
            }
        </div>
    );
};

export default Review;