import React, { useEffect, useState } from 'react';
import { getShoppingCart, removeFromDb } from '../../utilities/fakedb';
import fakedata from '../../fakeData/products.json';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart';


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

    const removeProduct = (id) => {
        const newCart = cart.filter(pd => pd.id !== id);
        setCart(newCart);
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(product => <ReviewItems
                        removeProduct={removeProduct}
                        key={product.id} product={product}></ReviewItems>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;