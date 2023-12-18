import React from "react";
import { useGetAllUsersQuery } from "../../redux/service/api/userApi";
import { useNavigate } from "react-router-dom";

const UserSelection = ({
  token,
  selectedUser,
  setSelectedUser,
  default_img,
}) => {
  const { data: users, error, isLoading } = useGetAllUsersQuery(token);

  const navigate = useNavigate();

  return (
    <div className="user-selection w-[65%] mx-auto overflow-scroll scrollbar">
      <div className="flex flex-row gap-5">
        {users &&
          users.map((user) => (
            <div
              className=""
              onClick={() => {
                // const trimUsername = user.username.trim(" ");
                // const trimUsernameWithoutSpace = trimUsername.replace(
                //   /\s+/,
                //   ""
                // );
                navigate(`/user/${user?.username}/ask-question`);
              }}
            >
              <div
                key={user.username}
                className={` w-24 h-24 rounded-full flex justify-center items-center ${
                  selectedUser === user.username
                    ? "border-4 border-primary"
                    : ""
                } p-1`}
                onClick={() => setSelectedUser(user.username)}
              >
                <img
                  src={user?.image_url ? user.image_url : default_img}
                  className="w-20 h-20 object-cover rounded-full"
                  alt=""
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserSelection;
