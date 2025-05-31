import React from 'react';
import {products} from '../../productsData';
import {Product} from './product';
import "./watches.css";

export const WatchesProduct = () => {
    
        
            
  const desiredProductIds = [1, 2, 3];

  const filteredProducts = products.filter(product =>
    desiredProductIds.includes(product.id)
  );

  return (
    <div>
      
      
        {filteredProducts.map(product => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    
  );
}
        
    
