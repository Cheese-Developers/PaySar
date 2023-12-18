import { Modal } from "@mantine/core";
import React, { useState } from "react";
import "./profile.css";
import Input from "../ui/Input";
import Button from "../ui/Button";
import ImageSelection from "./ImageSelection";
import { useUserUpdateMutation } from "../../redux/service/api/userApi";
import Cookies from "js-cookie";

const EditModal = ({ editOpened, editClose, oldData }) => {
  const token = Cookies.get("token");
  const [user, setUser] = useState({
    image_url: oldData.image_url,
    username: oldData.username,
    description: oldData.description,
  });

  const [userUpdate, { isLoading }] = useUserUpdateMutation();

  const updatedHandler = async (event) => {
    event.preventDefault();
    try {
      const hasChanges =
        user.image_url !== oldData.image_url ||
        user.username !== oldData.username ||
        user.description !== oldData.description;

      if (hasChanges) {
        const res = await userUpdate({ token, user });

        const { data, error } = res;
        editClose();
      }
    } catch (error) {
      console.error(error);
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
        <form className="flex flex-col gap-4" onSubmit={updatedHandler}>
          <Input
            text={"Name"}
            id={"name"}
            textColor="text-gray-200"
            value={user.username}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, username: e.target.value }))
            }
          />
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
