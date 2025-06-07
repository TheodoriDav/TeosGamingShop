import React ,{useContext,useEffect}from 'react';
import {ShopContext} from '../../context/shop-context';
import "./cart.css";



export const CartItem = (props) => {
   
   const {id,productName,price , image ,description} = props.data;
   const {cartItems,addToCart,removeFromCart,updateCartItemCount} = useContext(ShopContext);
    
  useEffect(() => {
     // gia na blepw sto konsole tis allages 
     if (cartItems[id] > 0) {
       console.log(`${productName} quantity changed to ${cartItems[id]} `);
     }
   }, [cartItems[id]]);
   
  
 
   return (
        <div className="cartItem"> <img src={image}/> 
        
        <div className="description"> 
            
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <div className=" countHandler">
             <button onClick={()=>removeFromCart(id)} className="addToCartButtonCart-item"> - </button>
             <input className="inputCartItem" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value),id)}/>
             <button onClick={()=>addToCart(id)} className="addToCartButtonCart-item"> + </button>
            </div>
            </div>
        
        </div>
    )
};