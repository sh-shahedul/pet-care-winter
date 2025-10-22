import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const tips = [
  {
    id: 1,
    title: "Keep Pets Warm Indoors",
    description:
      "Ensure your pets have a cozy, draft-free spot with soft bedding. Use blankets or pet-safe heating pads if necessary.",
  },
  {
    id: 2,
    title: "Dress for Cold Weather",
    description:
      "Small, short-haired, or senior pets benefit from sweaters or jackets. Make sure clothing is comfortable and doesn’t restrict movement.",
  },
  {
    id: 3,
    title: "Protect Paws",
    description:
      "Use pet-safe paw balm to prevent cracking. Wipe paws after walks to remove ice, salt, or chemicals.",
  },
  {
    id: 4,
    title: "Hydration is Key",
    description:
      "Pets still need fresh water in winter—check bowls frequently to prevent freezing.",
  },
  {
    id: 5,
    title: "Limit Outdoor Exposure",
    description:
      "Shorten walks during extreme cold. Watch for signs of discomfort like shivering or lifting paws off icy ground.",
  },
  {
    id: 6,
    title: "Watch for Winter Hazards",
    description:
      "Keep pets away from antifreeze and frozen ponds. Ensure your pet stays safe from slippery surfaces.",
  },
];

const WinterTips = () => {
      useEffect(() => {
        AOS.init({ duration: 1000, once: true }); 
      }, []);
  return (
    <div data-aos="fade-left"
      className="max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transform transition-all duration-500 p-3">
      <h2 className="text-4xl font-bold text-center mb-10 text-orange-500">
        Winter Care Tips for Pets
      </h2>
      <div className="flex flex-col gap-5">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-2 text-orange-600">{tip.title}</h3>
            <p className="text-gray-700">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterTips;
