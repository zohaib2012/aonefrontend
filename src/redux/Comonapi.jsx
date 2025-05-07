import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl:
    import.meta.env.MODE === "production"
      ? "https://asharbackend-production-039d.up.railway.app/api/"
      : "/api",
  credentials: "include",
});

export const commonapi = createApi({
  reducerPath: "commonapi",
  baseQuery,
  tagTypes: ["Messages", "User"], // Defined tag types properly
  endpoints: (builder) => ({
    // User Registration
    registerUser: builder.mutation({
      query: ({ country, email, password }) => ({
        method: "POST",
        url: "/users/register",
        body: { country, email, password },
      }),
      invalidatesTags: ["User"],
    }),

    // User Login
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        method: "POST",
        url: "/users/login",
        body: { email, password },
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
      // Optionally invalidate other cached data on logout
      invalidatesTags: ["User"],
    }),

    usersList: builder.query({
      query: () => "/users/get",
      providesTags: ["accounts"],
    }),

    // send code
    sendCode: builder.mutation({
      query: ({ email }) => ({
        method: "POST",
        url: "/users/forget/password/code",
        body: { email },
      }),
      invalidatesTags: ["User"],
    }),

    // verify code
    verifyCode: builder.mutation({
      query: ({ code }) => ({
        method: "POST",
        url: "/users/forget/password/verify",
        body: { code },
      }),
    }),

    forgetPassword: builder.mutation({
      query: ({ email, newPassword }) => ({
        method: "post",
        url: "/users/forgetpassword",
        body: { email, newPassword },
      }),
      invalidatesTags: ["User"],
    }),

    updatePassword: builder.mutation({
      query: ({ password, updatedPassword, user }) => ({
        method: "post",
        url: "/users/updatepassword",
        body: { password, updatedPassword, user },
      }),
      invalidatesTags: ["User"],
    }),


    usesProfiles : builder.query({
      query: () => "/users/all/users/profiles",
      providesTags: ["User"],
    }),





  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutMutation,
  useUsersListQuery,
  useSendCodeMutation,
  useVerifyCodeMutation,
  useForgetPasswordMutation,
  useUpdatePasswordMutation,
  useUsesProfilesQuery
} = commonapi;
