import React ,{useContext} from 'react';
import {ShopContext} from '../../context/shop-context';


export const Product = (props)=> {
    
const {id,productName,price , image ,description} = props.data;
    
    
    //giana pataw to koumpi na prosthesw sto kalathi
const {addToCart,cartItems} = useContext(ShopContext);
    
    //gia na vlepw posa einai sto kalathi 
const cartItemAmount = cartItems[id];
    return (
        <div className="product">
            <img src={image}/> 
            <div className="description">
                <p> <b>{productName}</b></p>
                <p>{description}</p>
                <p>Price: ${price}</p>
            </div>
        <button className="addToCartButton" onClick={() => addToCart(id)}>
            Add To cart {cartItemAmount > 0 && <>({cartItemAmount})</>
            }
        </button>
        </div>
        
    );
}