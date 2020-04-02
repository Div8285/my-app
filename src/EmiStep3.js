import React, { useState } from 'react';

import '../src/EmiCalculator.css';


export default function EmiStep3(props) {
    return (
        <div class="square scrollbar-cyan bordered-cyan">
        <div>

        { props.sw && (<div className="p">
            <p class="blue">Step 3:Choose a payment Duration</p>
            <br/>
            <table id="table">
                <tbody>
                    <tr className="heading">
                        <th>EMI Tenure</th>
                        <th>Bank Interest Rate</th>
                        <th>Bank Interest Amount</th>
                        <th>Monthly Installments</th>
                        <th>Amount Paid to Bank</th>
                    </tr>
                    <tr>
                        <td>24 months</td>
                        <td>15%</td>
                        <td>1064</td>
                        <td>315</td>
                        <td>7563</td>
                    </tr>
                    <tr>
                        <td>6 months</td>
                        <td>13%</td>
                        <td>249</td>
                        <td>1125</td>
                        <td>6748</td>
                    </tr>
                </tbody>
            </table>

        </div>
        )
        }

        </div>
        </div>
    );
}