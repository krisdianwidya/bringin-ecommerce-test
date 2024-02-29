import TopProducts from "../components/TopProducts";
import Products from "../components/Products";
import Header from "../components/Header";
import FilterByCategory from "../components/FilterByCategory";

const Home = () => {
  return (
    <>
      <Header />
      <FilterByCategory />
      <TopProducts />
      <Products />
    </>
  );
};

export default Home;
