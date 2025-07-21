import { baseApi } from "./baseApi";

export const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyCart: builder.query({
      query: () => "/cart",
      providesTags: ["cart","order"],
    }),

    createCart: builder.mutation({
      query: (productId) => ({
        url: "/cart",
        method: "POST",
        body: { productId },
      }),
      invalidatesTags: ["cart","order"],
    }),

    updateCartQuantity: builder.mutation({
      query: ({ cartId, status }) => ({
        url: `/cart/${cartId}`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["cart","order"],
    }),
    clearCart: builder.mutation({
      query: () => ({
        url: "/cart/clear",  
        method: "DELETE",
      }),
      invalidatesTags: ["cart","order"],
    }),

    deleteCart: builder.mutation({
      query: (cartId) => ({
        url: `/cart/${cartId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart","order"],
    }),
    
  }),
});

export const {
  useGetMyCartQuery,
  useCreateCartMutation,
  useUpdateCartQuantityMutation,
  useDeleteCartMutation,
  useClearCartMutation,
} = cartApi;
