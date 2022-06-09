import React from 'react'
import { useQuery,gql } from '@apollo/client'
import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
// import { GET_PRODUCT } from '../graphql/Queries'


export default function ProductDisplayScreen() {
  const params =useParams()
  const[product, setProduct]=useState({})
  const GET_PRODUCT=gql`
  query product ($id:string!) {
    product(id:$id){
      id
      name
      description
      attributes{
        id
        name
        type
        items{
          id
          displayValue
          value
        }
      }
      gallery
      inStock
      category
      brand
      prices{
        currency{
          label
          symbol
        }
        amount
      }
    }
  }
  `
  const { loading, error, data }=useQuery(GET_PRODUCT, {variables: {id:params.id}})



  useEffect(()=>{
    if(data){
      console.log(data)
      setProduct(data.product)
    }
  },[data])

  if(loading) return <h2>Loading</h2>
  if(error) return <h3>something went off</h3>

    return (
      <div className='pdpmain'>
        <Header />
        <div className='pdpneedtoknows'>
          <div className='pdpmoreimages'>
            <div>
              <img className='pdpmainimg' src={product.gallery[0]} alt=''/>
            </div>
            <div> <img className='pdpmainimg' src={product.gallery[0]} alt={product.name}/></div>
            <div> <img className='pdpmainimg' src={product.gallery[0]} alt={product.name}/></div>
          </div>
          <div className=''><img className='pdpmainimg' src={product.gallery[0]} alt=''/></div>
        <div className='pdpproduct-details'>
            <div className='pdpbrandname'>
              {product.brand}
            </div>
            <div className='pdpothernames'>
              {product.name}
          </div>
          <div className='pdpsize'>
            <p>{product.attributes.name}</p>
          </div>
          <div className='pdpsizing'>
            <div>xs</div>
            <div>s</div>
            <div>m</div>
            <div>l</div>
          </div>
          <div className='pdpcolor'>
            <p>color:</p>
          </div>
          <div className='pdpcolors'>
            <div className='first'></div>
            <div className='second'></div>
            <div className='third'></div>
          </div>
          <div className='pdpsize pdp-price'>
            <p>Price:</p>
          </div>
          <div className='pdp-price-value'>
            <p>$<span>50.00</span></p>
          </div>
          <button className='btn-addtocart'>Add to cart</button>
          <div className='pdpnote'>
            <p>
            Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
            </p>
          </div>
          </div>

        </div>
        
      </div>
    )
}

