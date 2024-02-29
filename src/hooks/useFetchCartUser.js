import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchCartUser = () => {
  return useQuery({
    queryKey: ["userOneCarts"],
    queryFn: async () => {
      const { data } = await axios.get("https://fakestoreapi.com/carts/1");
      return data;
    },
  });
};
