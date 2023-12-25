import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const feedbackApi = createApi({
  reducerPath: "feedbackApi",
  tagTypes: ["feedback"],
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3200/v1/api` }),
  endpoints: (builder) => ({
    sendFeedback: builder.mutation({
      query: ({ token, data }) => ({
        url: "/feedback",
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      }),
      invalidatesTags: ["feedback"],
    }),
  }),
});

export const { useSendFeedbackMutation } = feedbackApi;
