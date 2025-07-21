"use client";

import { useEffect, useState } from "react";
import {
  useGetAllOrdersQuery,
  useGetUserOrdersQuery,
  useUpdateOrderStatusMutation,
} from "@/store/api/orderApi";
import { useSubmitReviewMutation } from "@/store/api/productApi";

export default function OrdersPage() {
  const [role, setRole] = useState("");
  const [userId, setUserId] = useState(null);
  const [updateOrderStatus] = useUpdateOrderStatusMutation();
  const [submitReview, { isLoading: isSubmitting }] = useSubmitReviewMutation();
  const [currentProductId, setCurrentProductId] = useState(null);

  const [showReviewModal, setShowReviewModal] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    const storedUserId = localStorage.getItem("id");
    if (storedRole && storedUserId) {
      setRole(storedRole);
      setUserId(Number(storedUserId));
    }
  }, []);

 const shouldFetchAllOrders = role === "ADMIN" || role === "SUPERADMIN";
const shouldFetchUserOrders = role === "USER";

const { data: allOrdersData, isLoading: isLoadingAll } = useGetAllOrdersQuery(
  undefined,
  { skip: !shouldFetchAllOrders }
);

const { data: userOrdersData, isLoading: isLoadingUser } = useGetUserOrdersQuery(
  undefined,
  { skip: !shouldFetchUserOrders }
);

  const orders =
  role === "USER" ? userOrdersData?.data || [] :
  (role === "ADMIN" || role === "SUPERADMIN") ? allOrdersData?.data || [] :
  [];

  console.log(orders);

  const isLoading = isLoadingAll || isLoadingUser;

  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      await updateOrderStatus({ orderId, status: newStatus }).unwrap();
      alert("Order status updated!");
    } catch (error) {
      console.error("Status update failed", error);
      alert("Failed to update order status.");
    }
  };

  const handleSubmitReview = async () => {
    if (!rating || rating < 1 || rating > 5) {
      alert("Please give a valid rating (1–5).");
      return;
    }
    console.log(
      "Submitting review for product ID:",
      currentProductId,
      "with rating:",
      rating,
      "and comment:",
      comment
    );
    try {
      await submitReview({
        productId: currentProductId,
        rating,
        comment,
      }).unwrap();

      alert("Review submitted!");
      setShowReviewModal(false);
      setRating(0);
      setComment("");
      setCurrentProductId(null);
    } catch (error) {
      console.error("Review submission failed:", error);
      alert("Failed to submit review.");
    }
  };

  if (isLoading) return <p className="text-center mt-10">Loading orders...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Orders</h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border rounded-lg shadow p-6 bg-white space-y-4"
            >
              {/* Header */}
              <div className="flex justify-between items-center border-b pb-4">
                <p>
                  <span className="font-bold">Order ID:</span>{" "}
                  {String(order.id).slice(-6).toUpperCase()}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>

              {/* Items */}
              <div className="grid md:grid-cols-2 gap-4">
                {order.orderItems?.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-4 border p-2 rounded"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.product.image}
                        alt={item.product.productName}
                        className="w-16 h-16 rounded object-cover"
                      />
                      <div>
                        <p className="font-semibold">{item.productName}</p>
                        <p className="text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-sm text-green-600 font-bold">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                    {role === "USER" && (
                      <button
                        disabled={order.status !== "CONFIRM"}
                        onClick={() => {
                          setCurrentProductId(item.product.id);
                          setShowReviewModal(true);
                        }}
                        className={`px-3 py-1 text-sm rounded ${
                          order.status === "CONFIRM"
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        Give Review
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center pt-4 border-t">
                <p>
                  <span className="font-semibold">Total:</span>{" "}
                  <span className="text-green-700 font-bold">
                    ${order.totalAmount?.toFixed(2)}
                  </span>
                </p>

                <div className="flex items-center gap-4">
                  <span
                    className={`px-4 py-1 text-sm rounded-full ${
                      order.status === "PENDING"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {order.status}
                  </span>

                  {/* Admin Only: Confirm Button */}
                  {["ADMIN", "SUPERADMIN"].includes(role) &&
                  order.status === "PENDING" ? (
                    <button
                      onClick={() => handleStatusUpdate(order.id, "CONFIRM")}
                      className="bg-green-600 text-white px-3 uppercase py-1 rounded hover:bg-green-700 text-sm"
                    >
                      Mark Confirm
                    </button>
                  ) :"" }

                  {/* User Only: Give Review */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black/50  flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-md space-y-4">
            <h2 className="text-xl font-semibold">Leave a Review</h2>

            <div>
              <label className="block mb-1 font-medium">Rating (1-5)</label>
              <input
                type="number"
                min={1}
                max={5}
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Comment</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowReviewModal(false)}
                className="px-4 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitReview}
                className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
