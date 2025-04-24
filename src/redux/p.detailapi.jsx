import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl:
    import.meta.env.MODE === "production"
      ? "https://aonebackendd.vercel.app/api/"
      : "/api",
  credentials: "include",
});

export const p_detailapi = createApi({
  reducerPath: "p_detailapi",
  baseQuery,
  tagTypes: ["details"],

  endpoints: (builder) => ({
    senddetails: builder.mutation({
      query: ({ name, lastname, dob, address, user }) => ({
        method: "post",
        url: "/p-detail/send",
        body: { name, lastname, dob, address, user },
      }),
      invalidatesTags: ["details"],
    }),

    displaydetails: builder.query({
      query: () => `/p-detail/all/getdata`,
      invalidatesTags: ["details"],
    }),

    displaynamedata: builder.mutation({
      query: ({ user }) => ({
        url: '/p-detail/all/namedata',
        method: "post",
        body: { user }
      }),
      invalidatesTags: ["details"]
    })

  }),
});

export const { useSenddetailsMutation, useDisplaydetailsQuery, useDisplaynamedataMutation} = p_detailapi;
