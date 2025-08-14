import { useAuthContext } from "../../../context/auth.context";
import { useEffect, useState } from "react";
import Form, {
  type FormFieldValueType,
  type FormFieldI
} from "../../../components/form/Form";
import { LOGIN_USER } from "./login.gql";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router";

interface LoginI {
  email: string;
  password: string;
}

const defaultLoginUser: LoginI = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const { login, user } = useAuthContext();
  const [newUser, setNewUser] = useState<LoginI>(defaultLoginUser);

  const updateNewUser = (field: keyof LoginI, value: string) => {
    setNewUser({ ...newUser, [field]: value });
  };

  const [loginUser] = useMutation(LOGIN_USER, {
    variables: {
      loginInput: newUser
    }
  });

  const handleFormSubmit = async () => {
    try {
      const { data } = await loginUser();

      if (data?.login.error) {
        alert(data.login.error);
      } else if (data?.login.token) {
        await login(data.login.token);
        navigate('/');
      }
    } catch (err: any) {
      alert(`Unable to login: ${err.message}`);
      return;
    }
  };

  const formFields: FormFieldI[] = [
    {
      label: "Email",
      value: newUser.email,
      type: "text",
      onChange: (value: FormFieldValueType) => updateNewUser("email", value)
    },
    {
      label: "Password",
      value: newUser.password,
      type: "password",
      onChange: (value: FormFieldValueType) => updateNewUser("password", value)
    }
  ];

  useEffect(() => {
    if (user) navigate('/');
  }, []);

  return (
    <Form
      formFields={formFields}
      onSubmit={() => handleFormSubmit()}
      buttonLabel="Log In"
    />
  );
};

export default Login;