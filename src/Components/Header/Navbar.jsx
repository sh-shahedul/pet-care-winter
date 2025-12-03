// import React, {  useContext } from 'react';
// import { Link, NavLink } from 'react-router';
// import logo from '../../assets/user.png'
// import { AuthContext } from '../../Provider/AuthContex';
// import toast from 'react-hot-toast';


// const Navbar = () => {
//   const {user,signOutUser}=useContext(AuthContext)
 
//  const   links = <>
    
// <li className='font-bold text-base '><NavLink to='/'>Home</NavLink></li>
// <li className='font-bold text-base '><NavLink to='/service'>Services</NavLink></li>
// <li className='font-bold text-base '><NavLink to='/about'>About US</NavLink></li>   
// <li className='font-bold text-base '><NavLink to='/contact'>Contact US</NavLink></li>   
//     </>

  
//     const handelLogOut =()=>{
//          signOutUser()
//          .then(()=>{
//           toast.success(' 👋 logout sucessful')         
//          })
//          .catch((error)=>{
//           console.log(error)
//           })  
//       }

//     return (
//         <div className=" navbar sticky top-0 z-50 bg-white rounded-full ">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-orange-500">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//       </div>
//       <ul
//         tabIndex="-1"
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//        {links}
//       </ul>
//     </div>
//    <Link to='/' className=" md:px-4 font-bold md:text-3xl text-2xl text-orange-500">
//   Pet <span className="text-base inline-block align-top md:mt-3 mt-2 text-black font-bold">Frosty</span>
// </Link>

//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//          {links}
//     </ul>
//   </div>
//   <div className="navbar-end gap-3">
      
//    <Link to='/profile' className="">
//   {
//     user && <img
//     className="w-10 h-10 rounded-full border-2 border-orange-400 cursor-pointer"
//     src={user.photoURL|| logo}
//     alt="User"
//     referrerPolicy='no-referrer'
//   />
//   }
//   {/* <div className="absolute -left-35 top-0  bg-linear-to-r from-orange-400 to-pink-500 text-white text-base px-2 py-2 rounded-md opacity-0 group-hover:opacity-100  duration-300 shadow-md">
//     { user?.displayName}
//   </div> */}
// </Link>
//     {
//       user? <button onClick={handelLogOut} className="text-white font-bold md:px-8 px-4 py-2 rounded-2xl bg-linear-to-l from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition-all duration-300 focus:outline-none">
//      Sign Out
//      </button>:<Link to='/login' className="text-white font-bold md:px-8 px-4 py-2 rounded-2xl bg-linear-to-l from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition-all duration-300 focus:outline-none">
//      Sign In
//      </Link>
//     }
//   </div>
// </div>
//     );
// };

//     export default Navbar;     
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/user.png';
import { AuthContext } from '../../Provider/AuthContex';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const links = <>
    <li className='font-bold text-base'><NavLink to='/'>Home</NavLink></li>
    <li className='font-bold text-base'><NavLink to='/service'>Services</NavLink></li>
    <li className='font-bold text-base'><NavLink to='/about'>About US</NavLink></li>
    <li className='font-bold text-base'><NavLink to='/contact'>Contact US</NavLink></li>
    <li className='font-bold text-base'><NavLink to='/blogs'>Blogs</NavLink></li>
  </>;

  const handelLogOut = () => {
    signOutUser()
      .then(() => {
        toast.success('👋 Logout successful');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50  ">
        <div className="navbar px-4 lg:px-8 max-w-screen-2xl mx-auto bg-white/90 rounded-full">
          {/* Navbar Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                {links}
              </ul>
            </div>
            <Link to='/' className="md:px-4 font-bold md:text-3xl text-2xl text-orange-500">
              Pet <span className="text-base inline-block align-top md:mt-3 mt-2 text-black font-bold">Frosty</span>
            </Link>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links}
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end gap-3">
            <Link to='/profile'>
              {user && (
                <img
                  className="w-10 h-10 rounded-full border-2 border-orange-400 cursor-pointer"
                  src={user.photoURL || logo}
                  alt="User"
                  referrerPolicy='no-referrer'
                />
              )}
            </Link>

            {user ? (
              <button
                onClick={handelLogOut}
                className="text-white font-bold md:px-8 px-4 py-2 mr-2 rounded-2xl bg-linear-to-l from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition-all duration-300 focus:outline-none "
              >
                Sign Out
              </button>
            ) : (
              <Link
                to='/login'
                className="text-white font-bold md:px-8 px-4 py-2 mr-2 rounded-2xl bg-linear-to-l from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition-all duration-300 focus:outline-none"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Padding so content doesn't go under fixed navbar */}
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;
