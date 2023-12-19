import React from "react";
import {
  useGetAllUsersQuery,
  useUserDetailQuery,
} from "../../redux/service/api/userApi";
import { useNavigate } from "react-router-dom";

const UserSelection = ({
  token,
  selectedUser,
  setSelectedUser,
  default_img,
}) => {
  const { data: users, error, isLoading } = useGetAllUsersQuery(token);
  const { data: loginUserDetail } = useUserDetailQuery(token);

  const navigate = useNavigate();
  const filterUsers = users?.filter(
    (user) => user.username !== loginUserDetail?.username
  );

  return (
    <div className="relative w-[97%] md:w-[80%] lg:w-[70%] xl:w-[65%] mx-auto">
      <div className="user-selection w-full mx-auto overflow-scroll scrollbar">
        <div className="flex flex-row gap-4 md:gap-10 lg:gap-14 xl:gap-16">
          {users &&
            filterUsers.map((user) => (
              <div
                className=""
                onClick={() => {
                  navigate(`/user/${user?.username}/ask-question`);
                }}
              >
                <div
                  key={user.username}
                  className={` w-16 h-16 md:w-24 md:h-24 rounded-full flex justify-center items-center ${
                    selectedUser === user.username
                      ? "border-4 border-primary"
                      : ""
                  } md:p-1`}
                  onClick={() => setSelectedUser(user.username)}
                >
                  <img
                    src={user?.image_url ? user.image_url : default_img}
                    className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full"
                    alt=""
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserSelection;
