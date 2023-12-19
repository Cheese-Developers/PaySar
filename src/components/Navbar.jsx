import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNavLink } from "../hooks/useNavLink";
import { useToken } from "../hooks/useToken";
import { useLogoutMutation } from "../redux/service/api/authApi";
import { useDispatch } from "react-redux";
import { removeUserToken } from "../redux/service/slice/userTokenSlice";
import { openModalCustom } from "./ui/Modal";
import { Text } from "@mantine/core";

const Navbar = () => {
  const { token } = useToken();
  const { links, authLinks } = useNavLink();
  const [logout, { isLoading }] = useLogoutMutation();
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await logout(token);
      const { data, error } = res;
      console.log(data, error);
      if (data?.data) {
        dispatch(removeUserToken());
        setLogoutModalOpen(false);
        navigate("/sign-in");
      } else {
        console.log(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const openLogoutModal = () => {
    setLogoutModalOpen(true);
    openModalCustom({
      title: "Logout Confirmation",
      children: (
        <Text size="sm">
          We'll miss you! 😢 Are you sure you want to log out of your profile
          for now?
        </Text>
      ),
      confirmText: "Sure, log me out",
      cancelText: "No, I'll stay",
      onConfirm: logoutHandler,
      onCancel: () => setLogoutModalOpen(false),
    });
  };

  return (
    <nav className={"h-24 text-secondary bg-primary sticky top-0 z-50"}>
      <div className="w-[65%] mx-auto flex justify-between items-center h-full">
        <h3 className="text-4xl font-bold font-curve">PaySar</h3>
        <ul className="flex justify-center items-center gap-8">
          {token
            ? links.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.to}
                    className="uppercase outline-none font-medium text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))
            : authLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.to}
                    className="uppercase outline-none font-medium text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
          {token && (
            <li>
              <button
                onClick={openLogoutModal}
                className="uppercase font-medium text-sm outline-none"
              >
                Logout
              </button>
            </li>
          )}
          {/* {token ? (
            <Link to={"/"} className="uppercase font-medium text-sm">
              home
            </Link>
          ) : (
            <li>
              <Link to={"/sign-up"} className="uppercase font-medium text-sm">
                sign up
              </Link>
            </li>
          )}
          {token ? (
            <li>
              <Link to={"/profile"} className="uppercase font-medium text-sm">
                profile
              </Link>
            </li>
          ) : (
            <li>
              <Link to={"/sign-in"} className="uppercase font-medium text-sm">
                sign in
              </Link>
            </li>
          )}
          {token ? (
            <li>
              <Link
                to={`/user/${data?.username}/ask-question`}
                className="uppercase font-medium text-sm"
              >
                ask question
              </Link>
            </li>
          ) : (
            <li>
              <Link to={"/sign-up"} className="uppercase font-medium text-sm">
                get started
              </Link>
            </li>
          )} */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
