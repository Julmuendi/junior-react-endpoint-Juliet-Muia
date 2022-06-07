import React from 'react'
import { useState, useEffect } from 'react'
import {gql, useQuery} from '@apollo/client'
import CardItem from './CardItem'
import Header from './Header'
import { GET_PRODUCTS } from '../graphql/Queries'

export default function Products() {
    const { loading, error, data }=useQuery(GET_PRODUCTS)
    
    if(loading) return <p>Loading...</p>
    if(error) return <h4>Something went wrong</h4>
    
    console.log(data)
    return (
      <>
        <main>
        <Header />
        {!loading && !error && (
          <h1>Data received</h1>
        )} 
        {/* <section className='categoryname'>
          <h2>Clothes</h2>
        </section>
        <section className='cards'>
          <CardItem />
        </section> */}
      </main>
    </>
    )
  }


