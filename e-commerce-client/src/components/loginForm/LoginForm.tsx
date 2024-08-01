import { FormEvent } from "react";
import { loginUser } from "../../axios/userAxios";
import useForm from "../../hooks/useForm";
import CustomInput from "../CustomInput/CustomInput";

const initialFormData = {
  email: "",
  password: "",
};

export interface LoginFormProps {
  toggleAuthMode: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ toggleAuthMode }) => {
  const { formData, handleOnChange } = useForm(initialFormData);
  const { email, password } = formData;

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    const result = await loginUser(formData);
    console.log(result);
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="py-4">
        <CustomInput
          label="Email"
          handleOnChange={handleOnChange}
          inputAttributes={{
            type: "text",
            name: "email",
            value: email,
            placeholder: "Enter your Email",
            required: true,
          }}
        />
        <div className="py-4">
          <CustomInput
            label="Password"
            handleOnChange={handleOnChange}
            inputAttributes={{
              type: "password",
              name: "password",
              value: password,
              placeholder: "Enter your password",
              required: true,
            }}
          />
        </div>
        <div className="flex justify-end w-full py-4">
          <span className="font-bold text-md">Forgot Password</span>
        </div>
        <button className="w-full pl-2 py-4 px-4 h-12 bg-green-450 text-white rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
          Login
        </button>
        <div className="text-center text-gray-400">
          Dont have an account?
          <span
            className="font-bold text-black cursor-pointer "
            onClick={toggleAuthMode}
          >
            Sign up for free
          </span>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
