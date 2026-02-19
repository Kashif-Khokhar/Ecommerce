import { Search, ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const ProductItem = ({ item }) => {
  return (
    <Motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="flex-1 m-2 min-w-[280px] h-[350px] flex items-center justify-center bg-premium-muted/30 relative group rounded-2xl overflow-hidden cursor-pointer border border-white/5"
    >
      <div className="w-48 h-48 rounded-full bg-white opacity-5 absolute z-[1]"></div>
      <img src={item.img} alt="" className="h-[75%] z-[2] object-contain group-hover:scale-110 transition-transform duration-500" />
      <Motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="w-full h-full absolute top-0 left-0 bg-black/40 z-[3] flex items-center justify-center gap-3 transition-opacity duration-300"
      >
        <Link to="/cart" className="w-10 h-10 rounded-full bg-white text-premium-dark flex items-center justify-center hover:bg-premium-accent hover:scale-110 transition-all text-inherit">
          <ShoppingCart size={20} />
        </Link>
        <Link to={`/product/${item.id}`} className="w-10 h-10 rounded-full bg-white text-premium-dark flex items-center justify-center hover:bg-premium-accent hover:scale-110 transition-all text-inherit">
          <Search size={20} />
        </Link>
        <div className="w-10 h-10 rounded-full bg-white text-premium-dark flex items-center justify-center hover:bg-premium-accent hover:scale-110 transition-all text-inherit">
          <Heart size={20} />
        </div>
      </Motion.div>
    </Motion.div>
  );
};

export default ProductItem;
