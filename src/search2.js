// import React ,{ useState, useEffect } from 'react';
// import Data from './assets/json/dropdown.json';


// const people = [
//     "Siri",
//     "Alexa",
//     "Google",
//     "Facebook cat",
//     "Twitter",
//     "Linkedin",
//     "Sinkedin"
//   ];

// export default function Search(){

// const [searchTerm, setSearchTerm] =useState("");
// const [initialValue,setInitialValue] = useState([]);
// const [searchResults, setSearchResults] = useState([]);
// const [searched, setSearched] = useState(false);
// const [showSuggestions, setShowSuggestions] = useState(false);

// const handleChange = event => {
//    setSearchTerm(event.target.value);
//    setShowSuggestions(true)
//    setSearched(true)
//  };

//  console.log(searchResults)
//  console.log(initialValue)
//  console.log(searchTerm)
 


// useEffect(() => {
//    const results = people.filter(person =>
//      person.toLowerCase().includes(searchTerm.toLowerCase())
//    );
//    setSearchResults(results);
//  }, [searchTerm]);
//  return (
//     <div className="App">
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchTerm}
//         onChange={handleChange}
//         onClear={() => {
//             setSearched(false);
//             setShowSuggestions(false);
//             }}
//       />
//       {searched && showSuggestions && (
//       <ul>
//          {searchResults.map(item => (
//           <li>{item}</li>
//         ))}
//       </ul>
//       )}
//     </div>
//   );
// }

import React, { useState } from 'react';
import Data from '../assets/json/search.json';
import {Link} from 'react-router-dom';
import '../styles/search.css'

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
            <button className="close-icon glyphicon glyphicon-remove cross" onClick= {crossClick}></button>
            {searched && showSuggestions && (
                <div>
                    <ul>
                        {searchList.map(item => (
                            <li className="searchDropdown">
                                <div className="productHighlight">
                                <Link to="/product/1" className="productList">
                                    {item}
                                </Link>
                                <img src="https://www.croma.com/medias/sys_master/images/images/hd5/hea/8807756169246/mobile.png" alt="dfg" className="img-responsive" />
                                </div>
                            </li>      
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
