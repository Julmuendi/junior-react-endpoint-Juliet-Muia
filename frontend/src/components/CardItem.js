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

      </>
    )
  }
}

export default CardItem