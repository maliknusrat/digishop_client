"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";


const categories = [
  { id: 1, title: "Smart Watches", count: "50+ Categories", img: "/11873.jpg" },
  { id: 2, title: "Headphones", count: "20+ Categories", img: "/black-headphones-digital-device.jpg" },
  { id: 3, title: "Laptops", count: "50+ Categories", img: "/laptop-balancing-with-purple-background.jpg" },
  { id: 4, title: "Smart Phones", count: "50+ Categories", img:"/smartphone-balancing-with-pink-background.jpg" },
];

const Categories = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="max-w-6xl mx-auto mb-20 px-4">
      <motion.h1
        className="text-4xl text-slate-200 font-bold text-center py-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Shop By Sections
      </motion.h1>

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
      >
        {categories.map((item, i) => (
          <motion.div
            key={item.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col items-center text-center bg-slate-600 rounded-xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="overflow-hidden rounded-md mb-4 w-[220px] h-[180px] relative border">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover rounded-md"
                />
              </motion.div>
            </div>
            <h1 className="text-xl text-slate-50 font-bold">{item.title}</h1>
            <p className="text-sm text-slate-200 font-light">{item.count}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
