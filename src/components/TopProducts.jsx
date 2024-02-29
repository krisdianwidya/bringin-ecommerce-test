import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";

const useFetchTopProducts = () => {
  return useQuery({
    queryKey: ["topProducts"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products?limit=9"
      );
      return data;
    },
  });
};

const TopProducts = () => {
  const { isLoading, data, error } = useFetchTopProducts();

  if (isLoading) return <h1>Loading</h1>;

  if (error) return <h1>Error</h1>;

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = (product) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img
            src={product.image}
            alt={product.title}
            className="shadow-2"
            style={{ height: "60px", width: "auto" }}
          />
        </div>
        <div>
          <h5 className="mb-1">{product.title}</h5>
          <h4 className="mt-0 mb-3">${product.price}</h4>
          <Tag
            value={`Ordered: ${product.rating.count} pcs`}
            severity="success"
          ></Tag>
          <br />
          <Button
            className="mt-2"
            icon="pi pi-shopping-cart"
            label="Add to cart"
            size="small"
          ></Button>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={data}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={productTemplate}
      />
    </div>
  );
};

export default TopProducts;
