import { Pagination } from "@mantine/core";
import React from "react";
import "./component.css";

const PaySarPagination = ({ questions, page, handlePageChange }) => {
  return (
    <div className="w-full p-4 bg-[#1B1327] flex justify-center items-center">
      <Pagination
        total={questions?.totalPage}
        siblings={1}
        value={page}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default PaySarPagination;
