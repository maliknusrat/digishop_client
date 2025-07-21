"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { useLoginUserMutation } from "@/store/api/authApi";
import Lottie from "lottie-react";
import animation from "../../../public/loginAnimation.json";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [loginUser] = useLoginUserMutation();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.currentTarget.elements.namedItem("email").value;
    const password = e.currentTarget.elements.namedItem("password").value;

    try {
      const res = await loginUser({ email, password }).unwrap();

      // Save token and role in localStorage
      if (res?.data?.accessToken) {
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("id", res.data.id);
      }

      Swal.fire("Success!", "Login successful", "success");
      if (res.data.role === "USER") {
        router.push("/cart");
      } else {
        router.push("/addProduct");
      }
      console.log("User Data:", res);
      //You can redirect here, e.g.,
    } catch (err) {
      Swal.fire("Error!", err.data?.message || "Login failed", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-[100vh] gap-10 bg-white">
      <div className="hero-content">
        <div className="card rounded-none flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body ">
            <div className="text-center lg:text-left border-b-2">
              <h1 className="text-3xl text-center p-4 font-semibold">
                Login now!
              </h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input rounded-sm input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input rounded-sm input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none">
                {loading ? "logging...." : "Login"}
              </button>
            </div>
            <p className="py-2 text-center text-sm">
              Do not Have an Account?Please{" "}
              <Link href="/registartion" className="font-semibold text-sky-600">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="hidden md:flex">
        <Lottie
          className="h-[620px] w-full md:w-10/12 "
          animationData={animation}
          loop={true}
        ></Lottie>
      </div>
    </div>
  );
}
