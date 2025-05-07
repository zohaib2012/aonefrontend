import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const withdrawapi = createApi({
  reducerPath: "withdraw",
  baseQuery: fetchBaseQuery({
    baseUrl:
      import.meta.env.MODE === "production"
        ? "https://asharbackend-production-039d.up.railway.app/api/"
        : "/api",
    credentials: "include",
  }),
  tagTypes: ["requests"],

  endpoints: (builder) => ({
    withdrawamount: builder.mutation({
      query: ({ bank, currency, account, accountno, amount, user,userEmail }) => ({
        method: "POST",
        url: "/withdraw/request",
        body: { bank, currency, account, accountno, amount, user,userEmail },
      }),
      invalidatesTags: ["requests"],
    }),

    withdrawalrequests: builder.query({
      query: () => "/withdraw/getrequests",
      providesTags: ["requests"],
    }),
  }),
});

// Destructure hooks
export const {
  useWithdrawamountMutation,
  useWithdrawalrequestsQuery
} = withdrawapi;
