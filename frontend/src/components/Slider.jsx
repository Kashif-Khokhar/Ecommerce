import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { sliderItems } from "../data";
import { Link } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev < sliderItems.length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex relative overflow-hidden bg-premium-dark max-md:hidden">
      <div 
        className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center absolute top-0 bottom-0 left-6 margin-auto cursor-pointer opacity-50 z-[2] hover:opacity-100 transition-opacity" 
        onClick={() => handleClick("left")}
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        <ChevronLeft size={32} />
      </div>

      <div className="h-full flex transition-all duration-1000 ease-in-out">
        <AnimatePresence mode="wait">
          {sliderItems.map((item, index) => (
            index === slideIndex && (
              <Motion.div 
                key={item.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                className={`w-[100vw] h-screen flex items-center ${item.bg} absolute top-0 left-0`}
              >
                <div className="h-full flex-1 flex justify-center items-center">
                  <Motion.img 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    src={item.img} 
                    alt="" 
                    className="h-[80%] object-cover rounded-3xl shadow-2xl" 
                  />
                </div>
                <div className="flex-1 p-12 flex flex-col justify-center items-start gap-8">
                  <Motion.h1 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-7xl font-black tracking-tighter leading-tight"
                  >
                    {item.title}
                  </Motion.h1>
                  <Motion.p 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl font-medium tracking-wide text-gray-400 max-w-lg"
                  >
                    {item.desc}
                  </Motion.p>
                  <Link to="/products/all">
                    <Motion.button 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-10 py-4 bg-premium-accent text-premium-dark font-bold rounded-full shadow-lg shadow-premium-accent/20"
                    >
                      SHOP NOW
                    </Motion.button>
                  </Link>
                </div>
              </Motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      <div 
        className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center absolute top-0 bottom-0 right-6 margin-auto cursor-pointer opacity-50 z-[2] hover:opacity-100 transition-opacity" 
        onClick={() => handleClick("right")}
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        <ChevronRight size={32} />
      </div>
    </div>
  );
};

export default Slider;
