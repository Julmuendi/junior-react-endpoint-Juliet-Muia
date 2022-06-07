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
        <div className='pdpproduct-details'>
            <div className='pdpbrandname'>
              Apollo
            </div>
            <div className='pdpothernames'>
              Running Short
          </div>
          <div className='pdpsize'>
            <p>size:</p>
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
}

export default ProductDisplayScreen