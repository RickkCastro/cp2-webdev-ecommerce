import { useEffect, useState } from "react";

const apiURL = import.meta.env.VITE_API_URL;

export function useProducts(category) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) return;

    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = `${apiURL}products/category/${category}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Erro ao buscar produtos: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return { products, loading, error };
}
