import React from "react";
import Cookies from "js-cookie";
import ProfilePost from "../components/profile/ProfilePost";
import { useGetPostQuery } from "../redux/service/api/postApi";
import { useUserDetailQuery } from "../redux/service/api/userApi";
import UserInfoProfile from "../components/profile/UserInfoProfile";
import { reverseData } from "../utils/reverseData";

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
      <div className="mb-14">
        <h3 className="text-3xl font-semibold text-center text-secondary">
          About Me
        </h3>
      </div>
      <div className="bg-slate-950/90 min-h-screen">
        {isLoading ? (
          <div className="h-screen">Loading...</div>
        ) : error ? (
          <div>Error : {error}</div>
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
