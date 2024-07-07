import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json'
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {

    const first = Math.floor(Math.random()* 66);
    const last =first +10;
    console.log(first, last);

    const first10 = fakeData.slice(first, last);
    const [products, setProducts] = useState(first10);
   
    const addProductHandler = (props) =>{
        console.log(props);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                <ul>
                    {products.map(pd => <Product addProductHandler={addProductHandler} 
                                            product={pd}
                                    
                    ></Product>)}
                </ul>
            </div>
            <div className="cart-container">
                <h2>Shop cart</h2>
            </div>
        </div>
    );
};

export default Shop;