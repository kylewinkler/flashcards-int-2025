import { gql } from '@apollo/client';

export const CREATE_FOLDER = gql`
  mutation CreateFolder($createFolderInput: CreateFolderInput!) {
    createFolder(createFolderInput: $createFolderInput)
  }
`;
