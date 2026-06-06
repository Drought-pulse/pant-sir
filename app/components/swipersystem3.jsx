

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';  
import "@/css/styles.css"

// Import required modules
import { Navigation } from 'swiper/modules';

export default function SwiperR2() {
  // Array of image sources
  const images = [
    '/sn1.png',  // Image path without '/images/'
    '/overview-scada1.jpg',
    '/sn2.jpg',
    '/control room.png',
  ];

  return (
    <div className="h-screen bg-white p-6">
      <div className="pt-10 h-[50vh] lg:h-[70vh] flex items-center justify-center mt-[130px] bg-white"> {/* Set height for Swiper panel */}
        <Swiper
          navigation={true}  // Enable navigation arrows
          modules={[Navigation]}  // Use Navigation module for arrows
          className="mySwiper"
          spaceBetween={20}  // Space between slides (smaller gap)
          slidesPerView={1}  // 1 slide per view on smaller screens
          breakpoints={{
            640: {
              slidesPerView: 2,  // 2 slides per view on small screens
            },
            1200: {
              slidesPerView: 3,  // 3 slides per view on larger screens
            },
          }}
        >
          {/* Loop through the images array and display each one */}
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}  // Image source
                alt={`Slide ${index + 1}`}  // Alt text for accessibility
                className="w-full h-[50vh] lg:h-[70vh] object-cover rounded-lg"  // Set smaller image height
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
