import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  EffectCube,
  EffectCreative,
} from "swiper/modules";
import { motion, useAnimation } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/effect-creative";

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface SliderProps {
  slides: Slide[];
  effect?: "slide" | "fade" | "cube" | "creative";
  autoplay?: boolean;
}

const Slider = ({
  slides,
  effect = "creative",
  autoplay = true,
}: SliderProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Autoplay,
        EffectFade,
        EffectCube,
        EffectCreative,
      ]}
      effect={effect}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      className="h-[80vh]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="container mx-auto px-4"
              >
                <div className="max-w-3xl pl-6 md:pl-20">
                  {" "}
                  {/* 👈 Added left padding here */}
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-white/90">
                    {slide.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
