import { useState } from "react";
import type { FormFieldI, FormFieldValueType } from "../../../components/form/Form";
import { useMutation } from "@apollo/client";
import { CREATE_FOLDER } from "./createFolder.gql";
import Form from "../../../components/form/Form";
import { useNavigate } from "react-router-dom";

const CreateFolder = () => {
  const [newFolder, setNewFolder] = useState('');
  const navigate = useNavigate();
  const [createFolder] = useMutation(CREATE_FOLDER, {
    variables: {
      createFolderInput: {name: newFolder}
    }
  });

  const formFields: FormFieldI[] = [
    { label: 'Folder Name', value: newFolder, onChange: (val: FormFieldValueType) => setNewFolder(val)}
  ]

  const handleSubmit = async () => {
    try {
      const { data } = await createFolder();

      if (data?.createFolder) navigate(`/folders/${data.createFolder}`)
    } catch (err: any) {
        alert(`Unable to create flashcard: ${err.message}`);
      }
  }

  return (
    <Form formFields={formFields} onSubmit={handleSubmit} />
  )
}

export default CreateFolder;