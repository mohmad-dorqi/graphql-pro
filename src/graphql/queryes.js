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
       
        name
        photo {
          url
        }
      }
    }
  }
}

`
const GET_ATHOR=gql`

query  {
  athors {
    id
    name
    photo {
      url
    }
    slug
    about {
      text
    }
    articles {
      photo {
        url
      }
      slug
      writer
    }
  }
}


`


export {GET_ARTICLES,GET_ATHOR};