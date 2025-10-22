import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Header/Navbar';
import bgimg from '../assets/hero-bg.jpg'
// import HeroSlider from '../Components/HeroSlider/HeroSlider';

const HomeLayOut = () => {
    return (
        <div className='flex flex-col min-h-screen max-w-screen-2xl mx-auto'>
           <header >
               <div style={{ backgroundImage: `url(${bgimg})` }}>
                <Navbar></Navbar>
               </div>
              
           </header>
           <main className='flex-1'>
              <Outlet></Outlet>
           </main>
           <footer>
             <Footer></Footer>
           </footer>

        </div>
    );
};

export default HomeLayOut;