import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";

const FilterByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const allCategories = [
    { name: "electronics" },
    { name: "jewelery" },
    { name: "men's clothing" },
    { name: "women's clothing" },
  ];

  const useFetchProductsByCategory = () => {
    return useQuery({
      queryKey: ["products"],
      queryFn: async () => {
        const { data } = await axios.get(
          "https://fakestoreapi.com/products/category/" + selectedCategory.name
        );
        return data;
      },
      enabled: false,
    });
  };

  const { refetch } = useFetchProductsByCategory();

  useEffect(() => {
    if (selectedCategory !== "") {
      refetch();
    }
  }, [selectedCategory]);

  return (
    <div className="card flex justify-content-start">
      <Dropdown
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.value)}
        options={allCategories}
        optionLabel="name"
        placeholder="Select a category"
        className="w-full md:w-14rem"
      />
    </div>
  );
};

export default FilterByCategory;
