import { gql } from "@apollo/client";

export const GET_FLASHCARDS = gql`
  query {
    getFlashcards {
      id
      front
      back
    }
  }
`
