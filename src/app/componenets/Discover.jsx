"use client";

import Marquee from "react-fast-marquee";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

const Discover = () => {
  return (
    <div className="max-w-6xl mx-auto my-12">
      <div className="py-10 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-200">
            Discover More{" "}
            <span className="text-zinc-500">
              Good Things Waiting for You!!
            </span>
          </h1>
        </div>
        <div>
          <DotLottieReact
            src="https://lottie.host/b05bbc9c-f114-4675-a2db-123f9bd3412b/Z2hMA1dAzl.lottie"
            loop
            autoplay
            className="h-36 w-62"
          />
        </div>
      </div>

      <div>
        <Marquee pauseOnHover>
          {/** Card 1 */}
          <div className="card m-5 card-side bg-red-50 shadow-xl">
            <div className="card-body">
              <h2 className="text-xl font-light">Explore New Arrivals</h2>
              <p className="text-2xl w-[200px] font-bold">
                Shop The Latest from top brands
              </p>
              <Link href="/product">
                <div className="card-actions justify-start">
                  <button className="btn btn-primary">Shop Now</button>
                </div>
              </Link>
            </div>
            <figure className="w-[200px]">
              <img src="/11873-removebg-preview.png" alt="Item" />
            </figure>
          </div>

          {/** Card 2 */}
          <div className="card m-5 card-side bg-orange-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-xl font-light">Explore New Arrivals</h2>
              <p className="text-2xl w-[200px] font-bold">
                Give the Gift of choice
              </p>
              <Link href="/product">
                <div className="card-actions justify-start">
                  <button className="btn btn-primary">Shop Now</button>
                </div>
              </Link>
            </div>
            <figure className="w-[200px]">
              <img src="/312-removebg-preview.png" alt="Item" />
            </figure>
          </div>

          {/** Card 3 */}
          <div className="card m-5 card-side bg-amber-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-xl font-light">Explore New Arrivals</h2>
              <p className="text-2xl w-[200px] font-bold">
                Up to 80% of retail
              </p>
              <Link href="/product">
                <div className="card-actions justify-start">
                  <button className="btn btn-primary">Shop Now</button>
                </div>
              </Link>
            </div>
            <figure className="w-[200px]">
              <img
                src="/black-headphones-digital-device-removebg-preview.png"
                alt="Item"
              />
            </figure>
          </div>

          {/** Card 4 */}
          <div className="card m-5 card-side bg-emerald-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-xl font-light">Explore New Arrivals</h2>
              <p className="text-2xl w-[200px] font-bold">
                Shop The Latest from top brands
              </p>
              <Link href="/product">
                <div className="card-actions justify-start">
                  <button className="btn btn-primary">Shop Now</button>
                </div>
              </Link>
            </div>
            <figure className="w-[200px]">
              <img
                src="/laptop-balancing-with-purple-background-removebg-preview.png"
                alt="Item"
              />
            </figure>
          </div>

          {/** Card 5 */}
          <div className="card m-5 card-side bg-cyan-50 shadow-xl">
            <div className="card-body">
              <h2 className="text-xl font-light">Explore New Arrivals</h2>
              <p className="text-2xl w-[200px] font-bold">
                Up to 80% of retail
              </p>
              <Link href="/product">
                <div className="card-actions justify-start">
                  <button className="btn btn-primary">Shop Now</button>
                </div>
              </Link>
            </div>
            <figure className="w-[200px]">
              <img
                src="/smartphone-balancing-with-pink-background-removebg-preview.png"
                alt="Item"
              />
            </figure>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Discover;
