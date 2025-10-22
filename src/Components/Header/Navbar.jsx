import React from 'react';
import { Link, NavLink } from 'react-router';
import userlogo from '../../assets/user.png'

const Navbar = () => {
 const   links = <>
    
<li className='font-bold text-base '><NavLink to='/'>Home</NavLink></li>
<li className='font-bold text-base '><NavLink to='/service'>Services</NavLink></li>
<li className='font-bold text-base '><NavLink to='/profile'>My Profile</NavLink></li>

    
    
    </>
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
    <img className='w-8 h-8 rounded-full' src={userlogo} alt="" />
    <Link to='/login' className="text-white font-bold px-4 py-2 rounded-2xl bg-gradient-to-l from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition-all duration-300 focus:outline-none">
 Sign In
</Link>
  </div>
</div>
    );
};

export default Navbar;










  <div  className="flex gap-7 items-center mt-4 ml-auto">
                  {/* <div className='md:font-bold md:block hidden text-secondary'>{user && user.displayName}</div> */}
                <img className='w-10 h-10 rounded-full' src=''alt="" />
                {/* {
                    user ? <button onClick={handelSignout}  className='btn btn-primary px-10'>SignOut</button>: <Link to='/auth/login' className='btn btn-primary px-10'>SignIn</Link>
                } */}
            </div>