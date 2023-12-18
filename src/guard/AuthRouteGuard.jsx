import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

const AuthRouteGuard = ({ children }) => {
  const token = Cookies.get("token");
  if (token) {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
};

export default AuthRouteGuard;
