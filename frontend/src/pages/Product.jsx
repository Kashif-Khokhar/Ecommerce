import { Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Product = () => {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Announcement />
      <div className="p-12 flex max-md:flex-col gap-10">
        <Motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" className="w-full h-[90vh] object-cover rounded-3xl" />
        </Motion.div>
        <Motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex flex-col gap-6"
        >
          <h1 className="text-5xl font-black tracking-tighter">Denim Jumpsuit</h1>
          <p className="text-xl font-light text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span className="text-5xl font-light accent-text">$ 20</span>

          <div className="w-[50%] flex justify-between max-md:w-full">
            <div className="flex items-center gap-2">
              <span className="text-xl font-medium">Color:</span>
              <div className="w-5 h-5 rounded-full bg-black cursor-pointer border border-white/20"></div>
              <div className="w-5 h-5 rounded-full bg-blue-900 cursor-pointer border border-white/20"></div>
              <div className="w-5 h-5 rounded-full bg-gray-500 cursor-pointer border border-white/20"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-medium">Size:</span>
              <select className="bg-premium-muted border border-white/10 p-2 rounded-lg outline-none">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>

          <div className="w-[50%] flex items-center justify-between max-md:w-full">
            <div className="flex items-center gap-2 font-bold">
              <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors">
                <Minus size={16} />
              </div>
              <span className="w-8 h-8 rounded-lg bg-premium-muted flex items-center justify-center border border-white/5 text-sm">1</span>
              <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors">
                <Plus size={16} />
              </div>
            </div>
            <Link to="/cart">
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-premium-accent text-premium-accent font-black rounded-xl hover:bg-premium-accent hover:text-premium-dark transition-all"
              >
                ADD TO CART
              </Motion.button>
            </Link>
          </div>
        </Motion.div>
      </div>
      <Newsletter />
      <Footer />
    </Motion.div>
  );
};

export default Product;
