import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface FormData {
  email: string;
  password: string;
}

const handleOnChange = (
  e: ChangeEvent<HTMLInputElement>,
  formData: FormData,
  setFormData: Dispatch<SetStateAction<FormData>>
) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });
};

const useForm = (initialFormData: FormData) => {
  const [formData, setFormData] = useState(initialFormData);

  return {
    handleOnChange: (e: ChangeEvent<HTMLInputElement>) =>
      handleOnChange(e, formData, setFormData),
    setFormData,
    formData,
  };
};

export default useForm;
