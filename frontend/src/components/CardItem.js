import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export function CardItem({product}) {
    
    return (
        <>
      <div className='card'>
          <Link to={`/product/${product.id}`}><div><img src={product.gallery[0]} alt={product.name} /></div></Link>
          <Link to={`/product/${product.id}`}><h3><span>{product.brand}</span><span>{product.name}</span></h3></Link>
          <h4><span>{product.prices[0].currency.symbol}</span><span>{product.prices[0].amount}</span></h4>
      </div>

      </>
    )

}

export default CardItem