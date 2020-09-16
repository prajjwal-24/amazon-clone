import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue } from "./StateProvider"
import { getCartTotal } from './reducer';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="Subtotal">
           <CurrencyFormat
           renderText={(value)=>(
               <>
               <p>Subtotal({basket.length}) :<strong>{value}</strong></p>
               <small className="SubtotalGift">`<input type="checkbox"/> This Order Contains a Gift</small>
               </>

           )} 
           decimalScale={2}
           value={getCartTotal(basket)}
           displayType={"text"}
           thousandSeperator={true}
           prefix={"Rupee"}
           />
           <button className="btn1">Proceed to Checkout</button>

        </div>
    )
}

export default Subtotal
