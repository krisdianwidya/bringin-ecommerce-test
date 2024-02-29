import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { DataView } from "primereact/dataview";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

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
      return (
        <Product
          product={product}
          slotTemplate={
            <Link to={`/products/${product.id}`}>
              <Button
                className="mt-2"
                label="Go to detail"
                size="small"
              ></Button>
            </Link>
          }
        />
      );
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
