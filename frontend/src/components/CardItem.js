import { useApolloClient, useQuery } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'
import { GET_PRODUCT } from '../graphql/Queries'


export function CardItem({product}) {
    const client=useApolloClient()
    
    return (
        <>
      <div className='card'>
          <Link to={{pathname:`/product/${product.id}`, state:{ id:product.id}} } onMouseOver={(()=>client.query({
            query: GET_PRODUCT,
            variables:{id:product.id}
          }))}><div><img src={product.gallery[0]} alt={product.name} /></div></Link>
          <Link to={`/product/${product.id}`}><h3><span>{product.brand}</span><span>{product.name}</span></h3></Link>
          <h4><span>{product.prices[0].currency.symbol}</span><span>{product.prices[0].amount}</span></h4>
      </div>

      </>
    )

}

export default CardItem