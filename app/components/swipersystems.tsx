import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '@/css/styles.css';

// Import required modules
import { Navigation } from 'swiper/modules';

export default function SwiperR2() {
  // Array of image sources
  const images = [
    '/DSC00560.jpg', // Image paths
    '/s2.jpg',
    '/s3.jpg',
    '/s4.jpg',
  ];

  return (
    <div className="h-[60vh] bg-white">
      <div className=" h-[50vh] lg:h-[60vh] flex items-center justify-center mt-[130px] bg-white">
        {/* Swiper Component */}
        <Swiper
          navigation={true} // Enable navigation arrows
          modules={[Navigation]} // Use Navigation module
          className="mySwiper"
          spaceBetween={20} // Space between slides
          slidesPerView={1} // 1 slide per view
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides on small screens
            },
            1200: {
              slidesPerView: 3, // 3 slides on large screens
            },
          }}
        >
          {/* Map through images and create slides */}
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[50vh] lg:h-[60vh] object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
