import { gql } from "@apollo/client";

const UPLOAD_AUTHOR=gql`
    mutation UploadAuthor($name:String!,$about:String!,$slug:String! ) {
  createAthor(data: {name: $name, about: $about, slug: $slug}
  ){
    id
  }
}


`
export {UPLOAD_AUTHOR}