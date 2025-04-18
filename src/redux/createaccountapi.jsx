import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl:
    import.meta.env.MODE === "production"
      ? "https://aone-trade-backend.vercel.app/api/"
      : "/api",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("auth token");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
      headers.set("Cookie", `logintoken=${token}`);
    }
    return headers;
  },
});

export const createaccountapi = createApi({
  reducerPath: "createaccountapi",
  baseQuery,
  tagTypes: ["accounts"],
  endpoints: (builder) => ({
    // User Registration
    createAccount: builder.mutation({
      query: ({ user, leverage, currency, password, accountType }) => ({
        method: "POST",
        url: "/account/create",
        credentials: "include",
        body: { user, leverage, currency, password, accountType },
      }),
      invalidatesTags: ["accounts"],
    }),

    detailUser: builder.mutation({
      query: ({ user }) => ({
        method: "POST",
        url: "/account/details",
        credentials: "include",
        body: { user },
      }),
      invalidatesTags: ["accounts"],
    }),

    // accountDetails: builder.query({
    //   query: () => "/account/details",
    //   providesTags: ["accounts"], // Changed from invalidatesTags to providesTags
    // }),
    getallaccountsdetails: builder.query({
      query: () => "/account/all/getdata",
      providesTags: ["accounts"], // Changed from invalidatesTags to providesTags
    }),
  }),
});

export const {
  useCreateAccountMutation,
  useDetailUserMutation,
  useGetallaccountsdetailsQuery,
} = createaccountapi;
