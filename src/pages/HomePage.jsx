import React from "react";

import { useGetReceivePaySarQuery } from "../redux/service/api/postApi";
import PostContents from "../components/profile/PostContents";
import { reverseData } from "../utils/reverseData";
import Vector from "../svg/Vector.svg";

import "./page.css";
import SectionText from "../components/ui/SectionText";
import Cookies from "js-cookie";

const HomePage = () => {
  const token = Cookies.get("token");
  const { data: questions, error, isLoading } = useGetReceivePaySarQuery(token);

  console.log(questions);

  const reverseQuestion = reverseData(questions?.result);

  return (
    <div className="text-white pt-32">
      <SectionText>
        <div className="flex flex-col justify-center items-center w-full h-full z-[2]">
          <h4 className="text-3xl md:text-4xl font-semibold font-curve mb-4 text-center drop-shadow-2xl">
            👋 Hey!! Are you feeling lonely?
          </h4>
          <p className="text-lg md:text-xl font-medium drop-shadow-xl text-center">
            Why don't you ask and write a fun question to the world?
          </p>
          <p className="text-lg md:text-xl font-medium drop-shadow-xl text-center">
            We are lovely to hear your thoughts 😊
          </p>
        </div>
      </SectionText>
      <div className="bg-slate-950/90 pb-14">
        <img src={Vector} alt="" className="w-screen" />

        {isLoading ? (
          <div className="py-12 min-h-[450px] flex justify-center items-center">
            <h3 className="text-secondary font-semibold text-3xl">
              Loading...
            </h3>
          </div>
        ) : (
          <PostContents
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
