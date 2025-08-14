import { gql } from "@apollo/client";

export const GET_FOLDERS = gql`
  query {
    getFolders {
      id
      name
    }
  }
`
