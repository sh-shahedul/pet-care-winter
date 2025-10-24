// import React from "react";

// const experts = [
//   {
//     id: 1,
//     name: "Dr. Sarah Johnson",
//     specialty: "Canine & Feline Care",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
//   {
//     id: 2,
//     name: "Dr. Michael Lee",
//     specialty: "Exotic Pets Specialist",
//     image: "https://randomuser.me/api/portraits/men/46.jpg",
//   },
//   {
//     id: 3,
//     name: "Dr. Emma Williams",
//     specialty: "Senior & Geriatric Pets",
//     image: "https://randomuser.me/api/portraits/women/48.jpg",
//   },
//   {
//     id: 4,
//     name: "Dr. James Smith",
//     specialty: "Surgery & Emergency Care",
//     image: "https://randomuser.me/api/portraits/men/50.jpg",
//   },
// ];

// const ExpertVets = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//   <h2 className="text-4xl font-bold text-center mb-10 text-orange-500">
//     Meet Our Expert Vets
//   </h2>
//   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//     {experts.map((vet) => (
//       <div
//         key={vet.id}
//         className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
//       >
//         <div className="relative">
//           <img
//             src={vet.image}
//             alt={vet.name}
//             className="w-full h-64 object-cover rounded-t-3xl transition-transform duration-500 hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-t-3xl flex items-end justify-center p-4">
//             <p className="text-white font-semibold text-center">{vet.name}</p>
//           </div>
//         </div>
//         <div className="p-6 text-center">
//           <h3 className="text-xl font-bold text-orange-600">specialty:{vet.specialty}</h3>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

//   );
// };

// export default ExpertVets;






import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { MdOutlinePets } from 'react-icons/md';

const teamMembers = [
  {
    name: 'Pearlie Bowman',
    role: 'Veterinarian',
    image: 'https://i.ibb.co/Pz90c2BG/team-1.webp',
   
  },
  {
    name: 'David Warner',
    role: 'Pet Groomer',
    image: 'https://i.ibb.co/G3McxqHJ/team-2.webp',
    
  },
  {
    name: 'Brooklyn Simmons',
    role: 'Pet Nutritionist',
    image: 'https://i.ibb.co/n4zc5r6/team-3.webp',
    
  },
];

const ExpertVets = () => {
  return (
    <section className="text-center py-16 px-4 bg-base-100">
       <p className="text-orange-500 text-xl font-semibold mb-2 flex justify-center items-center"><MdOutlinePets />&nbsp; Team Members &nbsp;<MdOutlinePets/>   </p>
      <h2 className="text-3xl md:text-4xl font-bold hover:text-orange-500 mb-12">
        Meet Our Experience Pet Care Team
      </h2>

      <div className="flex flex-wrap justify-center gap-10 ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className=" rounded-full   w-72 h-[400px] flex flex-col items-center pt-8 pb-6  transition-transform hover:scale-105 "
          >
            {/* Image Hover Animation */}
            <div className=" overflow-hidden h-94 rounded-t-full">
              <img
                src={member.image}
                alt={member.name}
                className="  object-cover"
              />
            </div>

            {/* Name and Role */}
            <div className='bg-amber-100 rounded-b-full w-[288px] py-10'>
                <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
            <p className="text-sm text-secondary mb-4">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertVets;

