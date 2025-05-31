import React from 'react';
import {products} from '../../productsData';
import {Product} from './product';
 

export const TechProduct = () => {
    
        
            
  const desiredProductIds = [4,5,6,7,8,9,];

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