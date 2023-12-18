import React from "react";
import { useUser } from "../hooks/useUser";
import { formatDate } from "../utils/formatDate";
import { useUserDetailQuery } from "../redux/service/api/authApi";
import Cookies from "js-cookie";
import { useGetPostQuery } from "../redux/service/api/postApi";
import QuestionCard from "../components/Ask&Question/QuestionCard";
import RecentCard from "../components/Ask&Question/RecentCard";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const token = Cookies.get("token");
  const { data, error, isLoading } = useUserDetailQuery(token);

  const {
    questions,
    error: questionsError,
    isLoading: questionsLoading,
  } = useGetPostQuery(token);

  console.log(questionsError);

  const navigate = useNavigate();

  const anonymous_img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPb_pSj-ir-9eB6mi0lVJdQP1KKHiB8fRBS1CbmOXGd9Z1FEGMJHbEKhahwhWLGSaEXY&usqp=CAU";

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
          <div className="py-12 w-[65%] mx-auto">
            <div className="user-information text-secondary font-medium flex flex-col justify-center items-center gap-6">
              <div className="w-48 h-48 overflow-hidden rounded-full">
                <img
                  src={data?.image_url ? data?.image_url : anonymous_img}
                  alt=""
                  className="w-48 h-48 object-cover"
                />
              </div>
              <h4 className="capitalize text-2xl">{data?.username}</h4>
              <h4>{data?.email}</h4>
              <h4>
                Created At : {data?.start_date && formatDate(data?.start_date)}
              </h4>
            </div>
          </div>
        )}
        {questionsError ? (
          <div className="h-[50vh] text-secondary flex justify-center items-center gap-4 w-[65%] mx-auto flex-col">
            <h3 className="text-4xl mb-3">
              You have created any{" "}
              <span className="font-curve font-semibold">PaySar</span> yet.
            </h3>
            <p className="text-gray-300 text-2xl mb-3">
              Why don't you create PaySar and send it to your friend.
            </p>
            <Button
              text={"Ask Question Now"}
              onClick={() => navigate(`/user/${data?.username}/ask-question`)}
            />
          </div>
        ) : (
          <div className="min-h-full flex justify-between gap-4 w-[65%] mx-auto pt-10">
            <div className="flex w-[60%] flex-col gap-6">
              {questions?.data.map((question) => (
                <QuestionCard
                  key={question.id}
                  {...question}
                  img={anonymous_img}
                />
              ))}
            </div>
            <div className="flex flex-col w-[40%]">
              <h3 className="text-2xl font-semibold mb-4">Recent Topics</h3>
              <div className="flex flex-col gap-10">
                {questions?.data.map((question) => (
                  <RecentCard
                    key={question.id}
                    {...question}
                    img={anonymous_img}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
