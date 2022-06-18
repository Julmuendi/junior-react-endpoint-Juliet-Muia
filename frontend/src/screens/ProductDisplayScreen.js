import React from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { GET_PRODUCT } from '../graphql/Queries'
import Pdpage from '../components/Pdpage'
import Loader from '../components/Loader'


export default function ProductDisplayScreen() {
  const {id} =useParams()
 
 
  
  const { loading, error, data } =useQuery(
    GET_PRODUCT,
    {variables:{id:id}}
  )


    
    if(loading) return <Loader />
    if(error) return <h4>`Error! ${error}`</h4>
    if(!data){
      return <h2>wait abit</h2>
    }

    return (
      <div className='pdpmain'>
        
        <Pdpage data={data}/>

        
      </div>
    )
}

