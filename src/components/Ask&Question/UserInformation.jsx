import React from "react";

const UserInformation = ({ token, data, default_img }) => {
  return (
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
        <span className="font-curve"> Bio</span> :{" "}
        <h4 className="font-bold">
          <span>
            {data?.description
              ? data?.description
              : "Ohh!! Hey, hello. What's on your mind?"}
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
  );
};

export default UserInformation;
