import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export const useToken = () => {
  const [token, setToken] = useState();
  const cookieToken = Cookies.get("token");

  useEffect(() => {
    setToken(cookieToken);
  }, [cookieToken]);

  return token;
};
