import React ,{useContext}from 'react';
import {ShopContext} from '../../context/shop-context';
import "./cart.css";



export const CartItem = (props) => {
   
   const {id,productName,price , image ,description} = props.data;
   const {cartItems,addToCart,removeFromCart,updateCartItemCount} = useContext(ShopContext);
   
 
   return (
        <div className="cartItem"> <img src={image}/> 
        
        <div className="description"> 
            
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <div className=" countHandler">
             <button onClick={()=>removeFromCart(id)} className="addToCartButton"> - </button>
             <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value),id)}/>
             <button onClick={()=>addToCart(id)} className="addToCartButton"> + </button>
            </div>
            </div>
        
        </div>
    )
};