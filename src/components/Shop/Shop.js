import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json'
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';

const Shop = () => {

    const first = Math.floor(Math.random()* 66);
    const last =first +10;
    // console.log(first, last);

    const first10 = fakeData.slice(first, last);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const addProductHandler = (products) =>{
        const toBeAdded = products.id;
        const sameProduct = cart.find(product => product.id === toBeAdded);
        let count =1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity+1;
            sameProduct.quantity = count;
            const others = cart.filter(product => product.id === toBeAdded);
            newCart = [...others, sameProduct];
        }
        else{
            products.quantity = 1;
            newCart = [...cart, products];
        }
        setCart(newCart);
        addToDb(products.id,count);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                <ul>
                    {products.map(pd => <Product showAddToCart ={true} 
                    key = {pd.id}
                    addProductHandler={addProductHandler} 
                                            product={pd}
                                    
                    ></Product>)}
                </ul>
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;