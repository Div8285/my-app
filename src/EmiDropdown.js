import React from "react";
import './EmiCalculator.css';
import items from './assets/json/dropdown.json';
function EmiDropdown(props) {
    return (
        <div>
            <div class="dropdown">
              

                <select class="dropdownStyle" onChange={() => props.showMegaMenu(true)}>
                    <option value="" >Select a Bank...</option>
                    {items.map(item => (
                                    <option
                                    key={item.id}
                                    value={item.title}
                                    >
                                    {item.title}
                                    </option>
                                ))}
                </select>
               
            </div>
        </div>
    )
}

export default EmiDropdown;