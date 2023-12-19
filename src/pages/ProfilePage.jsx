import React from "react";
import Cookies from "js-cookie";
import ProfilePost from "../components/profile/ProfilePost";
import { useGetPostQuery } from "../redux/service/api/postApi";
import { useUserDetailQuery } from "../redux/service/api/userApi";
import UserInfoProfile from "../components/profile/UserInfoProfile";
import { reverseData } from "../utils/reverseData";
import SectionText from "../components/ui/SectionText";
import Vector from "../svg/Vector.svg";

const ProfilePage = () => {
  const token = Cookies.get("token");
  const { data, error, isLoading } = useUserDetailQuery(token);

  const {
    data: questions,
    error: questionError,
    isLoading: questionLoading,
  } = useGetPostQuery(token);

  const reverseQuestions = reverseData(questions);

  return (
    <div className="pt-32">
      <SectionText>
        <div className="flex flex-col justify-center items-center text-secondary w-2/5 mx-auto h-full z-[2]">
          <h3 className="text-4xl font-semibold font-curve mb-4 text-center drop-shadow-2xl">
            🎶 Life is a fleeting melody, so let's make every note count. 🎶
          </h3>
          <p className="text-xl font-semibold mb-4 text-center drop-shadow-xl">
            In the brief tapestry of existence, let's dance with joy, embracing
            the symphony of life until our final bow. 🌟
          </p>
          <p className="text-xl font-semibold drop-shadow-xl">About Me</p>
        </div>
      </SectionText>

      <div className="bg-slate-950/90 min-h-screen">
        <img src={Vector} alt="" className="w-screen" />

        {isLoading ? (
          <div className="h-screen">Loading...</div>
        ) : error ? (
          <div>Error : error</div>
        ) : (
          <UserInfoProfile {...data} token={token} />
        )}
        <ProfilePost
          questions={reverseQuestions}
          error={questionError}
          isLoading={questionLoading}
          home={false}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
