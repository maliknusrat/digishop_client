"use client";

import Swal from "sweetalert2";
import { useState } from "react";
import { useCreateCategoryMutation } from "@/store/api/categoryApi";

export default function AddCategory() {
  const [createCategory] = useCreateCategoryMutation();
  const [loading, setLoading] = useState(false);

  const handleProduct = async (event) => {
    event.preventDefault();
    setLoading(true);

    const form = event.target;
    const name = form.name.value;

    try {
      await createCategory({ name }).unwrap();
      Swal.fire("Success!", "Category added successfully.", "success");
      form.reset();
    } catch (err) {
      Swal.fire("Error!", err.message || "Failed to add category.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="max-w-5xl mx-auto py-20 ">
        <div className="flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-lg mx-auto rounded-none shadow-2xl">
            <div>
              <h2 className="text-3xl text-center my-2 italic font-bold ">
                Add Your Category
              </h2>
            </div>
            <form onSubmit={handleProduct} className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Category Name"
                  className="input input-bordered border-black rounded-none w-full"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-neutral rounded-none"
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Confirm"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
