import React from 'react'
import { useQuery } from '@apollo/client'
import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { GET_PRODUCT } from '../graphql/Queries'
import Pdpage from '../components/Pdpage'


export default function ProductDisplayScreen() {
  const {id} =useParams()
  const[product, setProduct]=useState({})
 
  
  const { loading, error, data } =useQuery(
    GET_PRODUCT,
    {variables:{id:id}}
  )

  
    useEffect(()=>{

      if(data){
        
        
        console.log(data)
        setProduct(data.product)
        console.log(product)
      
       
       
      }
    }, [])
    
    if(loading) return <h2>Loading...</h2>
    if(error) return <h4>`Error! ${error}`</h4>

    return (
      <div className='pdpmain'>
 
        <Pdpage product={product}/>

        
      </div>
    )
}

