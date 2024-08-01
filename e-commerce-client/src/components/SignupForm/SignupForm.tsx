import useForm from "../../hooks/useForm";
import CustomInput from "../CustomInput/CustomInput";
import { LoginFormProps } from "../loginForm/LoginForm";

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  phone: "",
  address: "",
  email: "",
  password: "",
  confirmPassword: "",
};

type SignupFormField = {
  label: string;
  type: string;
  name: keyof FormData;
  placeholder: string;
};

// Ensure signupFormFields is an array of SignupFormField
const signupFormFields: SignupFormField[] = [
  {
    label: "First Name",
    type: "text",
    name: "firstName",
    placeholder: "Enter your first name",
  },
  {
    label: "Last Name",
    type: "text",
    name: "lastName",
    placeholder: "Enter your last name",
  },
  {
    label: "Phone",
    type: "text",
    name: "phone",
    placeholder: "Enter your phone number",
  },
  {
    label: "Address",
    type: "text",
    name: "address",
    placeholder: "Enter your address",
  },
  {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Enter your email",
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Enter your password",
  },
  {
    label: "Confirm Password",
    type: "password",
    name: "confirmPassword",
    placeholder: "Confirm your password",
  },
];

const SignupForm: React.FC<LoginFormProps> = ({ toggleAuthMode }) => {
  const { formData, handleOnChange, setFormData } = useForm(initialFormData);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
  };
  return (
    <form onSubmit={handleOnSubmit}>
      {signupFormFields.map((field) => (
        <CustomInput
          label={field.label}
          handleOnChange={handleOnChange}
          inputAttributes={{
            type: field.type,
            name: field.name,
            value: formData[field.name],
            placeholder: field.placeholder,
            required: true,
          }}
        />
      ))}
    </form>
  );
};

export default SignupForm;
