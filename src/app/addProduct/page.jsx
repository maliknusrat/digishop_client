"use client";

import Swal from "sweetalert2";
import { useState } from "react";
import { useCreateProductMutation } from "@/store/api/productApi";
import { useGetAllCategoriesQuery } from "@/store/api/categoryApi"
import { useGetAllBrandsQuery } from "@/store/api/brandApi"

export default function AddProduct() {
  const [loading, setLoading] = useState(false);
  const [isPromotion, setIsPromotion] = useState(false);
  const [createProduct] = useCreateProductMutation();
  const { data: categories } = useGetAllCategoriesQuery();
  const { data: brands } = useGetAllBrandsQuery();

  console.log(isPromotion)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const description = formData.get("description");
    const price = parseFloat(formData.get("price"));
    const stock = parseInt(formData.get("stock"), 10);
    const categoryId = parseInt(formData.get("categoryId"), 10);
    const brandId = parseInt(formData.get("brandId"), 10);
    const isPromotion = formData.get("isPromotion") === true;

    const imageFile = formData.get("image");
    let imageUrl = "";

    try {
      // Upload image to ImgBB
      const imgForm = new FormData();
      imgForm.append("image", imageFile);
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=d0a7e1f328b83330a0ea0321f368cb7f`,
        { method: "POST", body: imgForm }
      );
      const imgData = await res.json();
      if (!imgData.success) throw new Error("Image upload failed");
      imageUrl = imgData.data.url;

      // Create product
      await createProduct({
        name,
        description,
        image: imageUrl,
        price,
        stock,
        isPromotion,
        categoryId,
        brandId,
      }).unwrap();

      Swal.fire("Success!", "Product added successfully.", "success");
      e.target.reset();
    } catch (err) {
      Swal.fire("Error!", err.message || "Something went wrong.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Add New Product</h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Product Name */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full rounded-md"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="file-input file-input-bordered w-full rounded-md"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 text-sm font-medium">Price</label>
            <input
              type="number"
              name="price"
              className="input input-bordered w-full rounded-md"
              min="0"
              step="0.01"
              required
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block mb-1 text-sm font-medium">Stock</label>
            <input
              type="number"
              name="stock"
              className="input input-bordered w-full rounded-md"
              min="0"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 text-sm font-medium">Category</label>
            <select
              name="categoryId"
              className="select select-bordered w-full rounded-md"
              required
            >
              <option value="">Select Category</option>
              {categories?.data?.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Brand */}
          <div>
            <label className="block mb-1 text-sm font-medium">Brand</label>
            <select
              name="brandId"
              className="select select-bordered w-full rounded-md"
              required
            >
              <option value="">Select Brand</option>
              {brands?.data?.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>

          {/* Promotion */}
          <div className="flex items-center gap-3 mt-4">
            <input
              type="checkbox"
              name="isPromotion"
              checked={isPromotion}
              onChange={(e) => setIsPromotion(e.target.checked)}
              className="checkbox"
            />
            <label className="text-sm font-medium">Mark as Promotion</label>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-medium">
              Description
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full rounded-md h-28"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full rounded-md"
            >
              {loading ? "Saving..." : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
