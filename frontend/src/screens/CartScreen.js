import React from 'react'
import { useReactiveVar } from '@apollo/client'
import CartItem from '../cartfunctionality/CartItem'
import { cartItemsVar } from '../cartfunctionality/Cartcache'


export default function CartScreen() {
const cartItems=useReactiveVar(cartItemsVar)
console.log(cartItems)


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
              <div className='Tax'><span className='identifier'>Tax 21%: </span><span className='value'>{(0.21*(cartItems.reduce((a,c)=>a + c.prices[0].amount*c.quantity, 0))).toFixed(2)}</span></div>
              <div className='Quantity'><span className='identifier'>Quantity: </span><span className='value'>{cartItems.reduce((a, c)=>a+c.quantity, 0)}</span></div>
              <div className='Total'><span className='identifier'>Total:</span><span className='value'>${((cartItems.reduce((a,c)=>a + c.prices[0].amount*c.quantity, 0))+(0.21*(cartItems.reduce((a,c)=>a + c.prices[0].amount*c.quantity, 0)))).toFixed(2)}</span></div>
              <button>order</button>
            </div>
      )}

    </div>
  )
}
