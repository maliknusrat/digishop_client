"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../../public/contactUsAnimation.json";


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className="bg-white"><div className="max-w-5xl mx-auto min-h-screen flex items-center justify-center ">
      <div className="max-w-xl mx-auto p-8 bg-white rounded-xl shadow-2xl w-full md:w-3/4">
        <motion.h1
          className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h1>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <div className="mb-5">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              placeholder="example@email.com"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="3"
              className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              placeholder="Write your message here..."
            />
          </div>

          <div className="flex justify-center">
            <motion.button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-600 text-white rounded-full text-lg font-semibold hover:opacity-90 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>

        {submitted && (
          <motion.div
            className="mt-6 p-4 bg-green-200 text-green-800 rounded-md text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for your message! We'll get back to you soon.
          </motion.div>
        )}
      </div>
      <div className="flex-1">
        <Lottie
          className="h-[450px] w-full"
          animationData={animationData}
          loop={true}
        ></Lottie>
      </div>
    </div></div>
  );
};

export default ContactUs;
