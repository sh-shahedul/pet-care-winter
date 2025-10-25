import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { MdOutlinePets } from 'react-icons/md';
import { Link } from 'react-router';

const ServiceSection = () => {
  const services = [
    {
      title: "Dog Care",
      description: "Our Dog Care services include grooming, walking, boarding, and training. We ensure your furry friend is happy, healthy.",
      bgColor: "bg-green-300",
      icon: "🐶",
    },
    {
      title: "Cat Care",
      description: "At Pet Frosty, we offer specialized cat care services including grooming, boarding, and in-home visits. Our dedicated team",
      bgColor: "bg-orange-300",
      icon: "🐱",
    },
    {
      title: "Pet Grooming",
      description: "Keep your pets looking their best with our full-service grooming. From baths to nail trims, our expert groomers.",
      bgColor: "bg-blue-300",
      icon: "✂️🐾",
    },
   ];
  return (
    <div className="text-center py-16 max-w-7xl mx-auto px-4  ">
      <p className="text-orange-500 text-xl font-semibold mb-2 flex justify-center items-center"><MdOutlinePets />&nbsp; Our Services &nbsp;<MdOutlinePets/>   </p>
      <h2 className="md:text-4xl text-3xl font-bold mb-12 bg-linear-to-l from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Our one-stop solution for premium pet care</h2>

      <div className="flex flex-col md:flex-row  justify-center items-center gap-8 mb-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center text-center rounded-full ${service.bgColor} p-10 w-64 h-64 shadow-lg hover:shadow-2xl transition-all duration-500`}>
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-sm pb-3">{service.description}</p>
          </div>
        ))}
      </div>

      <Link to='/' className="text-white mt-8 flex items-center justify-center w-[200px] mx-auto font-bold px-4 py-2 rounded-2xl bg-linear-to-l from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
        <FaArrowLeft /> &nbsp;  Back To Home
      </Link>
      
    </div>
  );
};

export default ServiceSection;
