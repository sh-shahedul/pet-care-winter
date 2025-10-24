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
            className=" rounded-full w-72 h-[400px] flex flex-col items-center pt-8 pb-6  transition-transform hover:scale-105 "
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
            <p className="text-sm text-secondary font-medium mb-4">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertVets;

