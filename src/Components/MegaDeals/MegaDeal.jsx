import React, { useEffect, useState } from "react";
import megaBanner from "../../assets/megaDeal.jpg";

const MegaDeal = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endTime = new Date().getTime() + 6 * 60 * 60 * 1000;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = endTime - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto my-10 px-4">

         <div className="text-center my-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-orange-600">
          🔥 Mega Deal is Live!
        </h2>

        {/* Timer */}
        <div className="flex justify-center gap-10 text-center my-10">
          <div>
            <div className="text-4xl font-bold text-orange-600">{timeLeft.hours}</div>
            <div className="text-sm uppercase text-gray-600">Hours</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-600">{timeLeft.minutes}</div>
            <div className="text-sm uppercase text-gray-600">Minutes</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-600">{timeLeft.seconds}</div>
            <div className="text-sm uppercase text-gray-600">Seconds</div>
          </div>
        </div>

        {/* Button */}
        <a
          href="/service"
          className="bg-orange-500 px-6 py-3 rounded-md font-bold text-white hover:bg-orange-600 transition shadow-md"
        >
          Shop Now
        </a>
      </div>
      {/* Banner Image */}
      <div className="relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden sm:shadow-lg">
        <img
          src={megaBanner}
          alt="Mega Deal Banner"
          className="w-full h-full object-cover"
        />
      </div>

    
     
    </div>
  );
};

export default MegaDeal;

