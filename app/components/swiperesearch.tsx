// import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import '@/css/styles.css';

// // import required modules
// import { Pagination } from 'swiper/modules';

// export default function App() {
//   // Array of image sources
//   const images = [
//     'research.gif',  // Replace with your image paths
//     '/r2.jpg',
//     '/r3.jpg',
//     '/r4.png',
   
//   ];

//   return (
//     <div className='h-screen bg-white p-6'>
//       <div className='pt-10 h-full bg-white'>
//         <Swiper
//           slidesPerView={3}  // Display 3 slides at once on large screens
//           spaceBetween={30}  // Space between slides
//           pagination={{
//             clickable: true,  // Allow pagination buttons to be clicked
//           }}
//           modules={[Pagination]}  // Use pagination module
//           className="mySwiper"
//         >
//           {/* Loop through the images array and display each one */}
//           {images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={image}  // Image source
//                 alt={`Slide ${index + 1}`}  // Alt text for accessibility
//                 className="w-full h-auto object-cover rounded-lg"  // Style the image
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }
   

// import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import '@/css/styles.css';

// // import required modules
// import { Pagination } from 'swiper/modules';

// export default function App() {
//   // Array of image sources
//   const images = [
//     'research.gif',  // Replace with your image paths
//     '/r2.jpg',
//     '/r3.jpg',
//     '/r4.png',
//   ];

//   return (
//     <div className='h-screen bg-white p-6'>
//       <div className='pt-10 h-full bg-white'>
//         <Swiper
//           slidesPerView={3}  // Display 3 slides at once on large screens
//           spaceBetween={20}  // Space between slides
//           pagination={{
//             clickable: true,  // Allow pagination buttons to be clicked
//           }}
//           modules={[Pagination]}  // Use pagination module
//           className="mySwiper"
//         >
//           {/* Loop through the images array and display each one */}
//           {images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={image}  // Image source
//                 alt={`Slide ${index + 1}`}  // Alt text for accessibility
//                 className="w-full h-[150px] object-cover rounded-lg"  // Adjust image height here
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }
  

// import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// // Import required modules
// import { Navigation } from 'swiper/modules';

// export default function SwiperR2() {
//   // Array of image sources
//   const images = [
//     '/research.gif',  // Image path without '/images/'
//     '/r2.jpg',
//     '/r3.jpg',
//     '/r4.png',
//     '/r5.jpg',
//     '/r6.jpg',
//     '/r7.jpg',
//     '/r8.jpg',
//     '/r9.jpg',
//   ];

//   return (
//     <div className="h-screen bg-white p-6">
//       <div className="pt-10 h-full bg-white">
//         <Swiper
//           navigation={true}  // Enable navigation arrows
//           modules={[Navigation]}  // Use Navigation module for arrows
//           className="mySwiper"
//           spaceBetween={30}  // Space between slides
//           slidesPerView={1}  // 1 slide per view on smaller screens
//           breakpoints={{
//             640: {
//               slidesPerView: 2,  // 2 slides per view on small screens
//             },
//             1024: {
//               slidesPerView: 3,  // 3 slides per view on larger screens
//             },
//           }}
//         >
//           {/* Loop through the images array and display each one */}
//           {images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={image}  // Image source
//                 alt={`Slide ${index + 1}`}  // Alt text for accessibility
//                 className="w-full h-auto object-cover rounded-lg"  // Style the image
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }
  


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
    '/research.gif',  // Image path without '/images/'
    '/r2.jpg',
    '/r3.jpg',
    '/r4.png',
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
