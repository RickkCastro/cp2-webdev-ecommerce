import { useEffect, useState } from "react";
import Card from "./Card";

const apiURL = import.meta.env.VITE_API_URL;

export default function Section({ title, category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `${apiURL}products/category/${category}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center p-5 bg-amber-400 my-10">
        {title}
      </h1>
      <h3 className="text-2xl mx-5 mb-2">Produtos em destaque</h3>
      <div className="flex gap-4 flex-wrap mx-5">
        {products != undefined &&
          products.map((product, index) => (
            <Card key={index} product={product} />
          ))}
      </div>
    </div>
  );
}
