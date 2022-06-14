import React from 'react'
import { useState } from 'react'
import Attributes from './Attributes'

export default function Pdpage({ product }) {
  // const[attributes, setAttributes]=useState([])
  // setAttributes(product.attributes[0].items)
    console.log(product.name)
  return (
    <>
        <div className='pdpneedtoknows'>
          <div className='pdpmoreimages'>
            <div>
              <img className='pdpmainimg' src={product.gallery[0]} alt=''/>
            </div>
            <div> <img className='pdpmainimg' src={product.gallery[0]} alt={product.name}/></div>
            <div> <img className='pdpmainimg' src={product.gallery[0]} alt={product.name}/></div>
          </div>
          <div>
            <div className='pdpmainimg-wrapper '><img className='pdpmainimg' src={product.gallery[0]} alt=''/></div>
            <div className='pdpproduct-details'>
            <div className='pdpbrandname'>
              {product.brand}
            </div>
            <div className='pdpothernames'>
              {product.name}
          </div>
          {
            product.attributes.map((attribute)=><Attributes key={attribute.id} attribute={attribute}/>)
          }
          {/* <div className='pdpsize'>
            <p>{product.attributes[0].name}</p>
          </div>
          <div className='pdpsizing'>
              
              <div key={item.id}>{item.value}</div>
          </div> */}
          <div className='pdpcolor'>
            <p>color:</p>
          </div>
          <div className='pdpcolors'>
            <div className='first'></div>
            <div className='second'></div>
            <div className='third'></div>
          </div>
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
