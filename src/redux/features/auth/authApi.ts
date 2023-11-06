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
  }),
});

export const { useGetTokenMutation } = authApi;
