import React from "react";

const Input = ({ text, id, type = "text", value, onChange }) => {
  return (
    <div className="mb-3 flex flex-col gap-3">
      <label htmlFor={id} className="text-gray-700">
        {text}
      </label>
      <input
        type={type}
        id={id}
        placeholder={text}
        value={value}
        onChange={onChange}
        className="text-gray-700 border border-gray-300 outline-none w-full px-4 py-1 rounded-md bg-transparent"
      />
    </div>
  );
};

export default Input;
