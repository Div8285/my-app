import React, { useState } from 'react';
import Data from './assets/json/dropdown.json';
import {Link} from 'react-router-dom';
import './search.css'

export default function Search() {
    const [value1, setValue] = useState('');
    const [searchList, setSearchList] = useState([]);
    const [searched, setSearched] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [showCross, setShowCross] = useState(false);

    function onChange(e) {
        setValue(e.target.value);
        searchFilterFunction(e.target.value)
        
    }
    function onClick(){
        setShowCross(true)
    }
    function crossClick(){
      setValue('')
      setShowCross(false)
    }
    function searchFilterFunction(text) {
        if (!text) {
            setSearchList([])
        }
        else {
           
                const results = Data.filter(function(item){
               return item.value.toLowerCase().includes(text.toLowerCase())
            }).map(function({id, key, value, image, alt}){
                return {id, key, value,image};
            });
            console.log(results);

             
            setSearchList(results);
            setSearched(true);
            setShowSuggestions(true);
        }
    }
    return (
        <div >
          
            <input
                className="searchbox"
                value={value1}
                onChange={onChange}
                onClick = {onClick}
                type="text"
                onClear={() => {
                    setSearched(false);
                    setShowSuggestions(false);
                }}
            />
            
            {showCross && <button className="close-icon glyphicon"  onClick= {crossClick}>&#10006;</button> }
            
            {searched && showSuggestions && (
                <div>
                    <ul>
                        {searchList.map(item => (
                            <li className="searchDropdown" onClick={crossClick}>
                                <div className="productHighlight">
                                    {item.value}                               
                                <img src={item.image} alt={item.alt} className="img_responsive" />
                                </div>
                            </li>      
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
