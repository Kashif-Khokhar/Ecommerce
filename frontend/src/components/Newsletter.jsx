import { Send } from "lucide-react";
import { motion as Motion } from "framer-motion";

const Newsletter = () => {
  return (
    <div className="h-[60vh] bg-premium-muted/20 flex flex-col items-center justify-center gap-5">
      <Motion.h1 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-7xl font-black tracking-tighter max-md:text-5xl"
      >
        Newsletter
      </Motion.h1>
      <Motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl font-light tracking-wide text-gray-400 max-md:text-center px-4"
      >
        Get timely updates from your favorite products.
      </Motion.div>
      <Motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-1/2 h-12 bg-premium-dark border border-white/10 flex justify-between items-center rounded-xl overflow-hidden max-md:w-4/5"
      >
        <input 
          placeholder="Your email..." 
          className="flex-[8] border-none outline-none bg-transparent px-5 text-sm"
        />
        <Motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex-1 h-full bg-premium-accent text-premium-dark flex items-center justify-center border-none"
        >
          <Send size={20} />
        </Motion.button>
      </Motion.div>
    </div>
  );
};

export default Newsletter;
