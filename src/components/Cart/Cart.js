import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity;

    }
    // useful for only one value
    // const totalPrice = cart.reduce((accumulator, currentValue) => {
    //     return (accumulator + currentValue.price);
    // }, 0);
    const tax = (totalPrice * 0.1).toFixed(0);
    const grandTotal = totalPrice + totalShipping + parseInt(tax)

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected item {quantity} </p>
            <p>Total Price: ${totalPrice} </p>
            <p>Total Shipping : ${totalShipping} </p>
            <p>Tax : ${tax} </p>
            <p>Grand Total: <strong>${grandTotal}</strong> </p>

        </div>
    );
};

export default Cart;