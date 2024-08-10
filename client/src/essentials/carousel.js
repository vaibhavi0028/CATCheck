import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import img1 from '../images/img1.png'; // Import the image
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const images = [
  img1, 
  img1,
  img1,
  img1,
];

const Carousel = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  return (
    <div className="carousel-wrapper">
      <div className="header-section">
        <h1 className="main-heading">Revolutionize Equipment Inspections</h1>
        <p className="subheading">Hands-Free Recording for Service Technicians</p>
      </div>
      
      <div className="carousel-container">
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          spaceBetween={20}
          centeredSlides={true}
          slidesPerView={3}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          navigation
          loop={true}
          onSlideChange={(swiper) => setCenterIndex(swiper.realIndex)}
          className="mySwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="carousel-slide">
              <img 
                src={img} 
                alt={`Slide ${index + 1}`} 
                className={`concave-effect ${
                  index === centerIndex 
                    ? 'center-img' 
                    : index === (centerIndex - 1 + images.length) % images.length 
                      ? 'left-img' 
                      : 'right-img'
                }`} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;