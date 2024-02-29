import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";

const Product = ({ product }) => {
  return (
    <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
      <div className="p-4 border-1 surface-border surface-card border-round">
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
          <div className="flex align-items-center gap-2">
            <i className="pi pi-tag"></i>
            <span className="font-semibold">{product.category}</span>
          </div>
          <Tag value={`Ordered: ${product.rating.count} pcs`}></Tag>
        </div>
        <div className="flex flex-column align-items-center gap-3 py-5">
          <img
            className="shadow-2 border-round"
            src={product.image}
            alt={product.title}
            style={{ height: "250px", width: "auto" }}
          />
          <div className="text-2xl font-bold">{product.title}</div>
          <Rating value={product.rating.rate} readOnly cancel={false}></Rating>
        </div>
        <div className="flex align-items-center justify-content-between">
          <span className="text-2xl font-semibold">${product.price}</span>
          <Button
            icon="pi pi-shopping-cart"
            className="p-button-rounded"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
