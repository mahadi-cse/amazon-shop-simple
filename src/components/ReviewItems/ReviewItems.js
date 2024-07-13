import React from 'react';

const ReviewItems = (props) => {
    const {name, description, quantity} = props.product;
    const reviewStyle = {
        borderBottom:'1px solid lightgray',
        marginLeft:'200px',
        marginBottom: '5px',
        paddingBottom: '5px'
    }
    return (
        <div style={reviewStyle}>
            <h4 className='name'>{name}</h4>
            <p>Quantity : {quantity}</p>
            <br />
            <button className='main-button'>Remove</button>
        </div>
    );
};

export default ReviewItems;