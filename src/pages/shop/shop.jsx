import React from 'react';

import "./shop.css";
import "./watches.css";

import "./tech.css";
import {Link} from 'react-router-dom';


export const Shop = () => {
    return (
        <div className="shop">
            
            <div className="shopTitle">
            </div>
                <h1 className="teosTechShop">
                    TECHTOCK
                </h1>
           <Link to ="/watches" className="watchesButton"> Watches  </Link> <Link to ="/tech" className="techButton"> Tech </Link>
            <div className="products">
              
            </div>

            
        </div>
    );
}