import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../helper/helper";

export const postApi = createApi({
  reducerPath: "postApi",
  tagTypes: ["post"],
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (data) => ({
        url: "/paysar",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["post"],
    }),
    getPost: builder.query({
      query: (token) => ({
        url: "/paysar",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ["post"],
    }),
  }),
});

export const { useCreatePostMutation, useGetPostQuery } = postApi;
