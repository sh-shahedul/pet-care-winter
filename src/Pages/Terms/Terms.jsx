import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPaw, FaFileContract, FaShieldAlt } from "react-icons/fa";

const Terms = () => {
  const fadeInUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  const sections = [
    {
      icon: <FaFileContract className="text-blue-500 w-6 h-6" />,
      title: "Acceptance of Terms",
      content:
        "By accessing or using Pet Frosty website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.",
    },
    {
      icon: <FaPaw className="text-pink-500 w-6 h-6" />,
      title: "User Responsibilities",
      content:
        "You are responsible for maintaining the confidentiality of your account and any activities under it. You must provide accurate information when registering or making purchases.",
    },
    {
      icon: <FaCheckCircle className="text-green-500 w-6 h-6" />,
      title: "Prohibited Activities",
      content:
        "You agree not to use our website for any illegal purposes, to harass other users, or to distribute malicious software. Any violation may result in account suspension.",
    },
    {
      icon: <FaShieldAlt className="text-yellow-500 w-6 h-6" />,
      title: "Limitation of Liability",
      content:
        "Pet Frosty is not responsible for any damages, losses, or injuries resulting from the use of our website or products. Use our services at your own risk.",
    },
    {
      icon: <FaPaw className="text-purple-500 w-6 h-6" />,
      title: "Changes to Terms",
      content:
        "We may update these Terms and Conditions from time to time. Users are encouraged to review this page periodically to stay informed of any changes.",
    },
  ];

  return (
    <div className=" py-12 px-4 md:px-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp()}
        className="max-w-screen-2xl mx-auto px-10  rounded-3xl"
      >
        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-gray-700 mb-12">
          🐾 Terms & Conditions 🐾
        </h1>

        <p className="text-gray-700 mb-10 text-lg md:text-xl text-center leading-relaxed">
          Welcome to <span className="text-orange-600 font-bold">Pet Frosty</span>. Please read these Terms and Conditions carefully before using our website or purchasing products. By using our services, you agree to these terms.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-blue-50/50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex-shrink-0">{section.icon}</div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                  {section.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">{section.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: sections.length * 0.2 }}
          className="text-gray-700 mt-12 text-center text-lg md:text-xl"
        >
          For any questions regarding these Terms, contact us at{" "}
          <span className="text-blue-600 font-bold ml-1">
            support@petfrosty.com
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Terms;
