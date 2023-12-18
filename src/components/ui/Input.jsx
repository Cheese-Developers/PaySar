import React from "react";

const Input = ({
  text,
  id,
  type = "text",
  value,
  onChange,
  required = false,
  textColor = "text-gray-700",
}) => {
  return (
    <div className="mb-3 flex flex-col gap-3">
      <label htmlFor={id} className={`${textColor}`}>
        {text}
      </label>
      <input
        type={type}
        id={id}
        placeholder={text}
        value={value}
        required={required}
        onChange={onChange}
        className={`${textColor} border border-gray-300 outline-none w-full px-4 py-1 rounded-md bg-transparent`}
      />
    </div>
  );
};

export default Input;
