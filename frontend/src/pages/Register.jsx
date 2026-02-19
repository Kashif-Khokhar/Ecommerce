import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { useNavigate, Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await publicRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      if (res.data) {
        alert("Account created successfully! Please login to continue.");
        navigate("/login");
      }
    } catch {
      setError(true);
    }
  };

  return (
    <Motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-screen h-screen bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')] bg-cover flex items-center justify-center"
    >
      <Motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-[40%] p-10 premium-glass rounded-3xl max-md:w-[90%]"
      >
        <h1 className="text-3xl font-black mb-6 tracking-tighter uppercase">Create an Account</h1>
        <form className="flex flex-wrap gap-4" onSubmit={handleSubmit}>
          <input 
            className="flex-1 min-w-[40%] p-3 bg-premium-dark border border-white/10 rounded-xl outline-none" 
            placeholder="username" 
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            className="flex-1 min-w-[40%] p-3 bg-premium-dark border border-white/10 rounded-xl outline-none" 
            placeholder="email" 
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            className="flex-1 min-w-[40%] p-3 bg-premium-dark border border-white/10 rounded-xl outline-none" 
            placeholder="password" 
            type="password" 
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="text-xs text-gray-400 mt-2">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <Motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="w-full btn-premium py-4 mt-4 font-bold tracking-widest"
          >
            CREATE
          </Motion.button>
          {error && <span className="text-red-500 text-xs mt-2 text-center w-full">Something went wrong!</span>}
          <Link to="/login" className="text-xs text-center w-full hover:accent-text transition-colors mt-4 uppercase block">Already have an account? Login</Link>
        </form>
      </Motion.div>
    </Motion.div>
  );
};

export default Register;
