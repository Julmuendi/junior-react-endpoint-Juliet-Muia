import React from 'react'
import { useState } from 'react'
import Attributes from '../components/Attributes'
import './carousel.css'
import backArrow from '../images/backArrow.png'
import forwardArrow from '../images/forwardArrow.png'
import { cartItemsVar } from './Cartcache'
import { useReactiveVar } from '@apollo/client'


export default function CartItem({ product}) {
  const[currImage, setCurrImage]=useState(0)
 


  const theItem=cartItemsVar(cartItemsVar()).find((x)=>x.id === product.id)
  const index=cartItemsVar(cartItemsVar()).findIndex((x)=>x.id === product.id)
  

  const increaseQty=(e)=>{
    cartItemsVar(cartItemsVar())[index].quantity=theItem.quantity+1
    console.log(product.quantity)
   

    
  
  }
  const decreaseQty=(e)=>{
    if(theItem.quantity>=1){
        cartItemsVar(cartItemsVar())[index].quantity=theItem.quantity-1
        
    }
    
    

}
  
  

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
                <button className='plusSign' onClick={increaseQty}>+</button>
                <div className='qty'>{product.quantity}</div>
                <button className='minusSign' onClick={decreaseQty}>-</button>
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
