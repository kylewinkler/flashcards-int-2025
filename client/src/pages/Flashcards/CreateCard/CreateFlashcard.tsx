import { useState } from "react";
import Form, { type FormFieldI } from "../../../components/form/Form";
import type { FormFieldValueType } from "../../../components/form/Form";
import { CREATE_CARD } from "./createCard.gql";
import { useMutation } from "@apollo/client";

interface CreateFlashcardI {
  front: string;
  back: string;
}

const defaultCreateCard: CreateFlashcardI = {
  front: '',
  back: ''
}

const CreateFlashcard = () => {
  const [newCard, setNewCard] = useState(defaultCreateCard);

  const [createCard] = useMutation(CREATE_CARD, {
    variables: {
        createFlashcardInput: newCard
    }
});

const handleCreateCard = async() => {
  try {
    const { data } = await createCard();
    console.log(data )
    if (data?.createFlashcard) {
        setNewCard(defaultCreateCard);
    }
  }
  catch (err: any) {
    alert(`Unable to create flashcard: ${err.message}`);
  }
}

  const formFields: FormFieldI[] = [
    { label: 'Front', value: newCard.front, onChange: (val: FormFieldValueType) => setNewCard({...newCard, front: val})},
    { label: 'Back', value: newCard.back, onChange: (val: FormFieldValueType) => setNewCard({...newCard, back: val})},
  ]

  return (
    <Form onSubmit={() => handleCreateCard()} formFields={formFields} />
  )

}

export default CreateFlashcard;