import React from 'react'
import { useState, useEffect} from 'react'
import { useQuery} from '@apollo/client'
import CardItem from './CardItem'
import { GET_CLOTHES } from '../graphql/Queries'
import Loader from './Loader'

export default function Clothes() {
    const[products, setProducts]=useState([])
    const[name, setName]=useState('')
      const { loading, error, data }=useQuery(GET_CLOTHES)
      
  
      useEffect(()=>{
  
        if(data){
          
          setName(data.category.name)
          setProducts(data.category.products)
          console.log(products)
         
        }
      }, [data, error, loading, products])
      
      if(loading) return <Loader />
      if(error) {return <h4>Something went wrong</h4>}
      return (
        <>
        
            <section className='categoryname'>
              <h2>{name}</h2>
            </section>
            <section className='cards'>
              {products.map((product)=>
                <CardItem key={product.id} product={product} />
              )}   
            </section>
        
           
  
          
      </>
      )
}