import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sweater1 from '../images/sweater1.png'
import pinksweater from '../images/pinksweater.png'

export class CardItem extends Component {
  render() {
    return (
        <>
      <div className='card'>
          <Link to='/product/:id'><img src={sweater1} alt='greysweater' /></Link>
          <Link to='/product/:id'><h3>Apollo Running</h3></Link>
          <h4>$50.00</h4>
      </div>
      <div className='card'>
          <img src={pinksweater} alt='greysweater' />
          <h3>Apollo Running Short</h3>
          <h4>$6000.00</h4>
      </div>
      <div className='card'>
          <img src={sweater1} alt='greysweater' />
          <h3>Apollo Running</h3>
          <h4>$50.00</h4>
      </div>
      <div className='card'>
          <img src={sweater1} alt='greysweater' />
          <h3>Apollo Running</h3>
          <h4>$50.00</h4>
      </div>
      </>
    )
  }
}

export default CardItem