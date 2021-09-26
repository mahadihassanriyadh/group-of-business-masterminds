import React from 'react';
import './Mastermind.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'

const Mastermind = (props) => {
    const { name, age, picture, gender, wealth, company } = props.mastermind;
    return (
        <div className="mastermind-section">
            {/* ---------------------------
            ----- Masterminds' Images -----
            ---------------------------- */}
            <img src={picture} alt="" />


            {/* ---------------------------
            ----- Masterminds' Info -----
            ---------------------------- */}
            <h3>Name: {name}</h3>
            <p>Company: {company}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>Wealth: ${wealth} B</p>
            <button
                onClick={()=>props.handleAddToBusiness(props.mastermind)}
            ><FontAwesomeIcon icon={faUserTie} className="icon" />Add to Business</button>
        </div>
    );
};

export default Mastermind;