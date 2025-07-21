"use client";

import React from "react";
import { Carousel } from "antd";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import "antd/dist/reset.css"; // ⬅️ Make sure you include this if using Ant Design v5+

export default function Banner() {
  return (
    <div>
      <Carousel
        autoplay
        autoplaySpeed={5000} // slide every 5 seconds
        dots
        pauseOnHover={false}
        infinite
        effect="scrollx"
      >
        {/* Slide 1 */}
        <div className="bg-sky-800 text-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 pt-10 gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-light mb-4">Discover the New Season</h2>
              <TypeAnimation
                sequence={[
                  "Fresh Looks for Every Mood",
                  1500,
                  "Step Into the Spotlight",
                  1500,
                ]}
                wrapper="h2"
                cursor
                repeat={Infinity}
                className="text-4xl font-extrabold"
              />
            </div>
            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px]">
              <Image
                src="/surprised-happy-bearded-man-shirt-pointing-away-removebg-preview.png"
                alt="Slide 1"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="bg-sky-900 text-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 pt-10 gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-light mb-4">Step into the Spotlight</h2>
              <TypeAnimation
                sequence={[
                  "Fashion That Speaks Boldly",
                  1500,
                  "Wear Confidence Daily",
                  1500,
                ]}
                wrapper="h2"
                cursor
                repeat={Infinity}
                className="text-4xl font-bold"
              />
            </div>
            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px]">
              <Image
                src="/african-american-student-walking-street-talking-phone-removebg-preview.png"
                alt="Slide 2"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="bg-sky-700 text-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 pt-10 gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-light mb-4">New Arrivals Are Here</h2>
              <TypeAnimation
                sequence={[
                  "Trendy Pieces You’ll Love",
                  1500,
                  "Perfect Fit, Perfect Style",
                  1500,
                ]}
                wrapper="h2"
                cursor
                repeat={Infinity}
                className="text-4xl font-extrabold"
              />
            </div>
            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px]">
              <Image
                src="/surprised-happy-bearded-man-shirt-pointing-away-removebg-preview.png"
                alt="Slide 3"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="bg-sky-950 text-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 pt-10 gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-light mb-4">Unleash Your Inner Style</h2>
              <TypeAnimation
                sequence={[
                  "Wear What Moves You",
                  1500,
                  "Find Your Fashion Voice",
                  1500,
                ]}
                wrapper="h2"
                cursor
                repeat={Infinity}
                className="text-4xl font-extrabold"
              />
            </div>
            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px]">
              <Image
                src="/happy-good-looking-man-glasses-pointing-finger-left-Photoroom.png-Photoroom.png"
                alt="Slide 4"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
