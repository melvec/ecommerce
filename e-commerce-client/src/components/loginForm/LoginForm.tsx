import { FormEvent } from "react";

const LoginForm: React.FC = () => {
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="py-4">
        <span className="mb-2 text-md">Email</span>
        <input
          type="text"
          className="w-full  pl-2 py-4 px-4 h-12 border border-gray-300 rounded-md placeholder: font-light placeholder:text-gray-500"
          name="email"
          placeholder="email"
          required
        />
        <div className="py-4">
          <span className="mb-2 text-md">Password</span>
          <input
            type="password"
            className="w-full pl-2 py-4 px-4 h-12 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            name="password"
            placeholder="password"
            required
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
          <span className="font-bold text-black"> Sign up for free</span>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
