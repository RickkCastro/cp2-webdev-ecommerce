import Card from "./Card";
import { useProducts } from "../hook/useProducts";

export default function Section({ title, category }) {
  const { products, loading, error } = useProducts(category);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center p-5 bg-amber-400 my-10">
        {title}
      </h1>
      <h3 className="text-2xl mx-5 mb-2">Produtos em destaque</h3>
      
      {loading && (
        <div className="text-center p-4">
          <p className="text-lg">Carregando produtos...</p>
        </div>
      )}
      
      {error && (
        <div className="text-center p-4">
          <p className="text-red-500">Erro: {error}</p>
        </div>
      )}
      
      <div className="flex gap-4 flex-wrap mx-5">
        {products && products.length > 0 &&
          products.map((product, index) => (
            <Card key={index} product={product} />
          ))}
      </div>
    </div>
  );
}
