import { classNames } from "primereact/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Tag } from "primereact/tag";
import { Chip } from "primereact/chip";

const useFetchItem = (id) => {
  return useQuery({
    queryKey: ["itemCart", id],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/" + id
      );
      return data;
    },
  });
};

const CartItem = ({ item, index }) => {
  const { isLoading, data, error } = useFetchItem(item.productId);

  if (isLoading) return <h1>Loading</h1>;

  if (error) return <h1>Error</h1>;

  return (
    <div className="col-12" key={index}>
      <div
        className={classNames(
          "flex flex-column xl:flex-row xl:align-items-start p-4 gap-4",
          { "border-top-1 surface-border": index !== 0 }
        )}
      >
        <img
          className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
          src={data.image}
          alt={data.title}
        />
        <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
          <div className="flex flex-column align-items-center sm:align-items-start gap-3">
            <div className="text-2xl font-bold text-900">{data.title}</div>
            <div className="flex align-items-center gap-3">
              <span className="flex align-items-center gap-2">
                <i className="pi pi-tag"></i>
                <span className="font-semibold">{data.category}</span>
              </span>
            </div>
          </div>
          <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
            <span className="text-2xl font-semibold">
              Per product price: ${data.price}
            </span>
            <Tag severity="info" value={`Qty: ${item.quantity}`}></Tag>
            <Chip
              className="mt-7"
              label={`Total price: $${data.price * item.quantity}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
