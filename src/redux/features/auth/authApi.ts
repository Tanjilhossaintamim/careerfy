import api from "../api/api";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getToken: builder.mutation({
      query: (data) => ({
        url: "/jwt",
        method: "POST",
        credentials: "include",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/jwt/logout",
        method: "POST",
        credentials: "include",
        body: {},
      }),
    }),
    loginCheck: builder.mutation({
      query: () => ({
        url: "/jwt/checklogin",
        method: "POST",
        credentials: "include",
        body: {},
      }),
    }),
  }),
});

export const { useGetTokenMutation, useLogoutMutation, useLoginCheckMutation } =
  authApi;
