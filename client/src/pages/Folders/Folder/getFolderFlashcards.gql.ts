import { gql } from "@apollo/client";

export const GET_FLASHCARDS_BY_FOLDER = gql`
  query GetFlashcardsByFolder($folderId: ID!) {
    getFlashcardsByFolder(folderId: $folderId) {
      id
      front
      back
    }
  }
`;
