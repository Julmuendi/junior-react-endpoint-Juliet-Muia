import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Products from './components/Products'



export class App extends Component {
  render() {
    return (
  
      <main>
        <Header />
        <Products />
        
      </main>
    
    )
  }
}

export default App