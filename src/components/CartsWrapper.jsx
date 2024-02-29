import { DataView } from "primereact/dataview";
import CartItem from "./CartItem";

import { useFetchCartUser } from "../hooks/useFetchCartUser";

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
