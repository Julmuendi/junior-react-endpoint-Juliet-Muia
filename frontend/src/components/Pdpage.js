import React from 'react'


import Attributes from './Attributes'

export default function Pdpage({data}) {
  console.log(data)
    
  return (
    <>
    


        <div className='pdpneedtoknows'>
          <div className='pdpmoreimages'>
            
            <div className='pdpmoreimages-imgwrapper'>
              <img className='pdpmainimg' src={data.product.gallery[0]} alt=''/>
              <img className='pdpmainimg' src={data.product.gallery[0]} alt={data.product.name}/>
             <img className='pdpmainimg' src={data.product.gallery[0]} alt={data.product.name}/>
            </div>

            
          </div>
          
          <div className='pdpmainimg-wrapper '>
              <img className='pdpmainimg' src={data.product.gallery[0]} alt=''/>
          </div>
            <div className='pdpproduct-details'>
            <div className='details-container'>
            <div className='pdpbrandname'>
              {data.product.brand}
            </div>
            <div className='pdpothernames'>
              {data.product.name}
          </div>
          {
            data.product.attributes.map((attribute)=><Attributes key={attribute.id} attribute={attribute}/>)
          }
          <div className='pdpsize pdp-price'>
            <p>Price</p>
          </div>
          <div className='pdp-price-value'>
            <p>{data.product.prices[0].currency.symbol}<span>{data.product.prices[0].amount}</span></p>
          </div>
          <button className='btn-addtocart'>Add to cart</button>
          <div className='pdpnote'><p>{data.product.description}</p></div>
          </div>
          </div>

          </div>
    
    </>
  )
}
