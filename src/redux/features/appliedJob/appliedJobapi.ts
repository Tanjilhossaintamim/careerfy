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
  }),
});

export const {useApplyJobMutation} = appliedJobapi;
