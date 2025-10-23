import React from "react";
import { useLoaderData, useParams, Link } from "react-router";
import { FaStar, FaTag, FaEnvelope, FaCalendarAlt, FaArrowLeft } from "react-icons/fa";
import Booked from "../Booked/Booked";

const ServiceDetails = () => {
  const { id } = useParams();
  const services = useLoaderData();

  const service = services.find((s) => s.serviceId === Number(id));

  if (!service) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-orange-50">
        <h2 className="text-4xl font-semibold text-gray-600">
          Service not found 😢
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 ">
            <div className=" flex justify-center items-center py-12 px-4">
      <div
        className="card lg:card-side bg-white shadow-2xl rounded-3xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500"
        
      >
        {/* Left Image */}
        <figure className="lg:w-1/2 w-full">
          <img
            src={service.image}
            alt={service.serviceName}
            className=" h-[555px] object-cover"
          />
        </figure>

        {/* Right Details */}
        <div className="card-body lg:w-1/2 w-full p-8">
          <h2 className="card-title text-4xl font-bold text-orange-600 mb-4">
            {service.serviceName}
          </h2>

          <div className="space-y-3 mb-4 text-gray-700">
            <p className="flex items-center gap-2">
              <FaTag className="text-orange-500" />{" "}
              <span className="font-semibold text-base ">{service.category}</span>
            </p>
            <p className="flex items-center gap-2 text-base font-semibold">
              <FaEnvelope className="text-orange-500" /> {service.providerEmail}
            </p>
            <p className="flex items-center gap-2 text-base font-semibold" >
              <FaCalendarAlt className="text-orange-500 " /> Slots:{" "}
              {service.slotsAvailable}
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed font-medium text-base ">
            <span className='font-bold'>Description :</span> {service.description}
          </p>

          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg text-gray-600 font-bold">Price :</h3>
              <p className="text-3xl font-bold text-orange-500">
                ${service.price}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              <span className="text-lg font-semibold">{service.rating}</span>
            </div>
          </div>

          <div className="bg-orange-50 p-5 rounded-2xl shadow-inner mb-6">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">
              Provided by:
            </h3>
            <p className="text-gray-700 font-medium">
              {service.providerName}
            </p>
          </div>

          <div className="card-actions justify-start">
            <Link
              to="/"
              className="btn bg-orange-500 hover:bg-orange-600 text-white gap-2 shadow-md"
            >
              <FaArrowLeft /> Back to Home
            </Link>
          </div>
        </div>
      </div>

       
    </div>
     <Booked></Booked>
    </div>
  );
};

export default ServiceDetails;
