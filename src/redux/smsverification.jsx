import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl:
    import.meta.env.MODE === "production"
      ? "https://asharbackend-production-039d.up.railway.app/api/sms"
      : "/api/sms",
  credentials: "include",
});

export const smsapi = createApi({
  reducerPath: "smsapi",
  baseQuery,
  tagTypes: ["code"],
  endpoints: (builder) => ({
    sendPhoneCode: builder.mutation({
      query: (formData) => ({
        url: "/send-otp",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["code"],
    }),
    verifyPhoneCode: builder.mutation({
      query: (formData) => ({
        url: "/verify-otp",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["code"],
    }),
  }),
});

export const { useSendPhoneCodeMutation, useVerifyPhoneCodeMutation } = smsapi;
