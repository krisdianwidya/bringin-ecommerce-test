import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Product from "../components/Product";

const useFetchProductDetail = (id) => {
  return useQuery({
    queryKey: ["productDetail"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/" + id
      );
      return data;
    },
  });
};

const ProductDetail = () => {
  const { productId } = useParams();

  const { isLoading, data, error } = useFetchProductDetail(productId);

  if (isLoading) return <h1>Loading</h1>;

  if (error) return <h1>Error</h1>;

  return (
    <div className="flex justify-content-center">
      <Product product={data} />
    </div>
  );
};

export default ProductDetail;
