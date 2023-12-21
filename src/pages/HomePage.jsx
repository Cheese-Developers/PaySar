import React, { useState } from "react";

import { useGetReceivePaySarQuery } from "../redux/service/api/postApi";
import PostContents from "../components/profile/PostContents";
import Vector from "../svg/Vector.svg";

import "./page.css";
import SectionText from "../components/ui/SectionText";
import Cookies from "js-cookie";
import PaySarPagination from "../components/PaySarPagination";

const HomePage = () => {
  const token = Cookies.get("token");
  const [page, setPage] = useState(1);
  const {
    data: questions,
    error,
    isLoading,
  } = useGetReceivePaySarQuery({ token, page });

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  return (
    <div className="text-white pt-32">
      <SectionText>
        <div className="flex flex-col justify-center items-center w-full h-full z-[2]">
          <h4 className="text-3xl md:text-4xl font-semibold font-curve mb-4 text-center drop-shadow-2xl">
            👋 Hey!! Are you feeling lonely?
          </h4>
          <p className="text-xl font-semibold mb-4 text-center drop-shadow-xl">
            Why don't you ask and write a fun question to the world?
          </p>
          <p className="text-xl font-semibold mb-4 text-center drop-shadow-xl">
            We are lovely to hear your thoughts 😊
          </p>
        </div>
      </SectionText>
      <div className="bg-slate-950/90 pb-14">
        <img src={Vector} alt="" className="w-screen" />

        {isLoading ? (
          <div className="py-12 min-h-[450px] flex justify-center items-center">
            <h3 className="text-secondary font-semibold text-3xl">
              Loading...
            </h3>
          </div>
        ) : (
          <>
            {questions?.totalPage > 1 && (
              <div className="sticky top-5 md:top-10 pt-14 z-20 w-full flex justify-center items-center">
                <PaySarPagination
                  page={page}
                  questions={questions}
                  handlePageChange={handlePageChange}
                />
              </div>
            )}
            <PostContents
              questions={questions?.result}
              error={error}
              isLoading={isLoading}
              home={true}
              totalPage={questions.totalPage}
              setPage={setPage}
              page={page}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
