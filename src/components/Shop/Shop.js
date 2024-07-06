import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json'
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] =useState(first10);
    console.log(first10);
    return (
        <div>
            <ul>
                {products.map(product => <li> {product.name} </li>)}
            </ul>
        </div>
    );
};

export default Shop;