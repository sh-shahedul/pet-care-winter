import React from 'react';
import toast from "react-hot-toast"
const handelbooking=(e)=>{
    e.preventDefault()
    console.log('clicked')
    toast.success("Your pet appointment has been booked! ");
    e.target.reset()
    
}

const Booked = () => {
    return (
      <div className="hero mb-10 ">
  <div className="hero-content flex-col md:gap-40 gap-10 lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="md:text-5xl text-3xl font-bold">Book Now & Keep Your Pets Cozy!</h1>
    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-8 ">
    From <span className="font-semibold text-orange-500">cozy winter coats </span> 
     to <span className="font-semibold text-yellow-500">summer wellness care</span>, 
    we provide <span className="italic text-orange-400"> personalized attention </span> 
    to keep your pets happy, healthy, and comfortable in every season. 
    Schedule your appointment today and give your furry friend the care they truly deserve!
  </p>
    </div>
    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handelbooking}>
            <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
           type="text"
            required 
            // className="input h-12 text-orange-500 font-semibold w-full placeholder-gray-400" 
            className="input w-full border border-orange-400 font-semibold h-12 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-orange-500 px-4"
            placeholder="Your name" />
          <label className="label">Email</label>
          <input 
          type="email"
           rewuired 
           className="input w-full border border-orange-400 font-semibold h-12 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-orange-500 px-4"
            placeholder="you@gmail.com" />
          <button className="text-base font-bold text-white rounded-2xl px-4 py-3 mt-3 bg-linear-to-l from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 hover:scale-105  transition-all">
        Book Now
        </button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>

</div>
    );
};

export default Booked;