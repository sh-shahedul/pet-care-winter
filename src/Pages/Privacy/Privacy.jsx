import React from "react";
import { motion } from "framer-motion";
import { FaPaw, FaLock, FaCookieBite, FaInfoCircle } from "react-icons/fa";

const Privacy = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const sections = [
    {
      icon: <FaInfoCircle className="text-blue-500 w-6 h-6" />,
      title: "Information We Collect",
      content:
        "We may collect personal information such as your name, email, and contact details when you interact with our website or purchase pet products. Non-personal data such as browser type, pages visited, and time spent is collected to improve our services.",
    },
    {
      icon: <FaPaw className="text-pink-500 w-6 h-6" />,
      title: "How We Use Your Information",
      content:
        "Your information is used to provide better services, process orders, send updates, and improve your experience. We never sell or share your data with third parties for marketing.",
    },
    {
      icon: <FaCookieBite className="text-yellow-500 w-6 h-6" />,
      title: "Cookies",
      content:
        "Our site uses cookies to enhance user experience and remember preferences. You may disable cookies in your browser, but some features may not work properly.",
    },
    {
      icon: <FaLock className="text-green-500 w-6 h-6" />,
      title: "Security",
      content:
        "We implement security measures to protect your data, but no online service is 100% secure. We cannot guarantee absolute protection.",
    },
    {
      icon: <FaInfoCircle className="text-orange-500 w-6 h-6" />,
      title: "Changes to This Policy",
      content:
        "Pet Frosty may update this Privacy Policy occasionally. Please check this page periodically to stay informed.",
    },
  ];

  return (
    <div className=" py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-screen-2xl mx-auto md:px-10 px-5 rounded-3xl  "
      >
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          🐾 Privacy Policy 🐾
        </h1>

        <p className="text-gray-700 mb-10 text-lg md:text-xl text-center leading-relaxed">
          At <span className="font-bold text-orange-600">Pet Frosty</span>, your privacy is our top priority. We
          protect your personal info while ensuring a safe, fun browsing experience for you and your furry friends!
        </p>

        {/* Sections */}
        <div className="space-y-10">
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
                <h2 className="text-xl md:text-3xl font-bold mb-2">
                  {section.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">{section.content}</p>
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
          For any questions, contact us at{" "}
          <span className="text-blue-600 font-bold ml-1">
            support@petfrosty.com
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Privacy;
