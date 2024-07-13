import React from 'react';
import { useParams } from 'react-router-dom';
import fakedata from '../../fakeData/products.json'
import Product from '../Product/Product';

const ProductDetails = () => {
    const {id} =useParams();
    const product = fakedata.find(product=> product.id === id);

    return (
        <div>
            <h1> {product.name} Detail coming soon</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;