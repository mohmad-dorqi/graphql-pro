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

  }
}
`
const GET_AUTHOR_INFO=gql`
      query getAuthor($slug:String!) {
  athor(where: {slug: slug}) {
    name
    photo {
      url
    }
    slug
    about {
      text
    }
  }
}

`


export {GET_ARTICLES,GET_ATHOR,GET_AUTHOR_INFO};