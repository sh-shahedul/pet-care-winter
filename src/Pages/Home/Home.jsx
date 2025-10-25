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
 <main className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-10  px-3 md:px-6">
  
  
  <div className="md:col-span-7 lg:col-span-9 flex items-center justify-center ">
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 w-full">
      {data.map((petcare) => (
        <Cards key={petcare.serviceId} petcare={petcare} />
      ))}
    </div>
  </div>

  
  <aside className="md:col-span-5 lg:col-span-3 order-1 md:order-2">
    <div className="sticky top-0"> 
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