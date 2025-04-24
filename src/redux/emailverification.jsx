import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl:
    import.meta.env.MODE === "production"
      ? "https://aonebackendd.vercel.app/api/verify"
      : "/api/verify",
  credentials: "include",
});

export const emailapi = createApi({
  reducerPath: "emailapi",
  baseQuery,
  tagTypes: ["code"], // Defined tag types properly
  endpoints: (builder) => ({
    // User Registration
    sendCode: builder.mutation({
      query: ({ email }) => ({
        method: "POST",
        url: "/send-code",
        body: { email },
      }),
      invalidatesTags: ["code"],
    }),

    // User Login
    verifyCode: builder.mutation({
      query: ({ code }) => ({
        method: "POST",
        url: "/verify-code",
        body: { code },
      }),
    }),
  }),
});

export const { useSendCodeMutation, useVerifyCodeMutation } = emailapi;
