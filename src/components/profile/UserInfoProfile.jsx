import React from "react";
import { formatDate } from "../../utils/formatDate";
import { AiOutlineEdit } from "react-icons/ai";
import EditModal from "./EditModal";
import { useDisclosure } from "@mantine/hooks";

const UserInfoProfile = ({
  image_url,
  email,
  username,
  start_date,
  token,
  description,
}) => {
  const user = { image_url, email, username, description };
  const [opened, { open, close }] = useDisclosure(false);

  const anonymous_img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPb_pSj-ir-9eB6mi0lVJdQP1KKHiB8fRBS1CbmOXGd9Z1FEGMJHbEKhahwhWLGSaEXY&usqp=CAU";

  return (
    <div className="pt-12 w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%] mx-auto">
      <div className="user-information bg-slate-900 rounded-lg shadow-2xl text-secondary font-medium flex flex-col justify-center items-center gap-6 w-[95%] md:w-[70%] lg:w-[65%] xl:w-[60%] mx-auto py-10">
        <div className="w-48 h-48 overflow-hidden rounded-full">
          <img
            src={image_url ? image_url : anonymous_img}
            alt=""
            className="w-48 h-48 object-cover"
          />
        </div>
        <h4 className="capitalize text-2xl">{username}</h4>
        <h4>{email}</h4>
        {description && (
          <div>
            <h4>About</h4>
            <p>{description}</p>
          </div>
        )}
        <h4>Created At : {start_date && formatDate(start_date)}</h4>
        {token && (
          <button onClick={() => open()}>
            <AiOutlineEdit size={23} color="white" />
          </button>
        )}
      </div>
      <EditModal editOpened={opened} editClose={close} oldData={user} />
    </div>
  );
};

export default UserInfoProfile;
