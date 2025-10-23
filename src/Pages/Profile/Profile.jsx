// import React, { use } from 'react';
// import { AuthContext } from '../../Provider/AuthContex';

// const Profile = () => {
//     const {user}=use(AuthContext)
//     return (
//         <div>
//            <h1>{user.displayName} </h1>
//            <h1>{user.email} </h1>
//            <img src={user.photoURL} alt="" />
//            <button>Updated profile</button>
//         </div>
//     );
// };

// export default Profile;



import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthContex";
// import userlogo from "../assets/user.png"; // default image
// import userlogo from "../../assets/user.png"

const Profile = () => {
     const {user}=use(AuthContext)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-50 to-pink-50 p-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 relative group hover:shadow-3xl transition-shadow duration-500">
        {/* User Image */}
        <div className="flex justify-center mb-6 relative">
          <img
            className="w-24 h-24 rounded-full border-4 border-orange-400 object-cover transform group-hover:scale-105 transition-transform duration-500"
            src={user?.photoURL}
            alt={user?.displayName}
          />
        </div>

        {/* User Info */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-orange-500">
            { user?.displayName}
          </h2>
          <p className="text-gray-500">{user?.email}</p>
        </div>

        {/* Update Profile Button */}
        <div className="mt-6 flex justify-center">
          <button className="btn bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300">
            Update Profile
          </button>
        </div>

        {/* Optional small glow effect */}
        {/* <span className="absolute -top-5 -right-5 w-4 h-4 bg-pink-400 rounded-full animate-ping opacity-70"></span>
        <span className="absolute -bottom-5 -left-5 w-4 h-4 bg-orange-400 rounded-full animate-pulse opacity-70"></span> */}
      </div>
    </div>
  );
};

export default Profile;
