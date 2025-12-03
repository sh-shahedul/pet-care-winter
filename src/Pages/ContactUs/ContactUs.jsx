import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("🎉 Your message has been sent!");
    e.target.reset();
  };

  return (
    <section className="bg-gray-100 py-16">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Container for all sections */}
      <div className="max-w-screen-2xl mx-auto px-4 flex flex-col gap-16">

        {/* HEADER */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            📬 Contact Us
          </h2>
          <p className="text-gray-600 sm:text-lg max-w-3xl mx-auto">
            Have questions or need help for your pet during winter? Reach out to us and we'll assist you immediately.
          </p>
        </motion.div>

        {/* CONTACT FORM */}
        <motion.form
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>

        {/* CONTACT INFO */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center gap-2">
            <FaPhoneAlt className="text-orange-500 text-2xl" />
            <p className="text-gray-700 font-semibold">+880 123 456 789</p>
            <p className="text-gray-500 text-sm">Emergency Hotline</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaEnvelope className="text-orange-500 text-2xl" />
            <p className="text-gray-700 font-semibold">info@petwintercare.com</p>
            <p className="text-gray-500 text-sm">24/7 Support Email</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaMapMarkerAlt className="text-orange-500 text-2xl" />
            <p className="text-gray-700 font-semibold">Dhaka, Bangladesh</p>
            <p className="text-gray-500 text-sm">Our Main Office</p>
          </div>
        </motion.div>

        {/* EMERGENCY HELP */}
        <motion.div
          className="bg-orange-50 rounded-2xl p-6 text-center shadow-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-orange-600 mb-2">⚠ Quick Pet Winter Help</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            If you find a pet suffering from cold, please contact our emergency hotline immediately. 
            Keep them warm and safe while we provide medical assistance.
          </p>
        </motion.div>

        {/* LOCATION MAP */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            title="Pet Winter Care Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902547955017!2d90.3841521154281!3d23.810331184582456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b0543e85ef%3A0x7b958f1d0a1a8c7f!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1697712345678!5m2!1sen!2sus"
            width="100%"
            height="300"
            className="border-0 w-full"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactUs;
