import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl:
    import.meta.env.MODE === "production"
      ? "https://aone-trade-backend.vercel.app/api/"
      : "/api",
  credentials: "include",
});

export const transcationapi = createApi({
  reducerPath: "transcationapi",
  baseQuery,
  tagTypes: ["code"], // Defined tag types properly
  endpoints: (builder) => ({
    sendMoney: builder.mutation({
      query: (formData) => ({
        method: "POST",
        url: "/transactions/sendmoney",
        credentials: "include",
        body: formData,
      }),
      invalidatesTags: ["code"],
    }),

    displayMoney: builder.query({
      query: () => `/transactions/all/getdata`,
      invalidatesTags: ["code"],
    }),

    addbalance: builder.mutation({
      query: ({ amount, user }) => ({
        method: "post",
        url: "/transactions/addbalance",
        body: { amount, user }
      }),
      invalidatesTags: ["code"]
    }),

    displaybalance: builder.mutation({
      query: ({ user }) => ({
        url: "/transactions/getbalance",
        method: "post",
        body: { user }
      }),
      invalidatesTags: ["code"]
    })
  }),
});

export const { useSendMoneyMutation, useDisplayMoneyQuery, useAddbalanceMutation,useDisplaybalanceMutation } = transcationapi;
