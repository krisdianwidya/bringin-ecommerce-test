import TopProducts from "../components/TopProducts";
import Products from "../components/Products";
import FilterByCategory from "../components/FilterByCategory";

const Home = () => {
  return (
    <>
      <FilterByCategory />
      <TopProducts />
      <Products />
    </>
  );
};

export default Home;
