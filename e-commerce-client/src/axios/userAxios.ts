import axios from "axios";

const USER_API_URL = "http://localhost:8000/api/user";

interface loginData {
  email: String;
  password: String;
}
// Login User
export const loginUser = (userObj: loginData) => {
  const response = axios
    .post(`${USER_API_URL}/login`, userObj)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });

  return response;
};
