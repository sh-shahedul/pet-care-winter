 import React from 'react';
 import { Swiper, SwiperSlide } from "swiper/react";
 import { Navigation, Pagination, Autoplay } from "swiper/modules";
 import pet1 from '../../assets/pet-1.jpg'
 import pet2 from '../../assets/pet-2.jpg'
 import pet3 from '../../assets/pet-3.jpg'
 import pet4 from '../../assets/pet-4.jpg'
 import pet5 from '../../assets/pet-5.jpg'
 import bgimg from '../../assets/hero-bg.jpg'
 import { Link } from 'react-router';
 import "swiper/css";
 import "swiper/css/navigation";
 import "swiper/css/pagination";
 const HeroSlider = () => {
    return (
         <div style={{ backgroundImage: `url(${bgimg})` }} className='bg-cover bg-center bg-no-repeat h-auto sm:h-auto md:h-[550px] lg:h-[650px] flex md:flex-row flex-col justify-center items-start gap-10 w-full ' >
         <div className='flex-1 md:mt-20 mt-5 p-4'>  
          <h3 className='text-xl font-semibold text-orange-500 md:text-left text-center'>WELCOME TO PET FROSTY</h3>
          <h1 className='lg:text-5xl md:text-4xl md:text-left text-center text-3xl font-bold mt-5 '>The Best Care for Your Best Friend</h1>
          <p className='text-base text-gray-500 mt-5 font-semibold mb-5 md:text-left text-center max-w-[500px]'>At Pet Frosty, we provide exceptional care and services for your pets, including  grooming, boarding, and walking. Trust us to ensure your furry friends are  happy.</p>
           <div className='flex justify-center md:justify-start'>
            <Link to='/service' className="text-base  font-bold text-white rounded-2xl px-4 py-2 bg-linear-to-l from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 hover:scale-105  transition-all">
           Our Services
           </Link>
           </div>
           </div>

  <div className="w-full md:w-[220px] flex-1 rounded-xl md:mt-20 px-3 md:px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="rounded-xl"
      >
        {[pet1, pet2, pet3, pet4, pet5].map((pet, index) => (
          <SwiperSlide key={index}>
            <div className="  rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src={pet}
                alt={`Pet ${index + 1}`}
                className="w-full h-[250px] md:h-[400px] object-cover rounded-xl shadow-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>          
      </div>    
    );
 };
   export default HeroSlider;
