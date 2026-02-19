import { popularProducts } from "../data";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <div className="p-5 flex flex-wrap justify-between">
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
