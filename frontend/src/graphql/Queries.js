import { gql } from '@apollo/client';


export const GET_PRODUCTS = gql`
    query Products{
      category(input:{
        title:"all"
      }){
        name
        products{
            id
            name
            description
            attributes{
              id
              name
              type
              items{
                id
                displayValue
                value
              }
            }
            gallery
            inStock
            category
            brand
            prices{
              currency{
                label
                symbol
              }
              amount
            }
          }
        }
      }
    
   
`

export const GET_PRODUCT=gql`
query product($id:String!){
  product(id:$id){
    id
    name
    description
    attributes{
      id
      name
      type
      items{
        id
        displayValue
        value
      }
    }
    gallery
    inStock
    category
    brand
    prices{
      currency{
        label
        symbol
      }
      amount
    }
  }
}
`;
export const GET_TECH=gql`
query tech{
  category(input:{
    title:"tech"
  }){
    name
    products{
        id
        name
        description
        attributes{
          id
          name
          type
          items{
            id
            displayValue
            value
          }
        }
        gallery
        inStock
        category
        brand
        prices{
          currency{
            label
            symbol
          }
          amount
        }
      }
    }
  }
`
export const GET_CLOTHES=gql`
query clothes{
  category(input:{
    title:"clothes"
  }){
    name
    products{
        id
        name
        description
        attributes{
          id
          name
          type
          items{
            id
            displayValue
            value
          }
        }
        gallery
        inStock
        category
        brand
        prices{
          currency{
            label
            symbol
          }
          amount
        }
      }
    }
  }
`

export const GET_CART_ITEMS=gql`
query GetCartItems{
  cartItems@client
}
`
