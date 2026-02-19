import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const ProductList = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <h1 className="text-4xl font-bold m-5 tracking-tighter">Dresses</h1>
      <div className="flex justify-between p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <span className="text-xl font-semibold mr-3">Filter Products:</span>
          <select className="bg-premium-muted border border-white/10 p-2 rounded-lg outline-none">
            <option disabled selected>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select className="bg-premium-muted border border-white/10 p-2 rounded-lg outline-none">
            <option disabled selected>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <span className="text-xl font-semibold mr-3">Sort Products:</span>
          <select className="bg-premium-muted border border-white/10 p-2 rounded-lg outline-none">
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
