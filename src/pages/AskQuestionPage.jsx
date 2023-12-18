import React, { useEffect, useState } from "react";
import CreateForm from "../components/Ask&Question/CreateForm";
import { useNavigate, useParams } from "react-router-dom";
import { useUserInfoQuery } from "../redux/service/api/authApi";
import "./page.css";
import Cookies from "js-cookie";

const AskQuestionPage = () => {
  const { name } = useParams();
  const token = Cookies.get("token");
  const [selectedUser, setSelectedUser] = useState(null);
  console.log(name);
  const { data, error, isLoading } = useUserInfoQuery(name);
  const navigate = useNavigate();

  console.log(data);

  useEffect(() => {
    if (data) {
      const stringyData = JSON.stringify(data);

      const expirationTimeInMinutes = 45;
      const expirationDate = new Date(
        new Date().getTime() + expirationTimeInMinutes * 60 * 1000
      );

      Cookies.set("user", stringyData, { expires: expirationDate });
    }
    console.log("hi");
  }, [data]);

  const users = [
    {
      image_url:
        "https://i.pinimg.com/564x/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg",
      username: "sutpi",
      user_id: 1,
    },
    {
      image_url:
        "https://i.pinimg.com/564x/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg",
      username: "ui",
      user_id: 2,
    },
    {
      image_url:
        "https://i.pinimg.com/564x/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg",
      username: "kmk@77",
      user_id: 3,
    },
    {
      image_url:
        "https://i.pinimg.com/564x/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg",
      username: "four",
      user_id: 4,
    },
    {
      image_url:
        "https://i.pinimg.com/564x/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg",
      username: "five",
      user_id: 5,
    },
    {
      image_url:
        "https://i.pinimg.com/564x/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg",
      username: "six",
      user_id: 6,
    },
    {
      image_url:
        "https://i.pinimg.com/564x/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg",
      username: "seven",
      user_id: 7,
    },
    {
      image_url:
        "https://i.pinimg.com/564x/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg",
      username: "eight",
      user_id: 8,
    },
    {
      image_url:
        "https://i.pinimg.com/564x/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg",
      username: "nine",
      user_id: 9,
    },
    {
      image_url:
        "https://i.pinimg.com/564x/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg",
      username: "ten",
      user_id: 10,
    },
    {
      image_url:
        "https://i.pinimg.com/564x/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg",
      username: "eleven",
      user_id: 11,
    },
    {
      image_url:
        "https://i.pinimg.com/564x/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg",
      username: "twelve",
      user_id: 12,
    },
    {
      image_url:
        "https://i.pinimg.com/564x/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg",
      username: "thirteen",
      user_id: 13,
    },
    {
      image_url:
        "https://i.pinimg.com/564x/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg",
      username: "fourteen",
      user_id: 14,
    },
    {
      image_url:
        "https://i.pinimg.com/564x/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg",
      username: "fifteen",
      user_id: 15,
    },
    {
      image_url:
        "https://i.pinimg.com/564x/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg",
      username: "sixteen",
      user_id: 16,
    },
    {
      image_url:
        "https://i.pinimg.com/564x/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg",
      username: "seventeen",
      user_id: 17,
    },
  ];

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
                    src={data?.image_url}
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
          <div className="user-selection w-[65%] mx-auto overflow-scroll scrollbar">
            <div className="flex flex-row gap-5">
              {users.map((user) => (
                <div
                  className=""
                  onClick={() =>
                    navigate(`/user/${user.username}/ask-question`)
                  }
                >
                  <div
                    key={user.user_id}
                    className={` w-24 h-24 rounded-full flex justify-center items-center ${
                      selectedUser === user.user_id
                        ? "border-4 border-primary"
                        : ""
                    } p-1`}
                    onClick={() => setSelectedUser(user.user_id)}
                  >
                    <img
                      src={user.image_url}
                      className="w-20 h-20 object-cover rounded-full"
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <CreateForm data={data} selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default AskQuestionPage;
