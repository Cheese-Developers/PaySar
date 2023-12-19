import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserToken } from "../redux/service/slice/userTokenSlice";

export const useToken = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userToken);

  const cookieToken = Cookies.get("token");

  useEffect(() => {
    if (cookieToken) {
      dispatch(addUserToken(cookieToken));
    }
  }, [dispatch, cookieToken]);

  return token;
};
