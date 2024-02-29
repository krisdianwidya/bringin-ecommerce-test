import React, { useState, useEffect } from "react";
import { ProductService } from "../services/ProductServices";
import { DataView } from "primereact/dataview";

import Product from "./Product";

export default function BasicDemo() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data.slice(0, 12)));
  }, []);

  const listTemplate = (products) => {
    let renderedProducts = products.map((product) => {
      return <Product product={product} />;
    });
    return <div className="grid grid-nogutter">{renderedProducts}</div>;
  };

  return (
    <div className="card">
      <DataView value={products} listTemplate={listTemplate} layout="grid" />
    </div>
  );
}
