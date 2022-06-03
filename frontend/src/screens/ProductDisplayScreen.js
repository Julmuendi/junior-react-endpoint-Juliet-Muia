import React, { Component } from 'react'
import Header from '../components/Header'
import sweater1 from '../images/sweater1.png'

export class ProductDisplayScreen extends Component {
  render() {
    return (
      <div className='pdpmain'>
        <Header />
        <div className='pdpneedtoknows'>
          <img className='pdpmainimg' src={sweater1} alt=''/>
        </div>
        
      </div>
    )
  }
}

export default ProductDisplayScreen