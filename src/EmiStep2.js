import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './EmiCalculator.css';
import EmiStep3 from './EmiStep3';


export default function EmiStep2(props) {
    const [isShown, setIsShown] = useState(false);

    const display = () => {
     setIsShown(true);
    }

    return (
        <div>
            <p class="blueColor">Step 2: Enter Amount</p>
            
            <input type="text" value="20499" />
            <Button id="calcbtn" type="button" onClick={display} >Calculate</Button>
            <EmiStep3 sw={isShown} />
        </div>
    );
}