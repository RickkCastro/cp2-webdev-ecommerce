import { use, useEffect, useState } from "react";
import { useGetProducts } from "../hook/useProducts";
import Section from "../components/Section";

const apiURL = import.meta.env.VITE_API_URL;

const categorys = ["electronics", "jewelery", "women's clothing"];

export default function Home() {
  const [eletronics, setEletronics] = useState(useGetProducts("electronics"));
  const [clothing, setclothing] = useState([]);
  const [jewelery, setjewelery] = useState([]);

  useEffect(() => {
    for (let category of categorys) {
      const url = `${apiURL}products/category/${category}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (category === "electronics") setEletronics(data);
          if (category === "jewelery") setjewelery(data);
          if (category === "women's clothing") setclothing(data);
        });
    }
  }, []);

  return (
    <div className="my-4">
      <h2 className="text-5xl font-bold text-center">Lista de Produtos</h2>
      <Section title="Eletronicos" products={eletronics} />
      <Section title="Roupas" products={clothing} />
      <Section title="Joias" products={jewelery} />
    </div>
  );
}
