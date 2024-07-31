import { toast } from "react-toastify";
import { setUser } from "./userSlice";
import { getUser } from "../../axios/userAxios";

// GET USER ACTION
export const getUserAction = () => async (dispatch) => {
  const result = await getUser();

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  dispatch(setUser(result.data));
};
