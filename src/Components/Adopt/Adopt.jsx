import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPaw } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Adopt = () => {
  const pets = [
    {
      id: 1,
      name: "Bella",
      breed: "Golden Retriever",
      age: "2 years",
      image:"https://i.pinimg.com/736x/0b/dd/60/0bdd6033e72f60fb0d86c6644b2adf1b.jpg",
    },
    {
      id: 2,
      name: "Milo",
      breed: "Tabby Cat",
      age: "1 year",
      image:
        "https://i.pinimg.com/736x/66/87/ba/6687baace1453ee440ddbeec86855073.jpg",
    },
    {
      id: 3,
      name: "Coco",
      breed: "Shih Tzu",
      age: "6 Month",
      image:"https://i.pinimg.com/1200x/65/3a/6a/653a6a95498973129f1eba54327dbc6e.jpg ",
    },
    {
      id: 4,
      name: "Rocky",
      breed: "Bulldog",
      age: "1 years",
      image:
        "https://i.pinimg.com/736x/44/dc/c4/44dcc4868748e7af8efe454e639c9547.jpg",
    },
    {
      id: 5,
      name: "Luna",
      breed: "Siamese Cat",
      age: "1.5 years",
      image:
        "https://i.pinimg.com/736x/9a/11/46/9a11460d56b033b646b0123d43d01615.jpg",
    },
  ];

  return (
    <section
      className="bg-orange-50  rounded-t-full md:py-16 py-5 px-6 md:px-12 lg:px-20"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto text-center mb-20">
        <div className="flex justify-center items-center gap-2 mt-30 mb-10">
          <FaPaw className="text-orange-500 text-3xl animate-bounce" />
          <h2 className="md:text-4xl text-3xl font-bold text-orange-500">Adopt a Friend</h2>
           <FaPaw className="text-orange-500 text-3xl animate-bounce" />
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Every pet deserves a warm home and a loving heart. Meet our adorable
          pets waiting to be adopted — give them the cozy winter they deserve. ❄️
        </p>
      </div>

      <div className="">
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500, 
          disableOnInteraction: false, 
        }}
        loop={true} // 
        speed={1000} // 
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto "
      >
        {pets.map((pet) => (
          <SwiperSlide key={pet.id}>
            <div className="card  bg-white shadow-xl rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500">
              <figure className="overflow-hidden">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="text-xl font-semibold text-orange-500">
                  {pet.name}
                </h3>
                <p className="text-gray-600">{pet.breed}</p>
                <p className="text-sm text-gray-400">{pet.age}</p>
                <div className="card-actions justify-center mt-4">
                  <button className="btn bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-full">
                    Adopt Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
};

export default Adopt;
