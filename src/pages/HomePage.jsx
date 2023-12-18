import React from "react";
import { BsSearch } from "react-icons/bs";
import QuestionCard from "../components/Ask&Question/QuestionCard";
import RecentCard from "../components/Ask&Question/RecentCard";

const questions = [
  {
    id: 1,
    title: "First Question",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam esse accusantium corporis, facilis alias praesentium consectetur cupiditate adipisci laborum eaque ipsa ea id doloribus commodi architecto. Corrupti, inventore! Quidem, aliquam?",
  },
  {
    id: 2,
    title: "Second Question",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam esse accusantium corporis, facilis alias praesentium consectetur cupiditate adipisci laborum eaque ipsa ea id doloribus commodi architecto. Corrupti, inventore! Quidem, aliquam?",
  },
  {
    id: 3,
    title: "Third Question",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam esse accusantium corporis, facilis alias praesentium consectetur cupiditate adipisci laborum eaque ipsa ea id doloribus commodi architecto. Corrupti, inventore! Quidem, aliquam?",
  },
];

const anonymous_img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPb_pSj-ir-9eB6mi0lVJdQP1KKHiB8fRBS1CbmOXGd9Z1FEGMJHbEKhahwhWLGSaEXY&usqp=CAU";

const HomePage = () => {
  return (
    <div className="text-white pt-32">
      <div className="">
        <div className="bg-secondary/80 border rounded-full px-5 p-2 w-2/5 mx-auto flex items-center justify-between gap-5">
          <input
            type="text"
            placeholder="Search your ask question ...."
            className="bg-transparent text-gray-600 outline-none"
          />

          <BsSearch size={20} className="text-gray-600" />
        </div>
      </div>
      <div className="bg-slate-950/90 py-10 mt-14">
        <div className="min-h-full flex justify-between gap-4 w-[65%] mx-auto pt-10">
          <div className="flex w-[60%] flex-col gap-6">
            {questions.map((question) => (
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
              {questions.map((question) => (
                <RecentCard
                  key={question.id}
                  {...question}
                  img={anonymous_img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
