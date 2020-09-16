import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider";

function CheckoutProduct({title, image, price,rating}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type: "REMOVE_FROM_CART",
            
                title:title,
               

        })
    }
    return (
        <div className ="CheckoutProduct">
            <img className='CheckoutProductImage' src={image} />

            <div className="CheckoutProductInfo" >
                <p className="CheckoutProductTitle">{title}</p>
                <p className="CheckoutProductPrice"><small>Rupee</small><strong>{price}</strong></p>
             <div className="Checkoutrating">
                 {Array(rating).fill().map((_,i)=>(<p>★</p>))}
             </div>
             <button className="btn" onClick={removeFromBasket} >Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
