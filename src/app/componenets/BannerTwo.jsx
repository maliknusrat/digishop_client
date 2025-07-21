"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Banner2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div
      ref={ref}
      className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto py-20"
    >
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div>
          <div className="flex items-start justify-start">
            <h2 className="text-[32px] text-white">
              DIGI
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FC] from-6.75% to-[#00FEE3] to-95.73%">
                SHOP
              </span>
            </h2>
          </div>

          <div>
            <h1 className="text-5xl text-slate-100 font-bold w-[400px] py-10">
              Earn free money with Electraz
            </h1>
            <p className="text-slate-200 pb-10">
              With Electraz you will get freeship & savings combo...
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="btn bg-white rounded-3xl">
              Savings Combo
            </div>
            <div className="btn btn-success btn-outline text-teal-400 hover:text-white rounded-3xl">
              Discover More
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeRight}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Image
          src="/THG_M470_05.png"
          alt="Electraz Product"
          width={600}
          height={400}
          className="w-[600px] h-auto object-contain"
          priority
        />
      </motion.div>
    </div>
  );
};

export default Banner2;
