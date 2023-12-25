import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { baseUrl } from "../../../helper/helper";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["user"],
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3200/v1` }),
  endpoints: (builder) => ({
    userInfo: builder.query({
      query: (name) => ({
        url: `/api/q&auser/${name}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    userDetail: builder.query({
      query: (token) => ({
        url: "/api/user",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ["user"],
    }),
    userUpdate: builder.mutation({
      query: ({ token, user }) => ({
        url: "/api/user",
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: user,
      }),
      invalidatesTags: ["user"],
    }),
    getImages: builder.query({
      query: () => ({
        url: "/api/images",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    getAllUsers: builder.query({
      query: (token) => ({
        url: "/api/getAllUser",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ["user"],
    }),
  }),
});

export const {
  useUserInfoQuery,
  useUserDetailQuery,
  useUserUpdateMutation,
  useGetImagesQuery,
  useGetAllUsersQuery,
} = userApi;
