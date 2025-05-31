import React ,{useContext}from 'react';
import {products} from '../../productsData';
import {ShopContext} from '../../context/shop-context';
import {CartItem} from './cart-item';
import './cart.css';
import { useNavigate } from 'react-router-dom';




export const Cart = () => {
    const {cartItems,getCartTotalAmount} = useContext(ShopContext);
    const totalAmount = getCartTotalAmount();

    const navigate = useNavigate();
    
    return (
        <div className="cart">
          <div><h1 id="cartTitle">Your Cart Selection </h1></div>  
        <div className="cartItems">

            {products.map((product) => {
                if (cartItems[product.id] !== 0){
                    return <CartItem data ={product} />
                }
            })}
            
        </div>
        
        <div className="checkout">
            {totalAmount > 0 ?  <p>Total Amount: ${totalAmount}</p> : <h2>Your cart is empty</h2>}
           
        <button onClick={()=>navigate("/")}> Continue shopping </button>
        <button>Checkout</button>
        </div>
        </div>

        
    );
}
