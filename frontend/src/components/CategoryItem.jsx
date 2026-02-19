import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const CategoryItem = ({ item }) => {
  return (
    <Motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="flex-1 m-1 h-[70vh] relative group overflow-hidden cursor-pointer rounded-xl"
    >
      <img src={item.img} alt="" className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Motion.h1 
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          className="text-white text-3xl font-black mb-5 tracking-tighter"
        >
          {item.title}
        </Motion.h1>
        <Link to={`/products/${item.cat}`}>
          <button className="btn-premium">SHOP NOW</button>
        </Link>
      </div>
    </Motion.div>
  );
};

export default CategoryItem;
