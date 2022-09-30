import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    return (
        <div>
            <h1>cart</h1>
            <p>Selected item {cart.length} </p>
        </div>
    );
};

export default Cart;