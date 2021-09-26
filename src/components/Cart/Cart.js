import React from 'react';
import DisplayNamesInCart from '../DisplayNamesInCart/DisplayNamesInCart';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart);
    const { cart } = props;
    let totalNetWorth = 0;
    for (const mastermind of cart) {
        totalNetWorth = totalNetWorth + mastermind.wealth;
    }
    return (
        <div className="cart-section">
            <h2>Businessmen Selection</h2>
            <p><span>Total Businessmen Selected:</span> {cart.length}</p>
            <p><span>Total Net Worth:</span> ${totalNetWorth.toFixed(2)} B</p>
            <h5>Selected Businessmen:</h5>
            <div>
                {
                    cart.map(mastermind => <DisplayNamesInCart mastermind={mastermind}></DisplayNamesInCart>)
                }
            </div>
        </div>
    );
};

export default Cart;