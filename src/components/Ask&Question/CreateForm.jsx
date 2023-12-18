import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./ask-question.css";
import Button from "../ui/Button";
import { useCreatePostMutation } from "../../redux/service/api/postApi";
import { useNavigate } from "react-router-dom";

const CreateForm = ({ data, selectedUser }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [createPost, { isLoading, error, isError }] = useCreatePostMutation();

  console.log(error, isError);

  const navigate = useNavigate();
  const createPostHandler = async (event) => {
    event.preventDefault();
    try {
      if (title.length < 10) {
        alert("Please title must be at least 10 characters");
      } else if (content.length < 30 || content.length > 3000) {
        alert("Please content must be between 30 and 3000 characters");
      } else {
        if (data && data?.user_id) {
          const post = {
            user_id: "U2FsdGVkX1+loEO7UPzeFGRIwm5zy95wAjsImT4Na1U=",
            title,
            content,
          };
          const res = await createPost(post);
          const { data, error } = res;
          console.log(data, error);
          if (data) {
            navigate("/");
            setTitle("");
            setContent("");
          } else {
            alert(error?.data?.msg || "An error has occurred while posting");
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-container w-[65%] mx-auto min-h-full pb-10">
      <form
        className="py-14 px-10 rounded-md bg-gray-800 border border-gray-500 w-full flex flex-col mt-10"
        onSubmit={createPostHandler}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-secondary text-xl font-semibold mb-5">
            Send New Question to
          </h3>
          <h3 className="text-secondary text-xl font-semibold mb-5">
            {selectedUser}
          </h3>
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
            <span className="font-medium">Content ( Max 30 | Min 3000) </span>
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