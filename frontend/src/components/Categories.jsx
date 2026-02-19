import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className="flex p-5 justify-between max-md:flex-col">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
