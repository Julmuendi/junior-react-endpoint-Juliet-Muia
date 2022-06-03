import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Products from './components/Products'
import ProductDisplayScreen from './screens/ProductDisplayScreen'



export class App extends Component {
  render() {
    return (

      <Router>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/product/:id' element={<ProductDisplayScreen />} />
        </Routes>
        
        
      </Router>
    
    )
  }
}

export default App