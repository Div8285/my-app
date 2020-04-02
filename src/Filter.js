import React ,{useState} from 'react';
import './Filter.css';
import Collapsible from 'react-collapsible';
import Modal from 'react-bootstrap/Modal';

 


export default function Filter() {
  const [checkedItems, setCheckedItems] = useState(false);
  
  const [showmodal, setShowmodal]= useState('');

  const handleChange = (event) => {
    setCheckedItems(true);
    
  }
  
  return (
    <div class="container">
    
    <div class="col-md-3  desktopView">
      <div className='Filter_by'><p>Filter By</p></div>
    <Collapsible trigger="CATEGORY" >
      <p className='options'><input type= 'checkbox'   onChange={handleChange} /> ANDROID</p>
    </Collapsible>
    <Collapsible trigger="PRICE" open='true'>
      <p><input type= 'checkbox'   onChange={handleChange} /> 0-2234</p>
    </Collapsible>
</div>
<div className= "responsiveView">
<div className="mod">
        <div>
        <input className="Btn" type="button"  value="Filter"onClick={()=> setShowmodal(true)}></input>
        </div>
        <div>
         <Modal className="modl"
         size="md"
         show={showmodal} onHide={()=>setShowmodal(false)}>
       
        <Modal.Body>
           <Collapsible trigger="CATEGORY" open='true'>
          <p className='options'><input type= 'checkbox'   onChange={handleChange} /> ANDROID</p>
          </Collapsible>
          <Collapsible trigger="PRICE" open='true'>
          <p><input type= 'checkbox'   onChange={handleChange} /> 0-2234</p>
          </Collapsible> 
   </Modal.Body>
   </Modal>
   </div>
   </div>
</div>
    </div>
    
  );
}
