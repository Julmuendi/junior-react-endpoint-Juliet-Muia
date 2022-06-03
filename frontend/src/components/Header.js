import React, { Component } from 'react'
import logo from '../images/logo.png'
import Vector from '../images/Vector.png'
import Cart from '../images/Cart.png'


export class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='headerul'>
          
              <div><a href=''>Women</a></div>
              <div><a href=''>Men</a></div>
              <div><a href=''>Kids</a></div>
          
        </div>
        <img src={logo} className='logo' alt='logo'></img>
        <div className='cartnprice'>
           <div className='pricenvector'>
              <div><span className='currency-symbol'>$</span> <img className='vector' src={Vector} alt='vector'/>
              </div>
            </div>
              <div><img src={Cart} className='cart'/></div>
        </div>
      </div>
    )
  }
}

export default Header