import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router";
import NotFound from "../Error/NotFound";
import toast from "react-hot-toast";

const ServiceDetails = () => {
  const { id } = useParams();
  const services = useLoaderData();
  const service = services.find((s) => s.serviceId === Number(id));
  const navigate = useNavigate();

  if (!service) return <NotFound />;

  const handleBooking = (e) => {
    e.preventDefault();
    toast.success("Booking Successful!");
  };

  return (
    <div className="bg-gray-50 md:px-10 px-5 py-12 max-w-screen-2xl mx-auto">
      

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-white font-bold md:px-8 px-4 py-2 mr-2 rounded-2xl bg-linear-to-l from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition-all duration-300 focus:outline-none mb-10"
      >
        ← Back to Services
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side */}
        <div className="lg:w-2/3 w-full space-y-6">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-indigo-50 p-4 rounded-xl text-sm flex flex-col">
              <span className="font-semibold">Category</span>
              <span>{service.category}</span>
            </div>
            <div className="bg-green-50 p-4 rounded-xl text-sm flex flex-col">
              <span className="font-semibold">Slots Available</span>
              <span>{service.slotsAvailable}</span>
            </div>
            <div className="bg-yellow-50 p-4 rounded-xl text-sm flex flex-col">
              <span className="font-semibold">Provider</span>
              <span>{service.providerName}</span>
            </div>
            <div className="bg-pink-50 p-4 rounded-xl text-sm flex flex-col">
              <span className="font-semibold">Email</span>
              <span>{service.providerEmail}</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/3 w-full bg-white rounded-2xl shadow-lg p-6 space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Purchase / Book</h3>
          <p className="text-gray-700 font-semibold">
            Price: <span className="text-orange-600 text-xl font-bold">${service.price}</span>
          </p>
          <p className="text-gray-700 font-semibold">Provider: {service.providerName}</p>
          <p className="text-gray-700 font-semibold">{service.providerEmail}</p>
          <p className="text-gray-700 font-semibold">Available Slots: {service.slotsAvailable}</p>

          <form className="flex flex-col gap-4" onSubmit={handleBooking}>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <select
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            >
              <option value="">Select preferred time</option>
              {["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"].map((time, idx) => (
                <option key={idx} value={time}>{time}</option>
              ))}
            </select>
            <textarea
              placeholder="Any questions or requests?"
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Book Now
            </button>
          </form>

          <ul className="text-gray-600 text-sm space-y-1 mt-2">
            <li>✔ Instant booking confirmation</li>
            <li>✔ Flexible rescheduling policy</li>
            <li>✔ Certificate upon completion</li>
            <li>✔ Lifetime access to resources</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
