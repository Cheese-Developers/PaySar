import { Modal, Text } from "@mantine/core";
import React, { useState } from "react";
import "./profile.css";
import Input from "../ui/Input";
import Button from "../ui/Button";
import ImageSelection from "./ImageSelection";
import { useUserUpdateMutation } from "../../redux/service/api/userApi";
import Cookies from "js-cookie";
import { openModalCustom } from "../ui/Modal";
import Swal from "sweetalert2";

const EditModal = ({ editOpened, editClose, oldData }) => {
  const token = Cookies.get("token");
  const [user, setUser] = useState({
    image_url: oldData.image_url,
    username: oldData.username,
    description: oldData.description,
  });

  const [userUpdate, { isLoading }] = useUserUpdateMutation();

  const updatedHandler = async () => {
    try {
      const res = await userUpdate({ token, user });
      const { data, error } = res;

      console.log(data, error);
      if (data?.data) {
        Swal.fire({
          title: "Update Success",
          icon: "success",
          text: "You have successfully updated your profile",
        });
      } else {
        Swal.fire({
          title: "Failed to update your profile",
          icon: "error",
          text:
            error?.data.msg || "While updating your profile an error occurred",
        });
      }
      editClose();
    } catch (error) {
      console.error(error);
    }
  };

  const openEditModal = async (event) => {
    event.preventDefault();
    const hasChanges =
      user.image_url !== oldData.image_url ||
      user.username !== oldData.username ||
      user.description !== oldData.description;

    if (hasChanges) {
      openModalCustom({
        title: "Update Confirmation",
        children: (
          <Text size="sm">
            Are you sure you want to update your profile? 🚀✨
          </Text>
        ),
        confirmText: "Let's do it! 🌟",
        cancelText: "Wait, Let me think 🤔",
        onConfirm: updatedHandler,
        onCancel: () => {},
      });
    } else {
      Swal.fire({
        title: "You have changed yet!",
        icon: "warning",
        text: "Please change your information in order to update your profile",
      });
    }
  };

  return (
    <Modal
      opened={editOpened}
      onClose={editClose}
      title="Edit Profile"
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      transitionProps={{ transition: "fade", duration: 200 }}
      centered
    >
      <div className="flex justify-center flex-col gap-6 p-4">
        <ImageSelection user={user} setUser={setUser} />
        <form className="flex flex-col gap-4" onSubmit={openEditModal}>
          {/* <Input
            text={"Name"}
            id={"name"}
            textColor="text-gray-200"
            value={user.username}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, username: e.target.value }))
            }
          /> */}
          <div className="mb-3 flex flex-col gap-3">
            <label htmlFor={"about"} className={`text-gray-200`}>
              About
            </label>
            <textarea
              name=""
              id="about"
              cols="30"
              rows="10"
              value={user.description}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, description: e.target.value }))
              }
              placeholder="Describe yourself..."
              className="bg-transparent border border-gray-400 outline-none px-3 py-1 placeholder:italic"
            />
          </div>
          <Button text={"Update"} type="submit" />
        </form>
      </div>
    </Modal>
  );
};

export default EditModal;
