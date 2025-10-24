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