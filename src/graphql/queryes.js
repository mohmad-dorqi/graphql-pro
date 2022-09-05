import { gql } from "@apollo/client";

const GET_ARTICLES= gql`
query  {
  articles {
    id
    slug
    photo {
      url
    }
    writer
    athor {
      ... on Athor {
        id
        name
        photo {
          url
        }
      }
    }
  }
}

`


export {GET_ARTICLES};