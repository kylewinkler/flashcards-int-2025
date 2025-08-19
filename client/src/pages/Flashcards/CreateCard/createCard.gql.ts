import { gql } from '@apollo/client';

export const CREATE_CARD = gql`
  mutation CreateCard($createFlashcardInput: CreateFlashcardInput!) {
    createFlashcard(createFlashcardInput: $createFlashcardInput)
  }
`;
