import React, { useState } from "react";
import { DiCoffeescript } from "react-icons/di";
import { BsCalendar3 } from "react-icons/bs";
import { formatDate } from "../../utils/formatDate";
import { Popover, Button, Text } from "@mantine/core";
import "./ask-question.css";
import { useReplyPaySarMutation } from "../../redux/service/api/postApi";
import { openModalCustom } from "../ui/Modal";

const QuestionCard = ({
  title,
  content,
  img,
  sent_date,
  paysar_id,
  token,
  username,
  home,
}) => {
  const [reply, setReply] = useState("");
  const [replyPaySar, { isLoading }] = useReplyPaySarMutation();
  const replyHandler = async () => {
    try {
      const paysar = { paysarId: paysar_id, replay: reply };
      const res = await replyPaySar({ token, paysar: paysar });
      const { data, error } = res;
      // console.log(data, error);
      if (data?.data) {
        alert(data.msg);
      } else {
        alert(error.data.msg);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const openReplyModal = () => {
    const trimReply = reply.trim(" ");
    if (trimReply.length === 0) {
      return alert("Reply is empty");
    }
    openModalCustom({
      title: "Reply Confirmation",
      children: (
        <Text size="sm">
          Are you really ready to reply to this message? Don't worry; we will
          keep you as a <span className="font-semibold italic">Anonymous</span>
          😊
        </Text>
      ),
      confirmText: "Why not! 🚀",
      cancelText: "Let me think 🤔",
      onConfirm: replyHandler,
      onCancel: () => {},
    });
  };

  // console.log(username);

  return (
    <div className="min-h-min p-5 rounded-lg bg-slate-800 flex justify-center flex-col shadow-md">
      <div className="flex gap-4 mb-6">
        <div className="">
          <img src={img} alt="" className="rounded-full w-10" />
        </div>
        <div className="flex items-center gap-3 text-sm">
          <DiCoffeescript
            size={24}
            className="text-gray-400 hover:text-gray-200 duration-150"
          />
          <span className="text-gray-400 hover:text-gray-200 duration-150">
            {username ? username : "Anonymous"}
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <BsCalendar3
            size={18}
            className="text-gray-400 hover:text-gray-200 duration-150"
          />
          <span className="text-gray-400 hover:text-gray-200 duration-150">
            {formatDate(sent_date)}
          </span>
        </div>
      </div>
      <div className="flex gap-4">
        <h3 className="text-3xl font-semibold pb-3">Q:</h3>
        <div className="question flex flex-col w-full gap-2">
          <h4 className="text-xl font-semibold">{title}</h4>
          <div
            className="text-base text-gray-200"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <hr className="border-b border-b-gray-600 bg-transparent border-t-0 pb-2" />
          <div className="mt-4">
            {token && home && (
              <Popover
                width={350}
                trapFocus
                position="bottom"
                withArrow
                zIndex={10}
                offset={{ mainAxis: 10, crossAxis: 90 }}
                shadow="xl"
              >
                <Popover.Target>
                  <Button color="white" bg={"#FF90BC"} className="outline-none">
                    Reply
                  </Button>
                </Popover.Target>
                <Popover.Dropdown>
                  <div className="text-secondary">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={img} alt="" className="w-8 h-8 rounded-full" />
                      <h3 className="text-sm font-semibold">Anonymous</h3>
                    </div>
                    <textarea
                      name=""
                      id=""
                      rows={"4"}
                      value={reply}
                      required
                      onChange={(e) => setReply(e.target.value)}
                      className="w-full text-sm outline-none rounded-md resize-none placeholder:italic placeholder:text-sm text-gray-600 px-2 py-1"
                      placeholder="Reply here ..."
                    />

                    <button
                      onClick={openReplyModal}
                      className="bg-secondary rounded-md text-primary font-semibold active:scale-95 text-sm px-5 py-1.5"
                    >
                      Send Now
                    </button>
                  </div>
                </Popover.Dropdown>
              </Popover>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
