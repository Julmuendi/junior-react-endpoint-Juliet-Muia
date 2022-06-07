import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Products from './components/Products'
import CartScreen from './screens/CartScreen'
import ProductDisplayScreen from './screens/ProductDisplayScreen'
import{
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  from
} from '@apollo/client'
import { onError} from '@apollo/client/link/error'


const errorLink=onError(({graphqlErrors, networkError})=>{
  if(graphqlErrors){
    graphqlErrors.map(({message})=>{
      alert(`Graphql error ${message}`)
    })
  }
})
const link = from([
  errorLink,
  new HttpLink({uri:'http://localhost:4000/'})
])
const client=new ApolloClient({
  cache:new InMemoryCache(),
  link:link
})



export class App extends Component {
  render() {
    return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/product/:id' element={<ProductDisplayScreen />} />
          <Route path='/cart' element={<CartScreen />}/>
        </Routes>
        
        
      </Router>
    </ApolloProvider>
    
    )
  }
}

export default App