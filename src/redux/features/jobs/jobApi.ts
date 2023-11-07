import api from "../api/api";

const jobApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: ({ category, title }) =>
        `/jobs?category=${category}&title=${title}`,
    }),
    postJob: builder.mutation({
      query: (data) => ({
        url: "/jobs",
        method: "POST",
        credentials: "include",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllJobsQuery, usePostJobMutation } = jobApi;
