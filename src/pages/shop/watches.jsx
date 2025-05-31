import React from 'react';
import "./watches.css";
import {WatchesProduct} from './watchesProduct';



export const Watches = () => {
    return (
      <div className="watchesBody">
          <h1 id="titlePage">WATCHES</h1>

      <div className="watchesProduct">
          <WatchesProduct/>
        </div>
        </div>
        
    );
}