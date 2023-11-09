import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://careerfy-server.vercel.app",
    prepareHeaders(headers) {
      headers.set("content-type", "application/json");
      return headers;
    },
  }),

  endpoints: () => ({}),
});

export default api;
