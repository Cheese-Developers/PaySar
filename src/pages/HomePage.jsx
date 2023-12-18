import React from "react";

import { useGetReceivePaySarQuery } from "../redux/service/api/postApi";
import Cookies from "js-cookie";
import ProfilePost from "../components/profile/ProfilePost";
import { reverseData } from "../utils/reverseData";

const HomePage = () => {
  const token = Cookies.get("token");
  const { data: questions, error, isLoading } = useGetReceivePaySarQuery(token);

  const reverseQuestion = reverseData(questions);

  return (
    <div className="text-white pt-32">
      <div className="flex flex-col justify-center items-center w-full gap-4">
        <h4 className="text-4xl font-semibold mb-3 font-curve">
          👋 Hey!! Are you feel lonely?
        </h4>
        <p className="text-xl font-medium">
          Why don't you ask and write fun question to the world?
        </p>
        <p className="text-xl font-medium">
          We are lovely to here your thought 😊
        </p>
      </div>

      <div className="bg-slate-950/90 py-14 mt-14">
        {isLoading ? (
          <div className="py-12 min-h-[450px] flex justify-center items-center">
            <h3 className="text-secondary font-semibold text-3xl">
              Loading...
            </h3>
          </div>
        ) : (
          <ProfilePost
            questions={reverseQuestion}
            error={error}
            isLoading={isLoading}
            home={true}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
