import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { DataView } from "primereact/dataview";

import Product from "./Product";

const useFetchProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      return data;
    },
  });
};

const Products = () => {
  const { isLoading, data, error } = useFetchProducts();

  if (isLoading) return <h1>Loading</h1>;

  if (error) return <h1>Error</h1>;

  const listTemplate = (products) => {
    let renderedProducts = products.map((product) => {
      return <Product product={product} />;
    });
    return <div className="grid grid-nogutter">{renderedProducts}</div>;
  };

  return (
    <div className="card">
      <DataView value={data} listTemplate={listTemplate} layout="grid" />
    </div>
  );
};

export default Products;
