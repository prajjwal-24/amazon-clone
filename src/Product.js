import React from 'react'
import"./Product.css";
import {useStateValue} from "./StateProvider";

function Product({title, image, price,rating}) {
    const [{basket}, dispatch] = useStateValue();
   
    
        

    const ADDTOCART = ( ) => {
        dispatch({
            type: "ADD_TO_CART",
            item:{
                title:title,
                image:image,
                price:price,
                rating:rating
            }

        })

    }
    return (

        <div className="product">
            <div className="productInfo">
                <p>{title}</p>
                <p className="productPrice">
                    <small>
                    Rupee
                    </small>
                    <strong>{price}</strong>
                </p>
                <div className="productRating">
                    {Array(rating).fill().map((_,i)=>(
                        <p>☆</p>
                   

                    ))}
                    
                </div>
            </div>
            <img src={image}></img>
            <button onClick= {ADDTOCART} >Add to Cart</button>
        </div>
    )
}

export default Product
