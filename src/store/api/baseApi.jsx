import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token"); // Make sure token is stored on login
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["product", "cart", "review", "order", "brand", "category"],
  endpoints: () => ({}),
});
