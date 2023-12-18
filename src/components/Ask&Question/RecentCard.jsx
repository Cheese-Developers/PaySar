import React from "react";
import { BiMessageDetail } from "react-icons/bi";

const RecentCard = ({ title, img }) => {
  return (
    <div className="flex flex-col gap-3 text-secondary border-b border-b-gray-600 pb-2">
      <div className="flex items-center gap-3">
        <BiMessageDetail size={20} />
        <h5 className="font-medium text-lg">{title}</h5>
        <div className="flex items-center gap-2">
          <span>by</span>
          <div className="w-4 h-4 overflow-hidden rounded-full">
            <img src={img} alt="" className="w-4 h-4 object-cover" />
          </div>
          <span className="text-white">Anonymous</span>
        </div>
      </div>
      <span className="text-sm text-gray-500 ml-8">45 minutes ago</span>
    </div>
  );
};

export default RecentCard;
