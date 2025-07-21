// src/store/api/orderApi.js
import { baseApi } from "./baseApi";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "/order",
        method: "POST",
        body: orderData,
      }),
      providesTags: ["order", "cart"],
    }),

    // 🔸 Get orders for logged-in user (USER)
    getUserOrders: builder.query({
      query: () => "/order",
      providesTags: ["cart", "order"],
    }),

    // 🔸 Get all orders (ADMIN / SUPERADMIN)
    getAllOrders: builder.query({
      query: () => "/order/all",
      providesTags: ["cart", "order"],
    }),

    // 🔸 Update order status (ADMIN / SUPERADMIN)
    updateOrderStatus: builder.mutation({
      query: ({ orderId, status }) => ({
        url: `/order/${orderId}/status`,
        method: "PATCH",
        body: { status },
      }),
      providesTags: ["order", "cart"],
    }),

    // 🔸 Delete order (ADMIN / SUPERADMIN)
    deleteOrder: builder.mutation({
      query: (orderId) => ({
        url: `/order/${orderId}`,
        method: "DELETE",
      }),
      providesTags: ["order", "cart"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetUserOrdersQuery,
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
  useDeleteOrderMutation,
} = orderApi;
