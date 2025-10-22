import React from 'react';
import pet1 from '../../assets/pet-1.jpg'
import pet2 from '../../assets/pet-2.jpg'
import pet3 from '../../assets/pet-3.jpg'
import pet4 from '../../assets/pet-4.jpg'
import pet5 from '../../assets/pet-5.jpg'
import bgimg from '../../assets/hero-bg.jpg'
const HeroSlider = () => {
    return (

      <div style={{ backgroundImage: `url(${bgimg})` }} className='bg-cover bg-center bg-no-repeat  px-4 h-auto sm:h-auto md:h-[500px] lg:h-[650px]   flex md:flex-row flex-col justify-center items-start gap-10   ' >
         <div className='flex-1 md:mt-20 mt-10'>  
          <h3 className='text-xl font-semibold text-orange-500'>WELCOME TO PET FROSTY</h3>
          <h1 className='text-5xl font-bold mt-5'>The Best Care for Your Best Friend</h1>
          <p className='text-base text-gray-500 mt-5 font-semibold'>At Pet Frosty, we provide exceptional care and services for your pets, including <br /> grooming, boarding, and walking. Trust us to ensure your furry friends are <br /> happy.</p>
           <button className="text-base font-bold text-white rounded-2xl px-4 py-2 mt-3 bg-gradient-to-l from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 hover:scale-105  transition-all">
          View Details
        </button>


         </div>
        <div className="carousel md:w-[200px] md:h-[400px] flex-1  rounded-xl md:mt-20">
  <div id="slide1" className="carousel-item relative w-full ">
    <img
    src={pet1}
      className="w-full rounded-xl  " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between ">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={pet2}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={pet3}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={pet4}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img
      src={pet5}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
       </div>

            
      </div>

       
    );
};

export default HeroSlider;