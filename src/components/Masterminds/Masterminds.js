import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Mastermind from '../Mastermind/Mastermind';
import './Masterminds.css'

const Masterminds = () => {
    const [masterminds, setMasterminds] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./masterminds.JSON')
            .then(res => res.json())
            .then(data => setMasterminds(data))
    }, [])
    const handleAddToBusiness = (mastermind) => {
        const exists = cart.find(data => data.key === mastermind.key);
        if (!exists) {
            const newCart = [...cart, mastermind];
            setCart(newCart);
        }
    }
    return (
        <div className="main-section">

            <div className="masterminds-section">
                {
                    masterminds.map(mastermind => <Mastermind
                        key={mastermind.key}
                        mastermind={mastermind}
                        handleAddToBusiness={handleAddToBusiness}
                    ></Mastermind>)
                }
            </div>
            
            {/*----------- 
            -----Cart-----
            --------------*/}
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Masterminds;