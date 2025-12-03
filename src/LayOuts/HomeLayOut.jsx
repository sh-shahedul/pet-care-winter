import React, { useEffect } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Header/Navbar';
import bgimg from '../assets/hero-bg.jpg'
import AOS from "aos";
import { Toaster } from "react-hot-toast";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Loading from '../Components/Loading/Loading';




const HomeLayOut = () => {

   const {state} = useNavigation()
    useEffect(() => {
  AOS.init({ duration: 1000 });
   }, []);
    return (
        <div className='flex flex-col min-h-screen max-w-screen-2xl mx-auto'>
           <header >
            {/* className='' style={{ backgroundImage: `url(${bgimg})` }} */}
               <div >
                <Navbar></Navbar>
               </div>
              
           </header>
           <main className='flex-1'>
              {
                state.loading === 'loading' ? <Loading/> :<Outlet></Outlet>
              }
           </main>
           <footer>
             <Footer></Footer>
           </footer>
             <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default HomeLayOut;