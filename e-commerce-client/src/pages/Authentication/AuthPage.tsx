import { useState } from "react";
import beachLandcape from "../../assets/beachlandscape.jpg";
import LoginForm from "../../components/loginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6  bg-white shadow-2xl rounded-2xl md:flex-row md:space--y-0">
          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-4xl font-bold">
              Welcome to the Biggest Deals
            </span>
            <span className=" text-center font-bold text-align-center text-green-450 mb-8">
              E-COMMERCE WEBSITE
            </span>
            {isLogin ? (
              <LoginForm toggleAuthMode={toggleAuthMode} />
            ) : (
              <SignupForm toggleAuthMode={toggleAuthMode} />
            )}
          </div>
          <div className="relative flex items-center justify-center">
            <img
              src={beachLandcape}
              alt="img"
              className="w-[200px] h-full hidden rounded-r-2xl md:block object-cover "
            />
          </div>
        </div>
      </div>
    </>
  );
};
// ED7B5A;

export default AuthPage;
