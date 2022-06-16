import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import Vector from '../images/Vector.png'
import Cart from '../images/Cart.png'


export class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='headerul'>
          
              <div><Link to='/'>All</Link></div>
              <div><Link to='/clothes'>Clothes</Link></div>
              <div><Link to='/tech'>Tech</Link></div>
          
        </div>
        <div className='logowrap'><img src={logo} className='logo' alt='logo'></img></div>
        <div className='cartnprice'>
          <div className='cartnprice-content'>
            <div className='pricenvector'>
                <div><span className='currency-symbol'>$</span> <img className='vector' src={Vector} alt='vector'/>
                </div>
              </div>
              <div><Link to='/cart'><img src={Cart} className='cart' alt='cart'/></Link> </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Header