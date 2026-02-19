import { Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const Navbar = () => {
  return (
    <Motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="sticky top-0 z-50 px-6 py-4"
    >
      <div className="flex items-center justify-between premium-glass px-8 py-3 rounded-2xl border border-white/10 shadow-2xl">
      {/* Left */}
      <div className="flex-1 flex items-center gap-4">
        <span className="text-sm cursor-pointer hidden md:block">EN</span>
        <div className="border border-white/10 rounded-full px-3 py-1 flex items-center bg-white/5">
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none outline-none text-sm w-full"
          />
          <Search size={16} className="text-gray-400" />
        </div>
      </div>

      {/* Center */}
      <Link to="/" className="flex-1 text-center font-bold text-2xl tracking-tighter cursor-pointer no-underline text-inherit">
        LAMA.
      </Link>

      {/* Right */}
      <div className="flex-1 flex items-center justify-end gap-6 text-sm uppercase tracking-wider">
        <Link to="/register" className="cursor-pointer font-medium hover:accent-text transition-colors no-underline text-inherit">Register</Link>
        <Link to="/login" className="cursor-pointer font-medium hover:accent-text transition-colors no-underline text-inherit">Sign In</Link>
        <Link to="/cart" className="relative group cursor-pointer p-2 rounded-full hover:bg-white/5 transition-colors no-underline text-inherit">
          <ShoppingCart size={20} />
          <span className="absolute -top-1 -right-1 bg-premium-accent text-premium-dark text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            4
          </span>
        </Link>
      </div>
      </div>
    </Motion.div>
  );
};

export default Navbar;
