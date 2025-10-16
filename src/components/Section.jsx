import Card from "./Card";

export default function Section({ title, products }) {
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
