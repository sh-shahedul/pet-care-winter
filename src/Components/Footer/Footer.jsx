import React from 'react';
import { Link } from 'react-router';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
       <div >
                <footer className="footer footer-horizontal text-base-content  py-8 md:pl-25 font-WorkSans flex-col flex md:flex-row gap-7 md:gap-20 p-5 bg-black">
          <nav className="flex-1">
            <h6 className="link no-underline">
              <Link
                to={"/"}
                className="text-2xl  font-bold text-white"
              >
                Pet <span className="text-orange-500"> Frosty</span>
              </Link>
            </h6>
            <p className="text-[#c8c4c4f5]">
              Pet Frosty Winter is your trusted companion for keeping pets warm, healthy, and happy during the chilly months. From stylish winter coats and cozy bedding to expert grooming and seasonal care tips, we provide everything your furry friends need to stay safe and comfortable when temperatures drop. <br /> <br />Whether you have a playful pup, a curious cat, or a small animal that needs extra warmth, our services and guides are designed to make winter care easy and enjoyable. At Pet Frosty, we believe every pet deserves comfort, love, and protection—no matter how cold it gets outside. ❤️❄️
            </p>
          </nav>
          <div className="flex-1 flex md:flex-row flex-col gap-5 md:gap-0 text-white">
            <nav className="flex flex-col gap-2 flex-1">
              <h6 className="footer-title">Information</h6>
              <a className="link link-hover hover:text-blue-600 transition-colors duration-200">
                About us
              </a>
              <a className="link link-hover hover:text-blue-600 transition-colors duration-200">
                Contact Us
              </a>
              <a className="link link-hover hover:text-blue-600 transition-colors duration-200">
                Help & Support
              </a>
            </nav>
            <nav className="flex-1 pb-3 md:pb-0">
              <div className=" space-y-3">
                <h2 className="footer-title">Our Policy</h2>
                <ul className="flex flex-col space-y-1 text-sm">
                  <li>
                    <a
                      href="/terms"
                      className="hover:text-blue-600 transition-colors duration-200"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      className="hover:text-blue-600 transition-colors duration-200"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/returns"
                      className="hover:text-blue-600 transition-colors duration-200"
                    >
                      Return & Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <h6 className="footer-title">Social Links</h6>
                <div className="flex gap-3 mt-5">
                 <Link to='https://www.facebook.com/shahedulhoquee'><FaFacebook size={20}/></Link>
                 <Link to='https://www.instagram.com/sh.shahedul/'><FaInstagram size={20} /></Link>
                 <Link to='https://x.com/sh_shahedul'><FaTwitter size={20}/></Link>

                 
                    
                </div>
              </div>
            </nav>
          </div>
        </footer>
    
               <footer className="max-w-full mx-auto footer sm:footer-horizontal footer-center border-t border-gray-500 text-white p-3 md:p-4 font-WorkSans bg-black">
          <aside>
            <p className="md:text-sm text-xs">
              Copyright © {new Date().getFullYear()} - All right reserved by <span className='text-orange-500 font-semibold'> Pet Frosty</span>
             
            </p>
          </aside>
        </footer>
       </div>
    );
};

export default Footer;