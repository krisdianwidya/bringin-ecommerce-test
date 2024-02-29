import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { DataView } from "primereact/dataview";

import CartItem from "./CartItem";

const useFetchCartUser = () => {
  return useQuery({
    queryKey: ["userOneCarts"],
    queryFn: async () => {
      const { data } = await axios.get("https://fakestoreapi.com/carts/1");
      return data;
    },
  });
};

const CartsWrapper = () => {
  const { isLoading, data, error } = useFetchCartUser();

  if (isLoading) return <h1>Loading</h1>;

  if (error) return <h1>Error</h1>;

  const listTemplate = (items) => {
    let renderedItems = items.map((item, index) => {
      return <CartItem item={item} index={index} />;
    });
    return <div className="grid grid-nogutter">{renderedItems}</div>;
  };

  return (
    <div className="card">
      <DataView value={data.products} listTemplate={listTemplate} />
    </div>
  );
};

export default CartsWrapper;
