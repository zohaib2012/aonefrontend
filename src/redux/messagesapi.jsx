import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl:
    import.meta.env.MODE === "production"
      ? "https://aone-trade-backend.vercel.app/api/"
      : "/api",
  credentials: "include",
});

export const messagesapi = createApi({
  reducerPath: "messagesapi",
  baseQuery,
  tagTypes: ["messages"],

  endpoints: (builder) => ({
    sendmesages: builder.mutation({
      query: ({ name, email, phone, message }) => ({
        method: "post",
        url: "/messages/send",
        body: { name, email, phone, message },
      }),
      invalidatesTags: ["messages"],
    }),

    displaymessages: builder.query({
      query: () => `/messages/display`,
      invalidatesTags: ["messages"],
    }),
  }),
});

export const { useSendmesagesMutation, useDisplaymessagesQuery } = messagesapi;
