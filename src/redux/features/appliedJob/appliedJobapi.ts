import api from "../api/api";

const appliedJobapi = api.injectEndpoints({
  endpoints: (builder) => ({
    applyJob: builder.mutation({
      query: (data) => ({
        url: "/appliedjobs",
        method: "POST",
        credentials: "include",
        body: data,
      }),
    }),
    fetchAppliedJobs: builder.query({
      query: () => ({
        url: "/appliedjobs",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useApplyJobMutation, useFetchAppliedJobsQuery } = appliedJobapi;
