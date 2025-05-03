
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const documentapi = createApi({
  reducerPath: "documentapi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      import.meta.env.MODE === "production"
        ? "https://aone-app-backend-production.up.railway.app/api/"
        : "/api",
    credentials: "include",
  }),
  tagTypes: ["docs"],
  endpoints: (builder) => ({
    uploadDocument: builder.mutation({
      query: (formData) => ({
        url: "/documents/upload",
        method: "POST",
        credentials: "include",
        body: formData,
      }),
      invalidatesTags: ["docs"],
    }),

    getlldocuments: builder.query({
      query: () => `/documents/all/getdata`,
      providesTags: ["docs"],
    }),
  }),
});

export const { useUploadDocumentMutation, useGetlldocumentsQuery } =
  documentapi;
