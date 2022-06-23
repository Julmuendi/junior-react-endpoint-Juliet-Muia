import React from 'react'
import Attributes from '../components/Attributes'

export default function CartItem({ product }) {
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
                <div className='sign'>+</div>
                <div className='qty'>3</div>
                <div className='sign'>-</div>
            </div>
            
            <img src={product.gallery[0]} alt={product.name} /> 
            
        </div>
    </div>
  )
}
