import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    prepareHeaders(headers) {
      headers.set("content-type", "application/json");
      return headers;
    },
  }),

  endpoints: () => ({}),
});

export default api;
