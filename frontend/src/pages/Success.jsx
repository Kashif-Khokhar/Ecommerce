import { CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Success = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex flex-col items-center justify-center gap-6 bg-premium-dark">
        <CheckCircle size={100} className="text-premium-accent" />
        <h1 className="text-5xl font-black tracking-tighter uppercase">Success!</h1>
        <p className="text-xl text-gray-400 font-light">Your order is being prepared. Thanks for choosing LAMA.</p>
        <button className="btn-premium mt-4">Go to Homepage</button>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
