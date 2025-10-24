import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import { Link } from 'react-router';
import { FaStar } from 'react-icons/fa';

const Card = ({ petcare }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <div
      data-aos="zoom-in-up"
      className="max-w-sm  bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transform ansition-all    duration-500  animate__animated animate__ZoomInUp"
    >
      <div className="overflow-hidden">
        <img
          src={petcare.image}
          alt={petcare.serviceName}
          className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold text-gray-800 hover:text-orange-500 transition-colors duration-300">
          {petcare.serviceName}
         </h2>
          <div className="flex items-center gap-2">
                      <FaStar className="text-orange-400" />
                      <FaStar className="text-orange-400" />
                      <FaStar className="text-orange-400" />
                      <FaStar className="text-orange-400" />
                      <FaStar className="text-orange-400" />
                      <span className="text-lg font-semibold">{petcare.rating}</span>
                    </div>
        <p className="text-lg font-semibold text-blue-600">${petcare.price}</p>
        <Link to={`/service-details/${petcare.serviceId}`} className="text-white font-bold px-4 py-2 rounded-2xl bg-linear-to-l from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
            View Details →
          </Link>
      </div>
    </div>
  );
};

export default Card;

