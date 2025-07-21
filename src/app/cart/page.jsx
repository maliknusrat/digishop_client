"use client";

import {
  useGetMyCartQuery,
  useUpdateCartQuantityMutation,
  useDeleteCartMutation,
  useClearCartMutation,
} from "@/store/api/cartApi";
import { useCreateOrderMutation } from "@/store/api/orderApi";
import { useDispatch } from "react-redux";

export default function CartPage() {
  const { data, isFetching } = useGetMyCartQuery();
  const [updateQuantity] = useUpdateCartQuantityMutation();
  const [createOrder, { isLoading: isOrdering }] = useCreateOrderMutation();

   const [clearCart] = useClearCartMutation();

  const [deleteCart] = useDeleteCartMutation();
  const dispatch = useDispatch()

  if (isFetching) return <p className="text-center mt-10">Loading cart...</p>;

  const cartItems = data?.data || [];
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleQuantityChange = async (cartId, status) => {
    //   console.log(cartId, status)
    await updateQuantity({ cartId, status });
  };

  const handleDelete = async (cartId) => {
    await deleteCart(cartId);
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;

    // You can collect this via input form later
    const shippingAddress = "Dhaka, Bangladesh";

    const items = cartItems.map((item) => ({
      productId: item.productId, // or item.product.id
      quantity: item.quantity,
      price: item.product.price,
    }));

    try {
      await createOrder({ shippingAddress, items }).unwrap();
      alert("Order placed successfully!");
     
    } catch (err) {
      console.error(err);
      alert("Failed to place order");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">My Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white p-4 rounded shadow"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold">{item.product.name}</h3>
                <p className="text-gray-500">${item.product.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="ml-4 text-right">
                <p className="font-bold">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 text-sm mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 p-4 bg-white rounded shadow flex justify-between">
          <h2 className="text-xl font-bold">Total:</h2>
          <span className="text-xl font-bold text-blue-600">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
      )}
      <button
        onClick={handleCheckout}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        disabled={isOrdering}
      >
        {isOrdering ? "Placing Order..." : "Check Out"}
      </button>
    </div>
  );
}
