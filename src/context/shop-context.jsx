import React,{createContext,useState} from 'react';
import { products } from '../productsData';

export const ShopContext = createContext(null);


const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= products.length +1; i++) {
    cart[i] = 0; 
  }
  return cart;
};

export const ShopContextProvider = (props) => { 
const [cartItems,setCartItems] = useState(getDefaultCart());

const getCartTotalAmount = () => {
  return Object.keys(cartItems).reduce((total, key) => {
    const item = products.find(product => product.id === Number(key));
    return total + (item ? item.price * cartItems[key] : 0);
  }, 0);
};
    
const addToCart= (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
  };

  

  const removeFromCart= (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount}));
  }

const contextValue = {cartItems, addToCart, removeFromCart,updateCartItemCount,getCartTotalAmount};

return (<ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider> );
};