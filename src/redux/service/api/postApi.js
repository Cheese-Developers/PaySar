import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../helper/helper";

export const postApi = createApi({
  reducerPath: "postApi",
  tagTypes: ["post"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://paysr.onrender.com/v1/api" }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: (token) => ({
        url: "/paysar",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ["post"],
    }),
    getReceivePaySar: builder.query({
      query: (token) => ({
        url: "/paysar",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ["post"],
    }),
    createPaySar: builder.mutation({
      query: (paysar) => ({
        url: "/paysar",
        method: "POST",
        body: paysar,
      }),
      invalidatesTags: ["post"],
    }),
  }),
});

export const {
  useGetPostQuery,
  useGetReceivePaySarQuery,
  useCreatePaySarMutation,
} = postApi;
