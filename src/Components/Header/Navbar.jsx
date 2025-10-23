import React, { use } from 'react';
import { Link, NavLink } from 'react-router';

import { AuthContext } from '../../Provider/AuthContex';
import toast from 'react-hot-toast';


const Navbar = () => {
  const {user,signOutUser}=use(AuthContext)
 
 const   links = <>
    
<li className='font-bold text-base '><NavLink to='/'>Home</NavLink></li>
<li className='font-bold text-base '><NavLink to='/service'>Services</NavLink></li>
<li className='font-bold text-base '><NavLink to='/profile'>My Profile</NavLink></li>   
    </>

  
    const handelLogOut =()=>{
         signOutUser()
         .then((result)=>{
          console.log(result.user)
          toast.success('logout sucessful')
        
          
         })
         .catch((error)=>{
          console.log(error)
          
         })
    }

    return (
        <div className="navbar  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
   <a className="btn btn-ghost text-3xl text-orange-500">
  Pet <span className="text-base inline-block align-top mt-3 text-black font-semibold">Frosty</span>
</a>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
         {links}
    </ul>
  </div>
  <div className="navbar-end gap-3">
      
    {/* <img className='w-10 h-10 rounded-full' title={user ? user.displayName:''} src={user ? user.photoURL: userlogo} alt="" /> */}
  <div className="relative group inline-block">
  {
    user && <img
    className="w-10 h-10 rounded-full border-2 border-orange-400 cursor-pointer"
    src={user.photoURL }
    alt="User"
  />
  }
  <div className="absolute -left-35 top-0  bg-linear-to-r from-orange-400 to-pink-500 text-white text-base px-2 py-2 rounded-md opacity-0 group-hover:opacity-100  duration-300 shadow-md">
    { user?.displayName}
  </div>
</div>
    {
      user? <button onClick={handelLogOut} className="text-white font-bold px-4 py-2 rounded-2xl bg-linear-to-l from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition-all duration-300 focus:outline-none">
     Sign Out
     </button>:<Link to='/login' className="text-white font-bold px-4 py-2 rounded-2xl bg-linear-to-l from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition-all duration-300 focus:outline-none">
     Sign In
     </Link>
    }
  </div>
</div>
    );
};

    export default Navbar;     