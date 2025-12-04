import React from 'react';
import HeroSlider from '../../Components/HeroSlider/HeroSlider';
import { Link, useLoaderData } from 'react-router';
import Cards from '../../Components/Cards/Cards';
import WinterTips from '../../Components/Tips/WinterTips ';
import ExpertVets from '../../Components/ExpertVets/ExpertVets ';
import Adopt from '../../Components/Adopt/Adopt';
import ServiceTitle from '../../Components/ServiceTitle/ServiceTitle';
import DogScrollAnimation from '../../Components/Animation/DogScrollAnimation';
import MegaDeal from '../../Components/MegaDeals/MegaDeal';
    
const Home = () => {
  const data = useLoaderData();
  const sliceData = data.slice(0, 9);

  return (
    <div className="mx-auto px-2 sm:px-4 md:px-8 lg:px-10">

      {/* HERO SECTION */}
      <section className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-10">
        <HeroSlider />
        <ServiceTitle />
        <DogScrollAnimation />
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 md:gap-6 max-w-screen-2xl mx-auto mt-4 sm:mt-6 px-1 sm:px-2 md:px-10">

        {/* Cards Section */}
        <div className="md:col-span-12 lg:col-span-9 order-1">
          <div className="w-full">

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
              {sliceData.map((petcare) => (
                <Cards key={petcare.serviceId} petcare={petcare} />
              ))}
            </div>

            {/* Explore Button */}
            <Link
              to="service"
              className="flex justify-center mt-6 text-white font-bold px-4 py-2 rounded-2xl bg-linear-to-r from-orange-400 to-orange-600 hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Explore more →
            </Link>

          </div>
        </div>

        {/* Sidebar */}
        <aside className="md:col-span-12 lg:col-span-3 order-2">
          <div className="lg:sticky lg:top-20">
            <WinterTips />
          </div>
        </aside>

      </main>

      {/* OTHER SECTIONS */}
     <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-10">
        <ExpertVets />
        <MegaDeal />
        <Adopt />
     </div>

    </div>
  );
};

export default Home;
