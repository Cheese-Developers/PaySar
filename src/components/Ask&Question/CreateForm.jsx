import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./ask-question.css";
import Button from "../ui/Button";
import { useCreatePaySarMutation } from "../../redux/service/api/postApi";
import { useNavigate } from "react-router-dom";
import { openModalCustom } from "../ui/Modal";
import { Text } from "@mantine/core";

const CreateForm = ({ userInfo, selectedUser }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [createPaySar, { isLoading }] = useCreatePaySarMutation();

  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const confirmationPost = async () => {
    const post = {
      username: userInfo?.username,
      title: title,
      content: content,
    };
    const res = await createPaySar(post);
    const { data, error } = res;
    if (data) {
      navigate("/");
      setTitle("");
      setContent("");
    } else {
      alert(error?.data?.msg || "An error has occurred while posting");
    }
  };

  const navigate = useNavigate();
  const createPostHandler = async (event) => {
    event.preventDefault();
    try {
      if (title.length < 10) {
        alert("Please title must be at least 10 characters");
      } else if (content.length < 50 || content.length > 3000) {
        alert("Please content must be between 50 and 3000 characters");
      } else {
        await openCreateConfirmModal();
      }
    } catch (error) {
      console.error(error.error);
    }
  };

  const openCreateConfirmModal = async () => {
    setLogoutModalOpen(true);
    openModalCustom({
      title: "Post Confirmation",
      children: (
        <Text size="sm">
          Are you ready to share your thoughts with the world? 🚀✨
        </Text>
      ),
      confirmText: "Let's do it! 🌟",
      cancelText: "Hmm, I'll give it thought 🤔",
      onConfirm: confirmationPost,
      onCancel: () => setLogoutModalOpen(false),
    });
  };

  return (
    <div className="form-container w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%] mx-auto min-h-full pb-10">
      <form
        className="md:py-14 md:px-10 px-3 py-5 rounded-md bg-gray-800 border border-gray-500 w-full flex flex-col mt-10"
        onSubmit={createPostHandler}
      >
        <div className="flex justify-between">
          <h3 className="text-secondary text-lg md:text-xl font-semibold mb-5">
            Send New Question to
          </h3>
          {selectedUser ? (
            <h3 className="text-lg md:text-xl font-semibold mb-5 text-primary">
              selectedUser
            </h3>
          ) : (
            <h3 className="font-curve text-lg md:text-xl font-semibold tracking-wide text-primary">
              Yourself
            </h3>
          )}
        </div>

        <div className="flex flex-col gap-3 mb-6">
          <label htmlFor="question" className="text-secondary font-medium">
            Question Title ( Maximum letters 10 )
          </label>
          <input
            type="text"
            id="question"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Open your mind here..."
            required
            className="bg-transparent border border-gray-500 text-white px-4 py-1.5 rounded-md outline-none placeholder:italic placeholder:text-sm"
          />
        </div>
        <div className="flex flex-col gap-3 mb-6">
          <label htmlFor="content" className="text-secondary">
            <span className="font-medium">Content ( Max 50 | Min 3000) </span>
            {content.length > 1000 && (
              <span
                className={`ml-3 ${
                  content.length < 30 || content.length > 3000
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                Current letter ( {content.length} )
              </span>
            )}
          </label>
          <ReactQuill
            placeholder="Write your content here ..."
            theme={"snow"}
            value={content}
            onChange={setContent}
            id="content"
            style={{ color: "white" }}
            className="quill"
          />
        </div>
        <div className="">
          <Button text={isLoading ? "loading..." : "Post now"} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
