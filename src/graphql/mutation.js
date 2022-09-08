import { gql } from "@apollo/client";

const UPLOAD_AUTHOR=gql`
    mutation UploadAuthor($name:string!,$about:string!,$slug:string! $id:string) {
  createAthor(data: {name: "", about: "", slug: "", photo: {connect: {id: ""}}})
}


`
export {UPLOAD_AUTHOR}