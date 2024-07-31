import { LoginFormProps } from "../loginForm/LoginForm";

const SignupForm: React.FC<LoginFormProps> = ({ toggleAuthMode }) => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
  };
  return <form onSubmit={handleOnSubmit}></form>;
};

export default SignupForm;
