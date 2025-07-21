import { baseApi } from "./baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ brandId, categoryId, min, max, promotion, name } = {}) => {
        const params = new URLSearchParams();
        if (brandId) params.append("brandId", brandId);
        if (categoryId) params.append("categoryId", categoryId);
        if (min !== undefined) params.append("min", min.toString());
        if (max !== undefined) params.append("max", max.toString());
        if (promotion !== undefined)
          params.append("promotion", promotion.toString());
        if (name) params.append("name", name);

        return `/product?${params.toString()}`;
      },
      providesTags: ["product"],
    }),
    getProductById: builder.query({
      query: (id) => `/product/${id}`,
      providesTags: ["product"],
    }),
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/product/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
    submitReview: builder.mutation({
      query: ({ productId, rating, comment }) => ({
        url: "/product/review",
        method: "POST",
        body: { productId, rating, comment },
      }),
      invalidatesTags: ["product"],
    }),

    getReview: builder.query({
  query: ({ productId, userId }) =>
    `/product/${productId}/review/${userId}`,
  providesTags: ["product"],
}),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useSubmitReviewMutation,
  useGetReviewQuery,
  
} = productApi;
