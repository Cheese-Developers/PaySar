import React from "react";
import { DiCoffeescript } from "react-icons/di";
import { BsCalendar3 } from "react-icons/bs";
import Button from "../ui/Button";

const QuestionCard = ({ title, content, img }) => {
  return (
    <div className="h-96 p-5 rounded-lg bg-slate-800 flex justify-center flex-col shadow-md">
      <div className="flex gap-4 mb-6">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={img} alt="" className="object-cover w-10 h-10" />
        </div>
        <div className="flex items-center gap-3 text-sm">
          <DiCoffeescript
            size={24}
            className="text-gray-400 hover:text-gray-200 duration-150"
          />
          <span className="text-gray-400 hover:text-gray-200 duration-150">
            Guest
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <BsCalendar3
            size={18}
            className="text-gray-400 hover:text-gray-200 duration-150"
          />
          <span className="text-gray-400 hover:text-gray-200 duration-150">
            December 16, 2023 at 2:45 pm
          </span>
        </div>
      </div>
      <div className="flex gap-4">
        <h3 className="text-3xl font-semibold pb-3">Q:</h3>
        <div className="question flex flex-col gap-2">
          <h4 className="text-xl font-semibold">{title}</h4>
          <h4 className="text-base text-gray-200 border-b border-b-gray-600 pb-2">
            {content}
          </h4>
          <div className="mt-4">
            <Button text={"Reply"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
