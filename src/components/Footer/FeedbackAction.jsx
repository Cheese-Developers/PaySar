import Lottie from "lottie-react";
import React, { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Love from "../../assets/love.json";
import "../ui/ui.css";
import { useSendFeedbackMutation } from "../../redux/service/api/feedbackApi";
import { Radio, Text } from "@mantine/core";
import { openModalCustom } from "../ui/Modal";
import { useToken } from "../../hooks/useToken";

const FeedbackAction = () => {
  const [sendFeedback] = useSendFeedbackMutation();
  const { token } = useToken();

  const feedbackRef = useRef();
  const checkboxRefs = {
    error: useRef(),
    bad: useRef(),
    notBad: useRef(),
    good: useRef(),
  };
  const sendFeedbackHandler = async () => {
    try {
      const feedback = feedbackRef.current.value;
      const checkbox = Object.keys(checkboxRefs).find(
        (key) => checkboxRefs[key].current.checked
      );
      const feedbackData = { category: checkbox, content: feedback };
      console.log(feedbackData);
      const res = await sendFeedback({ token, data: feedbackData });
      const { data, error } = res;
      if (data?.data) {
        alert(data?.msg);
      } else {
        alert(error?.data.msg || "An error occurred");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const openFeedbackModal = (event) => {
    event.preventDefault();
    openModalCustom({
      title: "Feedback Confirmation",
      children: (
        <Text size="sm">
          We appreciate your feedback! 🌟 Are you sure you want to submit your
          thoughts to our admin team?
        </Text>
      ),
      confirmText: "Yes, submit my feedback 🚀",
      cancelText: "No, I'll rethink 🤔",
      onConfirm: sendFeedbackHandler,
      onCancel: () => {},
    });
  };

  return (
    <div className="pt-16">
      <div className="bg-primary min-h-fit rounded-lg w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%] mx-auto flex md:flex-row flex-col justify-evenly items-center gap-4 relative z-[3] p-6">
        <div className="z-[2] w-[80%]">
          <h3 className="text-white text-3xl font-curve">
            Share Your Thoughts with Our Admin Team 🌟
          </h3>
          <p className="text-secondary font-medium">
            We value your feedback and would love to hear what you have to say!
            😊
          </p>
        </div>

        <form onSubmit={openFeedbackModal} className="w-full z-[2]">
          <div className="bg-secondary border border-primary flex gap-2 w-full marker:justify-center items-center overflow-hidden rounded-md z-[2]">
            <input
              type="text"
              placeholder="Send feedback here ..."
              ref={feedbackRef}
              required
              className="placeholder:italic rounded-md w-full h-14 bg-transparent px-3 py-2
       outline-none text-gray-600 placeholder:text-gray-400 textarea-feedback"
            />
            <button type="submit" className="rounded-md bg-primary mx-2 p-3">
              <BsArrowRight size={20} className="text-secondary" />
            </button>
          </div>
          <div className="flex items-center gap-3 mt-3">
            {Object.keys(checkboxRefs).map((key) => (
              <label key={key}>
                <Radio
                  label={key}
                  value={key}
                  name="feedback"
                  color="pink"
                  required
                  ref={checkboxRefs[key]}
                  className="text-white text-lg font-semibold capitalize"
                />
              </label>
            ))}
          </div>
        </form>
        <div className="absolute z-[1] top-3 left-4">
          <Lottie animationData={Love} loop={true} className="w-20" />
        </div>
        <div className="absolute z-[1] top-0 right-2">
          <Lottie animationData={Love} loop={true} className="w-20" />
        </div>
        <div className="absolute z-[1] bottom-2 left-52">
          <Lottie animationData={Love} loop={true} className="w-20" />
        </div>
      </div>
    </div>
  );
};

export default FeedbackAction;
