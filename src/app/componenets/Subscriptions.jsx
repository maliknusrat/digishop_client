"use client";

import { IoSend } from "react-icons/io5";
import Image from "next/image";

const Subscriptions = () => {
  return (
    <div className="bg-sky-100 ">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
        <div className="mt-10">
          <h1 className="text-4xl font-bold w-[300px]">
            Don't miss out on Special Offer
          </h1>
          <p className="w-[350px] py-4 text-zinc-500">
            Register to receive news about the latest, savings combos, discount
            codes...
          </p>

          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-5">
              <p className="p-1 bg-red-100 text-xs rounded-2xl w-7 text-center text-red-600">
                01
              </p>
              <p>Savings Combo</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="p-1 bg-lime-100 text-xs rounded-2xl w-7 text-center text-lime-600">
                02
              </p>
              <p>Freeship</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="p-1 bg-teal-100 text-xs rounded-2xl w-7 text-center text-teal-600">
                03
              </p>
              <p>Premium magazines</p>
            </div>
          </div>

          <label className="input input-bordered  flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
            <button className="bg-none">
              <IoSend />
            </button>
          </label>
        </div>

        <figure className="mt-0 mb-0 pb-0 flex items-end">
          <Image
            src="/happy-good-looking-man-glasses-pointing-finger-left-Photoroom.png-Photoroom.png"
            alt="Man pointing offer"
            width={400}
            height={350}
            className="object-contain block"
            priority
          />
        </figure>
      </div>
    </div>
  );
};

export default Subscriptions;
