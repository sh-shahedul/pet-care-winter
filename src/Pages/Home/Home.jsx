import React from 'react';
import HeroSlider from '../../Components/HeroSlider/HeroSlider';
import { useLoaderData } from 'react-router';
import Cards from '../../Components/Cards/Cards';
import WinterTips from '../../Components/Tips/WinterTips ';
import ExpertVets from '../../Components/ExpertVets/ExpertVets ';
import Adopt from '../../Components/Adopt/Adopt';
import ServiceTitle from '../../Components/ServiceTitle/ServiceTitle';
import DogScrollAnimation from '../../Components/Animation/DogScrollAnimation';
    
const Home = () => {
    const data= useLoaderData()
    console.log(data)
    return (
        <div>
          
            <section>
                 <HeroSlider></HeroSlider>

               
                  <ServiceTitle></ServiceTitle> 
                 <DogScrollAnimation></DogScrollAnimation>  
            </section>
 

<main className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-10 px-3 md:px-6">

  {/* Cards Section */}
  <div className="md:col-span-12 lg:col-span-9 flex items-center justify-center order-1 md:order-1">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
      {data.map((petcare) => (
        <Cards key={petcare.serviceId} petcare={petcare} />
      ))}
    </div>
  </div>

  {/* Sidebar / WinterTips */}
  <aside className="md:col-span-12  lg:col-span-3 order-2 md:order-2">
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