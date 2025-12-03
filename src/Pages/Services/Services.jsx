// import React, { use } from 'react';
// import ServiceSection from '../../Components/ServiceSection/Servicesection';
// import { AuthContext } from '../../Provider/AuthContex';
// import Loading from '../../Components/Loading/Loading';
  
// const Services = () => {
//   const {loading}=use(AuthContext)
//     return (
//         <div  className='bg-linear-to-br from-orange-100 via-orange-200 to-orange-50 min-h-screen'>
//           {
//             loading ? (<Loading></Loading>):(<ServiceSection></ServiceSection>)
//           }
//         </div>
//     );
// };

// export default Services;

import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import Card from "../../Components/Cards/Cards";
import { AuthContext } from "../../Provider/AuthContex";
import Loading from "../../Components/Loading/Loading";

const Services = () => {
  const {loading}=use(AuthContext)
  const petcares = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(petcares.map((item) => item.category))];

  const filteredServices =
    selectedCategory === "All"
      ? petcares
      : petcares.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-base-200">

      {
        loading ? (<Loading></Loading>):  <>    <div className="max-w-screen-2xl px-4 mx-auto pt-10">

        {/* centered title + description */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600">
            Our Services
          </h1>

          <p className="text-gray-700 mt-2">
            Explore our winter-special pet care services designed to keep your pets
            warm, healthy, and happy throughout the cold season.
          </p>
        </div>

        {/* available service + filter side-by-side */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center w-[97%] mx-auto">
          
          {/* available services */}
          <p className="font-bold  text-orange-600 text-lg md:text-3xl">
            Available Services: <span className="md:text-lg text-base text-black"> ({filteredServices.length})</span>
          </p>

          {/* filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="select px-5 py-2 border border-orange-400 rounded-lg bg-white shadow-md cursor-pointer mt-4 md:mt-0 max-w-100 "
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ---------- SERVICES GRID ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10 max-w-screen-2xl px-4 mx-auto">
        {filteredServices.map((petcare) => (
          <Card key={petcare.serviceId} petcare={petcare} />
        ))}
      </div></>
      }
   
    </div>
  );
};

export default Services;
