import React from "react";
import { motion } from "framer-motion";
import { MdPets } from "react-icons/md";
import { GiLoveHowl, GiRolledCloth } from "react-icons/gi";
import { FaUserMd } from "react-icons/fa";
import ServiceSection from "../../Components/ServiceSection/Servicesection";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Stats Data
const stats = [
  { number: "250+", label: "Pets Rescued", icon: <MdPets size={45} /> },
  { number: "120+", label: "Winter Kits Delivered", icon: <GiRolledCloth size={45} /> },
  { number: "80+", label: "Adoptions", icon: <GiLoveHowl size={45} /> },
  { number: "50+", label: "Volunteers", icon: <FaUserMd size={45} /> },
];

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-20">

      {/* HEADER BANNER */}
     {/* HERO SECTION */}
<motion.div
  className="relative bg-linear-to-l from-orange-400 via-orange-500 to-orange-600 
             overflow-hidden rounded-2xl min-h-[280px] md:h-[300px] flex items-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <div className="absolute inset-0 bg-black/10" />

  <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24 relative z-10">
    <motion.div
      className="max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
        About Pet Winter Frosty
      </h2>

      <p className="text-white max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
        Pet Frosty is a complete platform designed to protect pets during cold seasons.
        We ensure winter-focused medical support, nutrition, adoption services,
        and essential warmth solutions for every pet.
      </p>
    </motion.div>
  </div>
</motion.div>

{/* STATS SECTION */}
<motion.div
  className="container mx-auto px-4 relative z-20"
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mt-10 sm:-mt-10 md:-mt-16">
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        variants={fadeInUp}
        className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 text-center 
                   hover:shadow-2xl transition-all duration-300"
      >
        {/* Icon */}
        <p className="flex justify-center text-xl sm:text-3xl hover:text-orange-600 mb-2 sm:mb-3">
          {stat.icon}
        </p>

        {/* Number */}
        <h3 className="text-xl sm:text-3xl font-bold text-orange-600 mb-1 sm:mb-2">
          {stat.number}
        </h3>

        {/* Label */}
        <p className="text-gray-600 text-xs sm:text-sm">
          {stat.label}
        </p>
      </motion.div>
    ))}
  </div>
</motion.div>


      {/* OUR MISSION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24 mt-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4 flex items-center gap-2 "><span className="animate-bounce">❄️</span> Our Mission</h3>
          <p className="text-gray-700 mb-2">
            Our mission is to protect every pet during the harsh winter season.
            We aim to make winter care accessible, affordable, and safe for all pet owners.
          </p>
          <p className="text-gray-700">
            Through medical support, winter clothing, and emergency care,
            we ensure that no pet suffers due to cold weather.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="https://i.pinimg.com/originals/9f/df/93/9fdf93860f9269c05411e27291a7b936.gif"
            alt="Mission GIF"
            className="rounded-2xl w-[420px] shadow-xl"
          />
        </motion.div>
      </div>

      {/* OUR VISION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        <motion.div
          className="flex justify-center"
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="https://media3.giphy.com/media/jWvpexCxDDZToA17Mn/giphy.gif"
            alt="Vision GIF"
            className="rounded-2xl w-[420px] shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-2 flex items-center gap-2 "><span className="animate-bounce">💡</span> Our Vision</h3>
          <p className="text-gray-700 mb-4">
            Our vision is a world where every pet gets proper winter protection and warmth.
          </p>
          <p className="text-gray-700 mb-2">
            We aim to build winter shelters, emergency rescue centers,
            and mobile winter care units nationwide.
          </p>
          <p className="text-gray-700">
            Our long-term goal is to educate communities and empower pet owners
            to take proper winter safety measures.
          </p>
        </motion.div>
      </div>

      {/* OUR SERVICES */}
      {/* <motion.div
        className="max-w-6xl mx-auto mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h3>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Winter Health Check", desc: "Full body checkups, winter medicine & safety support.", icon: "🐶" },
            { title: "Pet Adoption", desc: "Helping pets find warm & loving homes during winter.", icon: "🐾" },
            { title: "Winter Survival Kits", desc: "Jackets, blankets, grooming essentials & nutrition packs.", icon: "🧣" },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 backdrop-blur-lg bg-opacity-60 text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div> */}
      <ServiceSection></ServiceSection>

      {/* TRAINING DEPARTMENTS — NEW DESIGN */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="text-center mt-28"
      >
        {/* Title + Animated Line */}
        <div className="relative flex items-center justify-center mb-12">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "120px", opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[3px] bg-orange-400 rounded-l-full"
          />

          <h2 className="text-4xl font-bold text-gray-900 mx-6">
            Training Departments
          </h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "120px", opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[3px] bg-orange-400 rounded-r-full"
          />
        </div>

        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Professional winter care & pet handling courses designed to improve pet safety.
        </p>

        {/* Training Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {[
            "Pet First Aid Training",
            "Winter Care Handling",
            "Pet Nutrition & Diet",
            "Rescue & Emergency Support",
            "Animal Behavior Training",
            "Pet Grooming & Hygiene",
          ].map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl 
                         border border-orange-200 transition-all duration-300 
                         hover:-translate-y-2 hover:border-orange-400
                         backdrop-blur-xl bg-opacity-70"
            >
              <p className="font-semibold text-gray-800 text-lg">{dept}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
    </div>
  );
};

export default About;

