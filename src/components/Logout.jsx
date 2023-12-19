import React, { useState } from "react";
import { useLogoutMutation } from "../redux/service/api/authApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { openModalCustom } from "./ui/Modal";
import { Text } from "@mantine/core";
import { removeUserToken } from "../redux/service/slice/userTokenSlice";

const Logout = ({ close }) => {
  const token = Cookies.get("token");
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
        close();
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
    <>
      {token && (
        <li>
          <button
            onClick={openLogoutModal}
            className="uppercase md:font-medium md:text-sm font-semibold text-2xl outline-none"
          >
            Logout
          </button>
        </li>
      )}
    </>
  );
};

export default Logout;
