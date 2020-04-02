import React, { useState } from 'react';
import Data from './assets/json/dropdown.json';
import {Link} from 'react-router-dom';
import './search.css'

export default function Search() {
    const [value1, setValue] = useState('');
    const [searchList, setSearchList] = useState([]);
    const [searched, setSearched] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    function onChange(e) {
        setValue(e.target.value);
        searchFilterFunction(e.target.value)
    }
    function crossClick(){
      setValue('')
      searchFilterFunction()
    }
    function searchFilterFunction(text) {
        if (!text) {
            setSearchList([])
        }
        else {
            const results = Data.map((b => { return (b.value) })).filter(a =>
                a.toLowerCase().includes(text.toLowerCase())
            );
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
                type="text"
                onClear={() => {
                    setSearched(false);
                    setShowSuggestions(false);
                }}
            />
            <button className="close-icon glyphicon"  onClick= {crossClick}>&#10006;</button>
            
            {searched && showSuggestions && (
                <div>
                    <ul>
                        {searchList.map(item => (
                            <li className="searchDropdown" onClick={crossClick}>
                                <div className="productHighlight">
                                    {item}                               
                                <img src="https://www.croma.com/medias/sys_master/images/images/hd5/hea/8807756169246/mobile.png" alt="dfg" className="img_responsive" />
                                </div>
                            </li>      
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
