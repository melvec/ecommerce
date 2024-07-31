import React from "react";

const CustomInput = (props) => {
  const { label, inputAttributes, handleOnChange } = props;
  return (
    <>
      <div className="pb-2">
        <span>{label}</span>
      </div>
      <input
        {...inputAttributes}
        onChange={handleOnChange}
        type="text"
        className="w-full  pl-2 py-4 px-4 h-12 border border-gray-300 rounded-md placeholder: font-light placeholder:text-gray-500"
      />
    </>
  );
};

export default CustomInput;
