"use client";

import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#1e1f31] via-[#262738] to-[#1e1f31] py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-2xl font-semibold text-amber-300 uppercase tracking-wide mb-2">
            Our Testimonial
          </p>
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            What They Say
          </h2>
        </motion.div>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper px-4 md:px-12"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: false }}
                className="bg-[#ffffff0a] border border-white/10 backdrop-blur-md p-10 rounded-3xl shadow-xl max-w-3xl mx-auto"
              >
                <Rating
                  style={{ maxWidth: 160 }}
                  value={review.rating}
                  readOnly
                  className="mx-auto"
                />
                <p className="my-6 text-lg leading-relaxed text-center text-gray-200">
                  “{review.details}”
                </p>
                <div className="flex flex-col items-center gap-3 mt-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-pink-500 shadow-md relative">
                    <Image
                      src={review.img}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-pink-400">
                    {review.name}
                  </h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
