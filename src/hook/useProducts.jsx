import { use, useEffect, useState } from "react";

const apiURL = import.meta.env.VITE_API_URL;

export function useGetProducts(category) {
  const [products, setProducts] = useState([]);

  const url = `${apiURL}products/${
    category != undefined ? `category/${category}` : ""
  }`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return products;
}
