import React, { Component } from 'react'
import{
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  from
} from '@apollo/client'
import { onError} from '@apollo/client/link/error'
import './App.css'
import Header from './components/Header'
import Products from './components/Products'

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
    <main>
       <Header />
      <Products />
       
      </main>
    </ApolloProvider>
    )
  }
}

export default App