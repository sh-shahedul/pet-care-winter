import React from 'react';
import HeroSlider from '../../Components/HeroSlider/HeroSlider';
import { useLoaderData } from 'react-router';
import Cards from '../../Components/Cards/Cards';
import ServiceSection from '../../Components/ServiceSection/Servicesection';
import WinterTips from '../../Components/Tips/WinterTips ';
    
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
                
               <div className=' col-span-9'>
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5  '>
                    {
                    data.map(petcare=><Cards key={petcare.serviceId} petcare={petcare}></Cards>)
                     }
                </div>
               </div>
               <aside className='col-span-3'>
                  <WinterTips></WinterTips>
               </aside>

            </main>
              
        </div>
    );
};

export default Home;