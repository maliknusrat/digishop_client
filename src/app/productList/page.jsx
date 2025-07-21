"use client";
import Link from "next/link";
import { useState } from "react";
import { useGetAllProductsQuery } from "@/store/api/productApi";
import { useGetAllBrandsQuery } from "@/store/api/brandApi";
import { useGetAllCategoriesQuery } from "@/store/api/categoryApi";
import { useCreateCartMutation } from "@/store/api/cartApi";

export default function ProductList() {
  const [filters, setFilters] = useState({
    brandId: "",
    categoryId: "",
    min: 0,
    max: 50000,
    promotion: "",
    name: "",
  });

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const { data: brands } = useGetAllBrandsQuery();
  const { data: categories } = useGetAllCategoriesQuery();
  const { data: products, isFetching } = useGetAllProductsQuery(filters);

  const [createCart] = useCreateCartMutation();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const num = Number(value);
    setFilters((prev) =>
      name === "min"
        ? { ...prev, min: Math.min(num, prev.max - 1) }
        : { ...prev, max: Math.max(num, prev.min + 1) }
    );
  };

  const handleAddToCart = async (productId) => {
    if (!token) {
      alert("Please sign in first.");
      return;
    }
    try {
      await createCart(productId).unwrap();
      alert("Product added to cart!");
    } catch (err) {
      console.error("Add to cart failed", err);
      alert("Failed to add to cart");
    }
  };

  const getAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return null;
    const total = reviews.reduce((sum, r) => sum + r.rating, 0);
    return (total / reviews.length).toFixed(1);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Product Catalog</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 bg-white p-4 rounded-lg shadow">
        {/* Brand Dropdown */}
        <select
          name="brandId"
          value={filters.brandId}
          onChange={handleFilterChange}
          className="select select-bordered"
        >
          <option value="">All Brands</option>
          {brands?.data?.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>

        {/* Category Dropdown */}
        <select
          name="categoryId"
          value={filters.categoryId}
          onChange={handleFilterChange}
          className="select select-bordered"
        >
          <option value="">All Categories</option>
          {categories?.data?.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        {/* Price Range Slider */}
        <div className="flex flex-col col-span-1 md:col-span-2">
          <label className="text-xs mb-1">
            Price Range: ${filters.min} - ${filters.max}
          </label>
          <div className="relative w-full h-6 flex items-center">
            <div className="absolute h-1 bg-gray-300 rounded w-full"></div>
            <div
              className="absolute h-1 bg-blue-500 rounded"
              style={{
                left: `${(filters.min / 50000) * 100}%`,
                width: `${((filters.max - filters.min) / 50000) * 100}%`,
              }}
            ></div>
            <input
              type="range"
              name="min"
              min="0"
              max="50000"
              value={filters.min}
              onChange={handlePriceChange}
              className="absolute w-full appearance-none bg-transparent cursor-pointer"
            />
            <input
              type="range"
              name="max"
              min="0"
              max="50000"
              value={filters.max}
              onChange={handlePriceChange}
              className="absolute w-full appearance-none bg-transparent cursor-pointer"
            />
          </div>
        </div>

        {/* Promotion Dropdown */}
        <select
          name="promotion"
          value={filters.promotion}
          onChange={handleFilterChange}
          className="select select-bordered"
        >
          <option value="">Promotion</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        {/* Search Bar */}
        <input
          type="text"
          name="name"
          value={filters.name}
          onChange={handleFilterChange}
          placeholder="Search product name..."
          className="input input-bordered"
        />
      </div>

      {/* Product Grid */}
      {isFetching ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.data?.map((product) => {
            const avgRating = getAverageRating(product.reviews);
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                <Link href={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    {avgRating ? (
                      <div className="flex items-center gap-2 text-yellow-500 text-sm">
                        {renderStars(avgRating)}
                        <span className="text-gray-600">
                          {avgRating} / 5 ({product.reviews.length})
                        </span>
                      </div>
                    ) : (
                      <div className="text-gray-400 text-sm">No ratings yet</div>
                    )}
                    <p className="text-green-600 font-bold text-base">
                      ${product.price}
                    </p>
                  </div>
                </Link>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="mt-auto btn btn-primary btn-sm rounded-none w-full"
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ⭐ Helper to render stars (supports half-stars)
function renderStars(rating) {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  for (let i = 0; i < full; i++) {
    stars.push(<span key={`f${i}`}>★</span>);
  }
  if (half) {
    stars.push(<span key="half">☆</span>);
  }
  for (let i = 0; i < empty; i++) {
    stars.push(<span key={`e${i}`} className="text-gray-300">★</span>);
  }
  return stars;
}
