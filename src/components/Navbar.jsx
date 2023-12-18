import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useUserDetailQuery } from "../redux/service/api/userApi";

const Navbar = () => {
  const token = Cookies.get("token");
  const { data, error } = useUserDetailQuery(token);
  const [user, setUser] = useState(null);

  const cookieUser = Cookies.get("user");

  useEffect(() => {
    if (cookieUser) {
      setUser(JSON.parse(cookieUser));
    }
  }, [cookieUser]);

  const authLinks = [
    { id: "signup", to: "/sign-up", name: "sign up" },
    { id: "signin", to: "/sign-in", name: "sign in" },
    {
      id: "ask-question",
      to: user
        ? `/user/${
            data?.username ? data?.username : user && user.username
          }/ask-question`
        : "sign-up",
      name: user ? "ask question" : "get started",
    },
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

  return (
    <nav className={"h-24 text-secondary bg-primary relative"}>
      <div className="w-[65%] mx-auto flex justify-between items-center h-full">
        <h3 className="text-4xl font-bold font-curve">PaySar</h3>
        <ul className="flex justify-center items-center gap-8">
          {data?.is_freeze === 0
            ? links.map((link) => (
                <li key={link.id}>
                  <Link to={link.to} className="uppercase font-medium text-sm">
                    {link.name}
                  </Link>
                </li>
              ))
            : authLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.to} className="uppercase font-medium text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
