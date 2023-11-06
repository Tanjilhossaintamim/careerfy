import api from "../api/api";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getToken: builder.mutation({
      query: (data) => ({
        url: "/jwt",
        credentials:'include',
        body: data,
      }),
    }),
  }),
});

export const { useGetTokenMutation } = authApi;
