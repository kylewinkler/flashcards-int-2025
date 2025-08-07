import { useState } from "react"
import type { FormFieldI } from "../../../components/form/Form";
import Form from "../../../components/form/Form";
import { useMutation } from '@apollo/client';
import { CREATE_USER } from "./register.gql";

interface NewUserI {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const defaultUser: NewUserI = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const RegisterUser = () => {
  const [newUser, setNewUser] = useState<NewUserI>(defaultUser);
  const [createUser, { loading, error, data }] = useMutation(CREATE_USER);

  const updateNewUser = (field: keyof NewUserI, value: string) => {
    setNewUser({...newUser, [field]: value})
  }
  
  const formFields: FormFieldI[] = [
    {
      label: 'First Name',
      value: newUser.firstName,
      onChange: (val: string) => updateNewUser('firstName', val),
      mdCol: 6
    },
    {
      label: 'Last Name',
      value: newUser.lastName,
      onChange: (val: string) => updateNewUser('lastName', val),
      mdCol: 6
    },
    {
      label: 'Email',
      value: newUser.email,
      onChange: (val: string) => updateNewUser('email', val)
    },
    {
      label: 'Password',
      value: newUser.password,
      onChange: (val: string) => updateNewUser('password', val),
      mdCol: 6
    },
    {
      label: 'Confirmed Password',
      value: newUser.confirmPassword,
      onChange: (val: string) => updateNewUser('confirmPassword', val),
      mdCol: 6
    }
  ]

  const handleSubmit = async () => {
    if (newUser.password !== newUser.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await createUser({
        variables: {
          createUserInput: {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            password: newUser.password
          }
        }
      });

      alert("User created!");
      setNewUser(defaultUser);
    } catch (err) {
      console.error("Create user failed", err);
    }
  };

  if (error) return <>{error}</>
  if (loading) return <>Registering User...</>

  return (
    <Form formFields={formFields} onSubmit={() => handleSubmit()} />
  )
}

export default RegisterUser;