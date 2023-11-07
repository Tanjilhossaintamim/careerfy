import api from "../api/api";

const jobApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: ({ category, title }) =>
        `/jobs?category=${category}&title=${title}`,
    }),
    getMyJobs: builder.query({
      query: ({ category, title }) =>({
        url:`/jobs/myjobs/me?category=${category}&title=${title}`,
        credentials:'include',
        method:'GET'
      })
        
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

export const { useGetAllJobsQuery, usePostJobMutation, useGetMyJobsQuery } =
  jobApi;
