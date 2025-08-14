import { gql } from '@apollo/client';

export const GET_FOLDER = gql`
  query GetFolder($id: ID!) {
    getFolder(id: $id) {
      id
      name
    }
  }
`;
