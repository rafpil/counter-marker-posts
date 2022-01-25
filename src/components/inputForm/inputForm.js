import React from "react";

const InputForm = ({ id, laben, placeholder, refInput }) => {

  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96 flex justify-center flex-col items-center">
        <label
          htmlFor={id}
          className="form-label inline-block mb-2 mt-5 tracking-widest text-[#142F56] font-bold text-xl"
        >
          {laben.toUpperCase()}
        </label>
        <input
          type="text"
          className="
    form-control
    block
    w-full
    px-4
    py-2
    text-xl
    font-normal
    text-[#142F56]
    text-center
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-[#142F56] focus:shadow focus:shadow-[#142F56] focus:outline-none
  "
          id={id}
          placeholder={placeholder}
          ref={refInput}
        />
      </div>
    </div>
  );
};

export default InputForm;
