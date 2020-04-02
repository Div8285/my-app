import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './EmiCalculator.css';
import EmiDropdown from './EmiDropdown';
import EmiStep2 from './EmiStep2';



export default function EmiModal(props) {
  let [show, setShow] = useState(false)
 
  return (
    <div class="square scrollbar-cyan bordered-cyan">
    <Modal 
   
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
       backdrop="static"
       smooth-scroll
       
    > 
      <Modal.Header id="header">
        <Modal.Title id="contained-modal-title-vcenter">
          EMI CALCULATION
          </Modal.Title>
        <Button id="Colorbtn" onClick={()=>{props.onHide();setShow(false)}}>Close</Button>
      </Modal.Header>
      <Modal.Body>

        <div class="col-md-12 col-sm-12 col-xs-12">
          <p>By choosing EMI, instead of paying all at once, you can pay in installments.</p><br />
          <p class="blueColor">Pay In Equal Easy Monthly Installments Using Credit Card</p>
          <p class="blueColor">Step 1: Choose Your Bank</p>
          
        
          <EmiDropdown showMegaMenu={setShow} show={show}/>
        

          <div className="row">
            {!show ? <div></div>:<div class="container-fluid p-0 m-0 absolute" > <EmiStep2 /></div>}
          </div>
 


          <div className="row">
          </div>
          <br />
          <p class="borderStyle">
            Enjoy 0% Processing Fees!<br />
            *Calculated monthly on reducing balance. Taxes applicable on interest paid to the Bank.
            </p>
          <p class="boldStyle">To avail this EMI facility kindly close this window, add the product to your cart and select the EMI option at the time of checkout.</p>
        </div>
      </Modal.Body>
     
    </Modal>
    </div>
  );
}

