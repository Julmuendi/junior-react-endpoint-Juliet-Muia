import React, { Component } from 'react'
import CardItem from './CardItem'
import Header from './Header'

export class Products extends Component {
  render() {
    return (
      <>
        <main>
        <Header />
        <section className='categoryname'>
          <h2>Clothes</h2>
        </section>
        <section className='cards'>
          <CardItem />
        </section>
      </main>
    </>
    )
  }
}

export default Products