import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LayoutDashboard, ShoppingBag, Users, Package } from "lucide-react";

const Admin = () => {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen bg-premium-dark">
        {/* Sidebar */}
        <div className="w-64 premium-glass border-r border-white/5 p-6 flex flex-col gap-8 max-md:hidden">
          <div className="flex items-center gap-3 text-premium-accent font-bold text-xl uppercase tracking-tighter">
            <LayoutDashboard /> Admin Panel
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
              <ShoppingBag size={20} /> Orders
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 cursor-pointer transition-colors">
              <Package size={20} /> Products
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 cursor-pointer transition-colors">
              <Users size={20} /> Customers
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10">
          <h1 className="text-4xl font-black mb-10 tracking-tighter uppercase">Dashboard Overview</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="p-8 premium-glass rounded-3xl border border-white/5 flex flex-col gap-2">
              <span className="text-gray-400 font-medium">Total Sales</span>
              <span className="text-4xl font-black accent-text">$ 15,240</span>
            </div>
            <div className="p-8 premium-glass rounded-3xl border border-white/5 flex flex-col gap-2">
              <span className="text-gray-400 font-medium">Active Orders</span>
              <span className="text-4xl font-black accent-text">42</span>
            </div>
            <div className="p-8 premium-glass rounded-3xl border border-white/5 flex flex-col gap-2">
              <span className="text-gray-400 font-medium">New Customers</span>
              <span className="text-4xl font-black accent-text">+12</span>
            </div>
          </div>

          <div className="premium-glass p-8 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6">Recent Orders</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 border-b border-white/5">
                  <th className="pb-4 font-medium uppercase text-xs tracking-wider">Order ID</th>
                  <th className="pb-4 font-medium uppercase text-xs tracking-wider">Customer</th>
                  <th className="pb-4 font-medium uppercase text-xs tracking-wider">Status</th>
                  <th className="pb-4 font-medium uppercase text-xs tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 font-mono">#92837482</td>
                  <td className="py-4">John Doe</td>
                  <td className="py-4"><span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-xs">Pending</span></td>
                  <td className="py-4 font-bold">$ 54.00</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 font-mono">#92837490</td>
                  <td className="py-4">Jane Smith</td>
                  <td className="py-4"><span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs">Delivered</span></td>
                  <td className="py-4 font-bold">$ 120.50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
