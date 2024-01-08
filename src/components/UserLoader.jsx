import React from "react";
import Lottie from "lottie-react";
import userData from "../../src/assets/UserLoader.json";
const UserLoader = () => {
  return (
    <div className=" min-h-screen bg-primary flex justify-center items-center">
      <div className="flex  flex-col justify-center items-center">
        <Lottie
          animationData={userData}
          className="lg:w-[400px] md:w-[400px] w-[250px]"
        />
        <div className="flex flex-col justify-center gap-y-3 items-center">
          <h2 className="text-white font-serif  font-bold text-[24px] md:text-[30px]">
            May Be longer than 1 min! 🥺
          </h2>
          <h2 className="text-white font-serif  font-bold text-[24px] md:text-[30px]">
            Server is staring ...🚀
          </h2>
        </div>
      </div>
    </div>
  );
};

export default UserLoader;
