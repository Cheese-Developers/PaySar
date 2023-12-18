import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import "./profile.css";
import { useGetImagesQuery } from "../../redux/service/api/userApi";

const ImageSelection = ({ user, setUser }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { data } = useGetImagesQuery();

  return (
    <>
      <div
        className="w-28 h-28 rounded-full overflow-hidden cursor-pointer"
        onClick={() => open()}
      >
        <img src={user.image_url} alt="" className="w-28 h-28 object-cover" />
      </div>
      <Modal
        opened={opened}
        onClose={close}
        title="Select Image"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        transitionProps={{ transition: "fade", duration: 200 }}
        centered
      >
        <div className="flex flex-wrap justify-center gap-4">
          {data?.images.map((img) => (
            <div
              key={img}
              onClick={() => setSelectedImage(img)}
              className={`w-14 h-14 rounded-full overflow-hidden border-4 ${
                selectedImage === img ? "border-primary" : "border-gray-500"
              }`}
            >
              <img src={img} alt="img" className="object-cover" />
            </div>
          ))}
          <div className="flex gap-3">
            <button
              onClick={() => {
                close();
                setUser((prev) => ({ ...prev }));
              }}
              className="bg-primary rounded-md text-secondary font-semibold uppercase text-sm px-5 py-1.5"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                close();
                setUser((prev) => ({ ...prev, image_url: selectedImage }));
              }}
              className="bg-primary rounded-md text-secondary font-semibold uppercase text-sm px-5 py-1.5"
            >
              Select
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ImageSelection;
