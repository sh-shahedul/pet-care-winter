import React from 'react';
import HeroSlider from '../../Components/HeroSlider/HeroSlider';
import { Link, useLoaderData } from 'react-router';
import Cards from '../../Components/Cards/Cards';
import WinterTips from '../../Components/Tips/WinterTips ';
import ExpertVets from '../../Components/ExpertVets/ExpertVets ';
import Adopt from '../../Components/Adopt/Adopt';
import ServiceTitle from '../../Components/ServiceTitle/ServiceTitle';
import DogScrollAnimation from '../../Components/Animation/DogScrollAnimation';
    
const Home = () => {
    const data= useLoaderData()
    const  sliceData = data.slice(0, 9);
    console.log(sliceData)
    return (
        <div className='mx-auto md:px-10 px-4'>
          
            <section className=' max-w-screen-2xl mx-auto md:px-10 px-4 '>
                 <HeroSlider></HeroSlider>

               
                  <ServiceTitle></ServiceTitle> 
                 <DogScrollAnimation></DogScrollAnimation>  
            </section>
 

   <main className="grid grid-cols-1 md:grid-cols-12 gap-5 px-4 sm:px-3 md:px-6 lg:px-8  max-w-screen-2xl mx-auto  ">
  
  <div className="md:col-span-12 lg:col-span-9 flex items-center justify-center order-1 md:order-1">
    <div className="w-full">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 w-full px-1">
        {sliceData.map((petcare) => (
          <Cards key={petcare.serviceId} petcare={petcare} />
        ))}
      </div>

      <Link to='service' className="flex justify-center mt-5 text-white font-bold px-4 py-2 rounded-2xl bg-linear-to-l from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
        Explore more →
      </Link>

    </div>
  </div>

  <aside className="md:col-span-12 lg:col-span-3 order-2 md:order-2 ">
    <div className="lg:sticky lg:top-20">
      <WinterTips />
    </div>
  </aside>

</main>


        <ExpertVets></ExpertVets>
         <Adopt></Adopt>
           
        </div>
    );
};

export default Home;