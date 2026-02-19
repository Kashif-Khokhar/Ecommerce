import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { useNavigate, Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await publicRequest.post("/auth/login", {
        username,
        password,
      });
      // In a real app, we'd save the token and user data to context/store
      if (res.data) {
        console.log("Login Success:", res.data);
        navigate("/"); // Redirect to Dashboard/Home
      }
    } catch (err) {
      console.error("Frontend Login Error:", err.response?.data || err.message);
      setError(true);
    }
  };

  return (
    <Motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-screen h-screen bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')] bg-cover flex items-center justify-center"
    >
      <Motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-[25%] p-10 premium-glass rounded-3xl max-md:w-[90%]"
      >
        <h1 className="text-3xl font-black mb-6 tracking-tighter uppercase">Sign In</h1>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input 
            className="p-3 bg-premium-dark border border-white/10 rounded-xl outline-none" 
            placeholder="username or email" 
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            className="p-3 bg-premium-dark border border-white/10 rounded-xl outline-none" 
            placeholder="password" 
            type="password" 
            onChange={(e) => setPassword(e.target.value)}
          />
          <Motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="btn-premium py-4 mt-2 font-bold tracking-widest"
          >
            LOGIN
          </Motion.button>
          {error && <span className="text-red-500 text-xs mt-2 text-center">Invalid credentials!</span>}
          <a className="text-xs decoration-none cursor-pointer hover:accent-text transition-colors mt-2 uppercase text-center w-full block">Forgot Password?</a>
          <Link to="/register" className="text-xs decoration-none cursor-pointer hover:accent-text transition-colors uppercase text-center w-full block">Create a new account</Link>
        </form>
      </Motion.div>
    </Motion.div>
  );
};

export default Login;
