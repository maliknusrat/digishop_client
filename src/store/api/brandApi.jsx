import { baseApi } from "./baseApi";

export const brandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBrands: builder.query({
      query: () => "/brand",
      providesTags: ["brand"],
    }),
    getBrandById: builder.query({
      query: (id) => `/brand/${id}`,
      providesTags: (result, error, id) => [{ type: "brand", id }],
    }),
    createBrand: builder.mutation({
      query: (data) => ({
        url: "/brand",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["brand"],
    }),
    updateBrand: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/brand/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "brand", id }],
    }),
    deleteBrand: builder.mutation({
      query: (id) => ({
        url: `/brand/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["brand"],
    }),
  }),
});

export const {
  useGetAllBrandsQuery,
  useGetBrandByIdQuery,
  useCreateBrandMutation,
  useUpdateBrandMutation,
  useDeleteBrandMutation,
} = brandApi;
