import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { baseUrl } from "../../../helper/helper";

export const authApi = createApi({
  reducerPath: "authApi",
  tagTypes: ["auth"],
  baseQuery: fetchBaseQuery({ baseUrl: `https://paysr.onrender.com/v1` }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: "/api/auth/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    signIn: builder.mutation({
      query: (data) => ({
        url: "/api/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    userInfo: builder.query({
      query: (name) => ({
        url: `/api/q&auser/${name}`,
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
    userDetail: builder.query({
      query: (token) => ({
        url: "/api/user",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ["auth"],
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useUserInfoQuery,
  useUserDetailQuery,
} = authApi;
