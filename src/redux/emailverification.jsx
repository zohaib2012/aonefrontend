import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl:
    import.meta.env.MODE === "production"
      ? "https://asharbackend-production-039d.up.railway.app/api/verify"
      : "/api/verify",
  credentials: "include",
});

export const emailapi = createApi({
  reducerPath: "emailapi",
  baseQuery,
  tagTypes: ["code"],
  endpoints: (builder) => ({
    // Send Email Verification Code
    sendCode: builder.mutation({
      query: ({ email }) => ({
        url: "/send-code",
        method: "POST",
        body: { email },
      }),
      invalidatesTags: ["code"],
    }),

    // Send Phone Verification Code
    sendPhoneCode: builder.mutation({
      query: (formData) => ({
        url: "/sms-send-code",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["code"],
    }),

    // Verify Code (Phone or Email)
    verifyCode: builder.mutation({
      query: (requestData) => ({
        url: "/verify-code",
        method: "POST",
        body: requestData,
      }),
    }),
  }),
});

export const {
  useSendCodeMutation,
  useSendPhoneCodeMutation,
  useVerifyCodeMutation,
} = emailapi;
