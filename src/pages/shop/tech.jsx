import React from 'react';

import "./tech.css";
import {TechProduct} from './techProduct';



export const Tech = () => {
    return (
       <div className="techBody">
        <h1 id="titlePage">TECH</h1>
       <div className="TechProducs">
          
          <TechProduct/>
        </div>
        </div>
        
    );
}