import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../helper/helper";

export const postApi = createApi({
  reducerPath: "postApi",
  tagTypes: ["paysar"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3200/v1/api" }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: (token) => ({
        url: `/paysar/get_payser`,
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ["paysar"],
    }),
    getReceivePaySar: builder.query({
      query: ({ token, limit = 5, page = 8 }) => ({
        url: `/paysar?limit=${limit}&page=${page}`,
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ["paysar"],
    }),
    createPaySar: builder.mutation({
      query: (paysar) => ({
        url: "/paysar",
        method: "POST",
        body: paysar,
      }),
      invalidatesTags: ["paysar"],
    }),
    replyPaySar: builder.mutation({
      query: ({ token, paysar }) => ({
        url: "/paysar",
        method: "PUT",
        body: paysar,
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["paysar"],
    }),
  }),
});

export const {
  useGetPostQuery,
  useGetReceivePaySarQuery,
  useCreatePaySarMutation,
  useReplyPaySarMutation,
} = postApi;
