import { gql } from "@apollo/client";

const UPLOAD_AUTHOR=gql`
    mutation UploadAuthor($name:String!,$about:String!,$slug:String! ,$id:String!) {
  createAthor(data: {name: $name, about: $about, slug: $slug, photo: {connect: {id: $id}}}
  ){
    id
  }
}


`
export {UPLOAD_AUTHOR}