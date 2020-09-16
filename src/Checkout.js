import React from 'react'
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct"
import { useStateValue } from './StateProvider'
function Checkout() {
    const [{basket},dispatch]=useStateValue();

    return (
        <div className="Checkout">
            <div className="CheckoutLeft">
                
            
                <h2 className="CheckoutTitle">Your Shopping Basket</h2>
                {/*Basket item*/}
                {basket.map(item=>(<CheckoutProduct
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                />))}
                

        
            </div>

         <div className="CheckoutRight">
           <Subtotal/>
           </div>    
        
        </div>

    )
}

export default Checkout
