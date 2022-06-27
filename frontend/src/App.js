import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Products from './components/Products'
import CartScreen from './screens/CartScreen'
import Header from './components/Header'
import{
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  from
} from '@apollo/client'
import { onError} from '@apollo/client/link/error'
import Clothes from './components/Clothes'
import Tech from './components/Tech'
import ProductDisplayScreen from './screens/ProductDisplayScreen'
import { cartItemsVar } from './cartfunctionality/Cartcache'




const errorLink=onError(({graphqlErrors, networkError})=>{
  if(graphqlErrors){
    graphqlErrors.map(({message})=>
      <h2>`Graphql error ${message}`</h2>
    )
  }else{
    return null
  }
})
const link = from([
  errorLink,
  new HttpLink({uri:'http://localhost:4000/'})
])

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartItemsVar();
          }
        }
      }
    }
  },
    Product: {
      fields: { 
        isInCart: { 
          read(_, { variables }) { 
            return localStorage.getItem('CART').includes(
              variables.productId
            );
          }
        }
      }
    }
});
const client=new ApolloClient({
  cache,
  link:link
})



export class App extends Component {
  render() {
    return (
    <ApolloProvider client={client}>
      <Router>
        <main>
        <Header />
        <div className='container'>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/product/:id' element={<ProductDisplayScreen />} />
          <Route path='/cart' element={<CartScreen />}/>
          <Route path='/clothes' element={<Clothes />}/>
          <Route path='/tech' element={<Tech />} />
        </Routes>
        </div>
        </main>
      </Router>
    </ApolloProvider>
    
    )
  }
}

export default App