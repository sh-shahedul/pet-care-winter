import React from 'react';
import HeroSlider from '../../Components/HeroSlider/HeroSlider';
import { useLoaderData } from 'react-router';
import Cards from '../../Components/Cards/Cards';
import ServiceSection from '../../Components/ServiceSection/Servicesection';
import WinterTips from '../../Components/Tips/WinterTips ';
import ExpertVets from '../../Components/ExpertVets/ExpertVets ';
    
const Home = () => {
    const data= useLoaderData()
    console.log(data)
    return (
        <div>
          
            <section>
                <HeroSlider></HeroSlider>
            </section>
            <ServiceSection></ServiceSection>
            <main  className=' grid md:grid-cols-12 gap-5 mt-10'>
                
               <div className=' col-span-9 flex  items-center justify-center' >
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5  '>
                    {
                    data.map(petcare=><Cards key={petcare.serviceId} petcare={petcare}></Cards>)
                     }
                </div>
               </div>
               <aside className='md:col-span-3 col-span-9'>
                  <WinterTips></WinterTips>
               </aside>

            </main>
            <ExpertVets></ExpertVets>
              
        </div>
    );
};

export default Home;