"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRegisterUserMutation } from "@/store/api/authApi";
import Lottie from "lottie-react";
import animation from "../../../public/loginAnimation.json";
import Link from "next/link";
import { useRouter } from "next/navigation";

const imgbb_api_key = "YOUR_IMGBB_API_KEY"; // 🔁 Replace with your actual ImgBB API key

export default function Registration() {
  const router = useRouter();
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    imageFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, imageFile: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      if (!formData.imageFile) {
        return Swal.fire("Error", "Please upload a photo", "error");
      }

      // 1️⃣ Upload image to ImgBB
      const imageData = new FormData();
      imageData.append("image", formData.imageFile);

      const res = await fetch(`https://api.imgbb.com/1/upload?key=d0a7e1f328b83330a0ea0321f368cb7f`, {
        method: "POST",
        body: imageData,
      });

      const imgResult = await res.json();
      if (!imgResult.success) {
        throw new Error("Image upload failed");
      }

      const imageUrl = imgResult.data.url;

      // 2️⃣ Now register the user
      const user = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        image: imageUrl,
        role: "USER",
      };

      await registerUser(user).unwrap();

      Swal.fire("Success", "Registration successful", "success");
      router.push("/login");

    } catch (error) {
      console.error("Registration error:", error);
      Swal.fire("Error", error?.data?.message || "Registration failed", "error");
    }
  };

  return (
    <div className="flex items-center justify-center h-[100vh] gap-10 bg-white">
      <div className="hero-content">
        <div className="card rounded-none flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="text-center lg:text-left border-b-2">
              <h1 className="text-3xl text-center p-4 font-semibold">
                Register Here!
              </h1>
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Name</span></label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input px-2 py-1 rounded-sm input-bordered"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Email</span></label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input px-2 py-1 rounded-sm input-bordered"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Photo</span></label>
              <input
                type="file"
                name="image"
                className="input px-2 py-1 rounded-sm input-bordered"
                required
                accept="image/*"
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Password</span></label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input px-2 py-1 rounded-sm input-bordered"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-neutral rounded-none"
                type="submit"
                value={isLoading ? "Creating..." : "Register"}
              />
            </div>
            <p className="py-2 text-center text-sm">
              Already Have an Account?{" "}
              <Link className="font-semibold text-sky-600" href="/login">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="hidden md:flex">
        <Lottie
          className="h-[620px] w-full md:w-10/12"
          animationData={animation}
          loop
        />
      </div>
    </div>
  );
}
