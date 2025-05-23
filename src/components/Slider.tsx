import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface SliderProps {
  slides: Slide[];
  effect?: 'slide' | 'fade';
  autoplay?: boolean;
}

const Slider = ({ slides, effect = 'slide', autoplay = true }: SliderProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      effect={effect}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
      className="h-[600px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-xl max-w-2xl mx-auto">{slide.description}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;