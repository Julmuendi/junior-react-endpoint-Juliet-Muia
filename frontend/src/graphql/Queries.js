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
