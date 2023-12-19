import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

const ProductRouteGuard = ({ children }) => {
  const token = Cookies.get("token");
  if (token) {
    return children;
  } else {
    return <Navigate to={`/sign-in`} />;
  }
};

export default ProductRouteGuard;
