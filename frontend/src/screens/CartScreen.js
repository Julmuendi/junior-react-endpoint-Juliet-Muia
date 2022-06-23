import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_CART_ITEMS } from '../graphql/Queries'
import Loader from '../components/Loader'
import CartItem from '../cartfunctionality/CartItem'

export default function CartScreen() {
  const { loading, error, data } = useQuery(GET_CART_ITEMS)
  if(loading) return <Loader />
  if(error) return <p>Error: {error.message}</p>
  console.log(data)
  return (
    <div className='the-cart'>
      <p className='cart-title'>cart</p>
      {
        data.cartItems.map((product)=>
        <CartItem key={product.id} product={product} />)
      }
    </div>
  )
}
