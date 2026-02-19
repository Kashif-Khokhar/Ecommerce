import { motion as Motion } from "framer-motion";

const Announcement = () => {
  return (
    <Motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-8 bg-premium-accent text-premium-dark flex items-center justify-center text-sm font-medium"
    >
      Super Deal! Free Shipping on Orders Over $50
    </Motion.div>
  );
};

export default Announcement;
