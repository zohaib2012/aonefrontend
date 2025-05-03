import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl:
    import.meta.env.MODE === "production"
      ? "https://aone-app-backend-production.up.railway.app/api/"
      : "/api",
  credentials: "include",
});

export const p_detailapi = createApi({
  reducerPath: "p_detailapi",
  baseQuery,
  tagTypes: ["details"],

  endpoints: (builder) => ({
    senddetails: builder.mutation({
      query: ({ userId, name, lastname, dob, address }) => ({
        method: "post",
        url: "/p-detail/send",
        body: { name, lastname, dob, address, userId },
      }),
      invalidatesTags: ["details"],
    }),


    displaydetails: builder.query({
      query: () => `/p-detail/all/getdata`,
      // invalidatesTags: ["details"],
      providesTags: ["details"], 
    }),

    displayname:builder.mutation({
      query:({user})=>({
        method:"post",
        url:"/p-detail/all/namedata",
        body:{user}
      }),
      invalidatesTags:["details"]
    })

  }),
});



export const {
  useSenddetailsMutation,
  useDisplaydetailsQuery,
  useDisplaynameMutation
} = p_detailapi;
