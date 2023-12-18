import React, { useEffect, useState } from "react";
import CreateForm from "../components/Ask&Question/CreateForm";
import { useNavigate, useParams } from "react-router-dom";
import "./page.css";
import Cookies from "js-cookie";
import { useUserInfoQuery } from "../redux/service/api/userApi";
import UserSelection from "../components/Ask&Question/UserSelection";

const default_img =
  "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg";

const AskQuestionPage = () => {
  const { name } = useParams();
  const token = Cookies.get("token");
  const [selectedUser, setSelectedUser] = useState(null);
  const { data, error, isLoading } = useUserInfoQuery(name);

  useEffect(() => {
    if (data) {
      const stringyData = JSON.stringify(data);

      const expirationTimeInMinutes = 45;
      const expirationDate = new Date(
        new Date().getTime() + expirationTimeInMinutes * 60 * 1000
      );

      Cookies.set("user", stringyData, { expires: expirationDate });
    }
  }, [data]);

  return (
    <div className="pt-32">
      <div className="mb-14">
        <h3 className="text-3xl font-semibold text-center text-secondary">
          Ask Question
        </h3>
      </div>
      <div className="bg-slate-950/90 min-h-full">
        {isLoading ? (
          <div className="h-screen text-5xl text-white flex justify-center items-center">
            Loading...
          </div>
        ) : (
          <div className="py-12 w-[65%] mx-auto">
            <div className="user-information text-secondary font-medium flex flex-col gap-2">
              <div className="font-curve text-lg font-semibold flex gap-2 items-center mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={data?.image_url ? data?.image_url : default_img}
                    alt=""
                    className="w-10 h-10 object-cover"
                  />
                </div>
                <span> Ask 😊</span>{" "}
              </div>
              <h3 className="capitalize flex gap-2">
                <span className="font-curve"> Name</span> :{" "}
                <h4 className="font-bold">
                  <span>{data?.username}</span>
                </h4>
              </h3>
              <h3 className="capitalize flex gap-2">
                <span className="font-curve"> About</span> :{" "}
                <h4 className="font-bold">
                  <span>
                    {data?.about
                      ? data?.about
                      : "Ohh!! Hey, hello. What on your mind?"}
                  </span>
                </h4>
              </h3>
              {token && (
                <h3 className="flex gap-2">
                  <span className="font-curve"> Email</span> :{" "}
                  <span className="font-bold">{data?.email}</span>
                </h3>
              )}
            </div>
          </div>
        )}
        {token && (
          <UserSelection
            token={token}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            default_img={default_img}
          />
        )}
        <CreateForm userInfo={data} selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default AskQuestionPage;
