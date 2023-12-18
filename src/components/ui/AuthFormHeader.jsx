import React from "react";
import { RxEnvelopeClosed } from "react-icons/rx";

const AuthFormHeader = ({ text }) => {
  return (
    <div className="">
      <h3 className="font-semibold font-curve text-2xl mb-4 text-center relative">
        {text} Form
        <RxEnvelopeClosed
          size={18}
          strokeWidth={0.5}
          className="-rotate-45 absolute -top-2 left-[30%]"
        />
      </h3>
    </div>
  );
};

export default AuthFormHeader;
