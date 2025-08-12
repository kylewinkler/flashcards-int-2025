import { useState } from "react";
import Form, { type FormFieldI, type FormFieldValueType } from "../../../components/form/Form";
import { CREATE_USER } from "./register.gql";
import { useMutation } from "@apollo/client";
import { useNavigate } from 'react-router';


interface NewUserI {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string

}

const defaultRegUser: NewUserI = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const Register = () => {

    const navigate = useNavigate();
    const [newUser, setNewUser] = useState<NewUserI>(defaultRegUser);

    const updateNewUser = (field: keyof NewUserI, value: string) => {
        setNewUser({ ...newUser, [field]: value })
    };

    const [createUser] = useMutation(CREATE_USER, {
        variables: {
            createUserInput: {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                password: newUser.password,
            }
        }
    });

    const handleFormSubmit = async () => {
        if (newUser.password !== newUser.confirmPassword) {
            alert('Please make sure passwords match!')
            return;
        }

        try {
            const {data} = await createUser();

            if (data?.createUser) {
                setNewUser(defaultRegUser);
                navigate('/login');
            }
        }
        catch (err: any) {
            alert(`Unable to create account: ${err.message}`);
            return;
        }

    }

    const formFields: FormFieldI[] = [
        {
            label: "First Name",
            value: newUser.firstName,
            onChange: (value: FormFieldValueType) => updateNewUser("firstName", value)
        },
        {
            label: "Last Name",
            value: newUser.lastName,
            onChange: (value: FormFieldValueType) => updateNewUser("lastName", value)
        },
        {
            label: "Email",
            value: newUser.email,      
            onChange: (value: FormFieldValueType) => updateNewUser("email", value)

        },
        {
            label: "Password",
            value: newUser.password,
            type: 'password',
            onChange: (value: FormFieldValueType) => updateNewUser("password", value)

        },
        {
            label: "Confirm Password",
            value: newUser.confirmPassword,
            type: 'password',
            onChange: (value: FormFieldValueType) => updateNewUser("confirmPassword", value)

        },
    ]

    return (
        <Form formFields={formFields} onSubmit={() => handleFormSubmit()} buttonLabel="Register"/>
    )
} 

export default Register;
