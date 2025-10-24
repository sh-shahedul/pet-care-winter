import React from 'react';
import NotFoundImage from '../../assets/App-Error.png'
import { Link } from 'react-router';


const NotFound = () => {
    return (
       
          
           
        <div className='md:min-h-screen bg-linear-to-br from-orange-100 via-orange-200 to-orange-50  max-w-screen-2xl'>
            <div className='flex flex-col justify-center items-center md:p-30 p-5'>
                <img className='md:w-[300px] w-[150px]' src={NotFoundImage} alt="" />
            <h1 className='md:text-4xl text-2xl font-bold mt-5'>Oops, Service not found!</h1>
            <p className='md:text-xl text-base text-gray-500 font-medium mt-5'>The Service you are requesting is not found .  please try another Service</p>
           <Link className="btn px-8 bg-linear-to-l from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 hover:scale-105 transition-all text-base text-white mt-5" to='/'>Go Back</Link>
            </div>
        </div>
      
       
    );
};

export default NotFound;
