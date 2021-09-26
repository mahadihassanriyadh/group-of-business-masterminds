import React from 'react';
import './DisplayNamesInCart.css'

const DisplayNamesInCart = (props) => {
    return (
        <div className="display-name">
            <h3>{props.mastermind.name}</h3>
            <img src={props.mastermind.picture} alt="" />
        </div>
    );
};

export default DisplayNamesInCart;