import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="p-12 md:p-20 grid grid-cols-1 md:grid-cols-3 gap-12 bg-premium-dark border-t border-white/5">
      {/* Left */}
      <Motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6"
      >
        <h1 className="text-3xl font-black tracking-tighter">LAMA.</h1>
        <p className="text-gray-400 leading-relaxed font-light">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="flex gap-4">
          <Motion.div whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer shadow-lg shadow-blue-600/20">
            <Facebook size={20} />
          </Motion.div>
          <Motion.div whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer shadow-lg shadow-pink-600/20">
            <Instagram size={20} />
          </Motion.div>
          <Motion.div whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center cursor-pointer shadow-lg shadow-sky-500/20">
            <Twitter size={20} />
          </Motion.div>
        </div>
      </Motion.div>

      {/* Center */}
      <Motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col gap-6"
      >
        <h3 className="text-xl font-bold">Useful Links</h3>
        <ul className="grid grid-cols-2 gap-y-3 m-0 p-0 list-none text-gray-400 font-medium">
          <li className="hover:accent-text cursor-pointer transition-colors"><Link to="/" className="no-underline text-inherit">Home</Link></li>
          <li className="hover:accent-text cursor-pointer transition-colors"><Link to="/cart" className="no-underline text-inherit">Cart</Link></li>
          <li className="hover:accent-text cursor-pointer transition-colors"><Link to="/products/men" className="no-underline text-inherit">Man Fashion</Link></li>
          <li className="hover:accent-text cursor-pointer transition-colors"><Link to="/products/women" className="no-underline text-inherit">Woman Fashion</Link></li>
          <li className="hover:accent-text cursor-pointer transition-colors"><Link to="/products/accessories" className="no-underline text-inherit">Accessories</Link></li>
          <li className="hover:accent-text cursor-pointer transition-colors">My Account</li>
          <li className="hover:accent-text cursor-pointer transition-colors">Order Tracking</li>
          <li className="hover:accent-text cursor-pointer transition-colors">Wishlist</li>
          <li className="hover:accent-text cursor-pointer transition-colors">Terms</li>
        </ul>
      </Motion.div>

      {/* Right */}
      <Motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col gap-6"
      >
        <h3 className="text-xl font-bold">Contact</h3>
        <div className="flex flex-col gap-4 text-gray-400">
          <div className="flex items-center gap-3">
            <MapPin size={20} className="text-premium-accent" />
            <span>622 Dixie Path , South Tobinchester 98336</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={20} className="text-premium-accent" />
            <span>+1 234 56 78</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={20} className="text-premium-accent" />
            <span>contact@lama.dev</span>
          </div>
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment" className="w-[50%] mt-2 opacity-80" />
      </Motion.div>
    </footer>
  );
};

export default Footer;
