import React from 'react';
import { MdOutlinePets } from 'react-icons/md';

const ServiceTitle = () => {
    return (
         <div className='p-5 mt-10 '>
              <p className="text-orange-500 text-4xl font-semibold mb-2 flex justify-center items-center"><MdOutlinePets />&nbsp; Our Services &nbsp;<MdOutlinePets/>   </p>
             <p className="text-center max-w-[900px]  mx-auto text-base md:text-xl font-medium text-gray-700 "> <span className="text-orange-600 font-semibold p-5">Keep your pets warm, happy, and healthy this winter!</span>Our <span className="text-orange-500 font-semibold">Winter Pet Frosty Services</span> include cozy clothing, skin protection, healthy meal plans, and regular health checkups. With our <span className="text-orange-600 font-semibold">expert vets</span> and personalized care,<span className="text-orange-500 font-semibold"> your furry friend</span> will enjoy a comfortable and joyful winter season. ❄️ </p>
           </div>
    );
};

export default ServiceTitle;