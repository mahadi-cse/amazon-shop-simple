import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name ,seller, price,stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='name'>{name}</h4>
                <p>by : {seller}</p>
                <p>${price}</p>
                <p>Stock : {stock}</p>
                <button className='main-button'
                        onClick={() => props.addProductHandler(props.product)}
                > <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;