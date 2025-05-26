import React from 'react';
import {products} from '../../productsData';
import {Product} from './product';
import "./shop.css";


export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
            </div>
                <h1 className="teosTechShop">
                    Teos GamingShop
                </h1>
            <div className="products">
                {products.map((product) => 
                <Product data={product}/> )}
                
            </div>

            
        </div>
    );
}