import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props.product);
    const { img, name ,seller, price,stock,id} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='name'> <Link to = {"/product/"+id}>{name}</Link></h4>
                <p>by : {seller}</p>
                <p>${price}</p>
                <p>Stock : {stock}</p>
               { props.showAddToCart &&  <button className='main-button'
                        onClick={() => props.addProductHandler(props.product)}
                > <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>
            
        </div>
    );
};

export default Product;