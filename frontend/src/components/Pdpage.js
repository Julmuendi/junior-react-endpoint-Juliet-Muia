import React from 'react'

import Attributes from './Attributes'

export default function Pdpage({product}) {
  
    
  return (
    <>
        <div className='pdpneedtoknows'>
          <div className='pdpmoreimages'>
            
            <div className='pdpmoreimages-imgwrapper'>
              <img className='pdpmainimg' src={product.gallery[0]} alt=''/>
            </div>
            <div className='pdpmoreimages-imgwrapper'> <img className='pdpmainimg' src={product.gallery[0]} alt={product.name}/></div>
            <div className='pdpmoreimages-imgwrapper'> <img className='pdpmainimg' src={product.gallery[0]} alt={product.name}/></div>
            
          </div>
          
            <div className='pdpmainimg-wrapper '><img className='pdpmainimg' src={product.gallery[0]} alt=''/>
          </div>
            <div className='pdpproduct-details'>
            <div className='details-container'>
            <div className='pdpbrandname'>
              {product.brand}
            </div>
            <div className='pdpothernames'>
              {product.name}
          </div>
          {
            product.attributes.map((attribute)=><Attributes key={attribute.id} attribute={attribute}/>)
          }
          <div className='pdpsize pdp-price'>
            <p>Price</p>
          </div>
          <div className='pdp-price-value'>
            <p>{product.prices[0].currency.symbol}<span>{product.prices[0].amount}</span></p>
          </div>
          <button className='btn-addtocart'>Add to cart</button>
          <div className='pdpnote'>{product.description}</div>
          </div>
          </div>

          </div>
    
    </>
  )
}
