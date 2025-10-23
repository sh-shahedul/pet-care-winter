
// import React from "react";
// import { FaPaw } from "react-icons/fa";
// const Loading = () => {
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-50 to-pink-50">
//       <div className="relative flex items-center justify-center">
//         {/* Glowing gradient circle */}
//         <div className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 opacity-30 animate-ping"></div>

//         {/* Spinner Icon */}
//         <FaPaw className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 animate-spin" />
//       </div>
//     </div>
//     );
// };

// export default Loading;

import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-50">
      <FaSpinner className="text-4xl text-orange-500 animate-spin" />
    </div>
  );
};

export default Loading;