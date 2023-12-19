import React from "react";

const AuthForm = ({ onSubmit, children }) => {
  return (
    <form className="flex flex-col gap-2 md:gap-4 w-full" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default AuthForm;
