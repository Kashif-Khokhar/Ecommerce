import { Minus, Plus } from "lucide-react";
import { motion as Motion } from "framer-motion";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Cart = () => {
  return (
    <Motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Announcement />
      <div className="p-10 max-md:p-5">
        <Motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-black text-center mb-10 tracking-tighter uppercase"
        >
          Your Bag
        </Motion.h1>
        
        <Motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between mb-10"
        >
          <button className="px-6 py-2 border-2 border-white/20 rounded-full font-bold hover:bg-white/5 transition-colors">CONTINUE SHOPPING</button>
          <div className="flex gap-10 max-md:hidden">
            <span className="underline cursor-pointer">Shopping Bag(2)</span>
            <span className="underline cursor-pointer">Your Wishlist (0)</span>
          </div>
          <button className="btn-premium">CHECKOUT NOW</button>
        </Motion.div>

        <div className="flex max-md:flex-col gap-10">
          <div className="flex-[3] flex flex-col gap-5">
            {/* Product 1 */}
            <Motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-between max-md:flex-col premium-glass p-5 rounded-3xl border border-white/5"
            >
              <div className="flex-[2] flex gap-5">
                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MMSFSH01_5.jpg?crop=1xw:1.00xh;center,top&resize=480:*" alt="" className="w-48 h-48 object-cover rounded-2xl" />
                <div className="flex flex-col justify-around">
                  <span><b>Product:</b> JESSIE THUNDER SHOES</span>
                  <span><b>ID:</b> 93813718293</span>
                  <div className="w-5 h-5 rounded-full bg-black border border-white/20"></div>
                  <span><b>Size:</b> 37.5</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-5">
                <div className="flex items-center gap-4 text-2xl font-bold">
                  <Plus size={20} className="cursor-pointer" />
                  <span className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center bg-white/5">2</span>
                  <Minus size={20} className="cursor-pointer" />
                </div>
                <div className="text-3xl font-light accent-text">$ 30</div>
              </div>
            </Motion.div>
            
            {/* Product 2 */}
            <Motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-between max-md:flex-col premium-glass p-5 rounded-3xl border border-white/5"
            >
              <div className="flex-[2] flex gap-5">
                <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0523518ed247a783fe0573c5c.png" alt="" className="w-48 h-48 object-cover rounded-2xl" />
                <div className="flex flex-col justify-around">
                  <span><b>Product:</b> HAKURA T-SHIRT</span>
                  <span><b>ID:</b> 93813718293</span>
                  <div className="w-5 h-5 rounded-full bg-gray-500 border border-white/20"></div>
                  <span><b>Size:</b> M</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-5">
                <div className="flex items-center gap-4 text-2xl font-bold">
                  <Plus size={20} className="cursor-pointer" />
                  <span className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center bg-white/5">1</span>
                  <Minus size={20} className="cursor-pointer" />
                </div>
                <div className="text-3xl font-light accent-text">$ 20</div>
              </div>
            </Motion.div>
          </div>

          <Motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex-1 premium-glass border border-white/5 p-8 rounded-3xl h-[50vh] flex flex-col gap-10 sticky top-24"
          >
            <h1 className="text-3xl font-light tracking-widest uppercase">Order Summary</h1>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$ 80</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span>$ 5.90</span>
              </div>
              <div className="flex justify-between text-green-500">
                <span>Shipping Discount</span>
                <span>$ -5.90</span>
              </div>
              <div className="flex justify-between font-bold text-2xl mt-5">
                <span>Total</span>
                <span className="accent-text">$ 80</span>
              </div>
            </div>
            <Motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full btn-premium py-4 font-bold tracking-widest uppercase"
            >
              Checkout Now
            </Motion.button>
          </Motion.div>
        </div>
      </div>
      <Footer />
    </Motion.div>
  );
};

export default Cart;
