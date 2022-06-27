import React from 'react'
import { useState } from 'react'
import Attributes from '../components/Attributes'
import './carousel.css'
import backArrow from '../images/backArrow.png'
import forwardArrow from '../images/forwardArrow.png'


export default function CartItem({ product}) {
  const[currImage, setCurrImage]=useState(0)
  const[qty, setQty]=useState(1)
  const[data, setData]=useState()
  const[price, setPrice]=useState()
  
    
    

  

  return (
    <div className='cartItem'>
        <div className='first-column'>
            <div className='pdpbrandname'>{product.brand}</div>
            <div className='.pdpothernames'>{product.name}</div>
            <div className='pdpsize pdp-price'>
                <p>Price</p>
            </div>
            <div className='pdp-price-value'>
                <p>{product.prices[0].currency.symbol}<span>{product.prices[0].amount}</span></p>
            </div>
            {
            product.attributes.map((attribute)=><Attributes key={attribute.id} attribute={attribute}/>)
            }
        </div>
        <div className='second-column'>
            <div className='qtyselector'>
                <div className='sign' onClick={()=>{qty>=1 && setQty(qty+1)}}>+</div>
                <div className='qty'>{qty}</div>
                <div className='sign' onClick={()=>{qty>=1 && setQty(qty-1)}}>-</div>
            </div>
            
            <div className='carousel'>
                <div className='carouselInner'
                    style={{backgroundImage:`url(${product.gallery[currImage]})`}}
                >
                    <div className='carouselArrows'>
                        <div className='Arrow' onClick={()=>{currImage > 0 && setCurrImage(currImage-1)}}><img src={backArrow} alt=''/></div>
                        <div className='Arrow' onClick={()=>{currImage < product.gallery.length-1 && setCurrImage(currImage+1)}}><img src={forwardArrow} alt=''/></div>
                        


                    </div>
                

                </div>
            </div>
            
        </div>
    </div>
  )
}
