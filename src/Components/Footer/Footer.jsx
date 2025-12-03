import React from 'react';
import { Link } from 'react-router';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import toast from 'react-hot-toast';

const Footer = () => {
  const handelSUbscribe=()=>{
    toast.success(' Thanks for subscribe Our Channel')

  }
  return (
    <div className="bg-black text-white">
      <footer className="max-w-screen-2xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        {/* Left Side - Logo + Description */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">
            Pet <span className="text-orange-500">Frosty</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Pet Frosty Winter is your trusted companion for keeping pets warm, healthy, and happy during the chilly months. From stylish winter coats and cozy bedding to expert grooming and seasonal care tips, we provide everything your furry friends need to stay safe and comfortable when temperatures drop.
            <br /><br />
            Whether you have a playful pup, a curious cat, or a small animal that needs extra warmth, our services and guides are designed to make winter care easy and enjoyable. At Pet Frosty, we believe every pet deserves comfort, love, and protection—no matter how cold it gets outside. ❤️❄️
          </p>
        </div>

        {/* Right Side - Links + Social */}
        <div className="flex-1 flex flex-col md:flex-row justify-between gap-10 md:gap-20">
          
          {/* Information Links */}
          <div className="flex flex-col md:ml-30">
            <h6 className="font-semibold text-lg">Information</h6>
            <Link to="/about" className="text-gray-400 hover:text-orange-500 transition">About Us</Link>
            <Link to="/contact" className="text-gray-400 hover:text-orange-500 transition">Contact Us</Link>
              <h6 className="font-semibold text-lg mt-5">Our Policy</h6>
              <ul className=" text-gray-400 text-sm space-y-1">
                <li><Link to="/terms" className="hover:text-orange-500 transition">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="hover:text-orange-500 transition">Privacy Policy</Link></li>
              </ul>


          </div>

          {/* Policy Links + Social */}
          <div className="flex flex-col gap-6">
          

            <div>
              <h6 className="font-semibold text-lg">Social Links</h6>
              <div className="flex gap-4 mt-3">
                <a href="https://www.facebook.com/shahedulhoquee" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={20} className="hover:text-orange-500 transition"/>
                </a>
                <a href="https://www.instagram.com/sh.shahedul/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={20} className="hover:text-orange-500 transition"/>
                </a>
                <a href="https://x.com/sh_shahedul" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={20} className="hover:text-orange-500 transition"/>
                </a>
              </div>
              <div className="join mt-10">
                 <input className="input join-item text-black font-bold " placeholder="Email" type='email' required />
                 <button onClick={handelSUbscribe} className="btn join-item rounded-r-full bg-black border-3 text-white border-white">Subscribe</button>
             </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <footer className="border-t border-gray-700 mt-6 py-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} All rights reserved by <span className="text-orange-500 font-semibold">Pet Frosty</span>
      </footer>
    </div>
  );
};

export default Footer;
