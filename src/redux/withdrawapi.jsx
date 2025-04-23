import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const withdrawapi = createApi({
  reducerPath: "withdraw",
  baseQuery: fetchBaseQuery({
    baseUrl:
      import.meta.env.MODE === "production"
        ? "https://aonebacknd-testingg.vercel.app/api/"
        : "/api",
    credentials: "include",
  }),
  tagTypes: ["requests"],

  endpoints: (builder) => ({
    withdrawamount: builder.mutation({
      query: ({ bank, currency, account, accountno, amount, user }) => ({
        method: "POST",
        url: "/withdraw/request",
        body: { bank, currency, account, accountno, amount, user },
      }),
      invalidatesTags: ["requests"],
    }),

    getwithdrawreq: builder.query({
      query: () => "/withdraw/getrequests",
      providesTags: ["requests"],
    }),
  }),
});

// Destructure hooks
export const {
  useWithdrawamountMutation,
  useGetwithdrawreqQuery,
} = withdrawapi;
