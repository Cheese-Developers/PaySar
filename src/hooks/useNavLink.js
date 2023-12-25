import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useToken } from "./useToken";
import { useUserDetailQuery } from "../redux/service/api/userApi";

export const useNavLink = () => {
  const { token } = useToken();
  const { data, error, isLoading } = useUserDetailQuery(token);
  console.log(data);

  const [user, setUser] = useState(null);
  useEffect(() => {
    const cookieUser = Cookies.get("user");
    if (cookieUser) {
      setUser(JSON.parse(cookieUser));
    }
  }, []);

  const authLinks = [
    {
      id: "ask-question",
      to: user
        ? `/user/${
            data?.username ? data?.username : user && user?.username
          }/ask-question`
        : "/sign-in",
      name: `${user?.username ? "ask question" : "get started"}`,
    },
    { id: "signin", to: "/sign-in", name: "sign in" },
    { id: "signup", to: "/sign-up", name: "sign up" },
  ];

  const links = [
    { id: "home", to: "/", name: "home" },
    { id: "profile", to: "/profile", name: "profile" },
    {
      id: "ask-question",
      to: `/user/${data?.username}/ask-question`,
      name: "ask question",
    },
  ];

  console.log(data, error, "from useNavLink");

  return { authLinks, links, isLoading };
};
