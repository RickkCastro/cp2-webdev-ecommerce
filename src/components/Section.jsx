import Card from "./Card";

export default function Section({ title, products }) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center p-5 bg-amber-400 my-10">
        {title}
      </h1>
      <div className="flex gap-4 flex-wrap">
        {products != undefined &&
          products.map((product, index) => (
            <Card key={index} product={product} />
          ))}
      </div>
    </div>
  );
}
