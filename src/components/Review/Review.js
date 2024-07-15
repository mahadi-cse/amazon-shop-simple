import React, { useEffect, useState } from 'react';
import { getShoppingCart, removeFromDb ,deleteShoppingCart } from '../../utilities/fakedb';
import fakedata from '../../fakeData/products.json';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart';
import orderPlaceImage from '../../images/giphy.gif'


const Review = () => {
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState(false);

    const placeOrder= ()=>{
        setCart([]);
        deleteShoppingCart();
        setOrder(true);
    }

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

    let thanks;
    if(order){
        thanks= <img src={orderPlaceImage} alt="" />
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(product => <ReviewItems
                        removeProduct={removeProduct}
                        key={product.id} product={product}></ReviewItems>)
                }
                {
                    thanks
                }
            </div>
            <div className="cart">
                <Cart cart={cart}>
                    <button 
                    onClick={placeOrder}
                    className='main-button'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;