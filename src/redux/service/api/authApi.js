import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
    logout: builder.mutation({
      query: (token) => ({
        url: "/api/auth/logout",
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useLogoutMutation } =
  authApi;
