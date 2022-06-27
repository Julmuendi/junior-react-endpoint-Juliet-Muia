import React, { useState } from 'react'
import { useQuery, useReactiveVar } from '@apollo/client'
import Loader from '../components/Loader'
import CartItem from '../cartfunctionality/CartItem'
import { cartItemsVar } from '../cartfunctionality/Cartcache'


export default function CartScreen() {
const cartItems=useReactiveVar(cartItemsVar)


  return (
    <div className='the-cart'>
      <p className='cart-title'>cart</p>
      <>
      {cartItems.length===0 ? (<p style={{textAlign:'center', fontSize:'2rem'}}>There are no items in your cart😎</p>) : (
        <>
                {
        cartItems.map((product)=>
        <CartItem key={product.id} product={product}/>)
      }
        </>
      )}

      </>
      {cartItems.length >0 &&(
              <div className='row'>
              <div className='Tax'><span className='identifier'>Tax 21%: </span><span className='value'></span></div>
              <div className='Quantity'><span className='identifier'>Quantity: </span><span className='value'></span></div>
              <div className='Total'><span className='identifier'>Total:{} </span><span className='value'></span></div>
              <button>order</button>
            </div>
      )}

    </div>
  )
}
