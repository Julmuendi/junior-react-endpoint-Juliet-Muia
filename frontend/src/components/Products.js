import React, { Component } from 'react'
import CardItem from './CardItem'

export class Products extends Component {
  render() {
    return (
      <>
    <section className='categoryname'>
      <h2>Clothes</h2>
    </section>
    <section className='cards'>
      <CardItem />
    </section>
    </>
    )
  }
}

export default Products