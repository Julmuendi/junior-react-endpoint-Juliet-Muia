import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
    query{
        category(input:{
          title:"all"
        }){
          name
          products{
            id
            name
            brand
            prices{
              currency{
                symbol
              }
              amount
            }
            gallery
          }
        }
      }
`

export const GET_PRODUCT=gql`
query product ($id:string!) {
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
`