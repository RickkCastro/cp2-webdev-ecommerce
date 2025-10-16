export default function Card({ product }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition duration-300 w-80">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3>{product.title}</h3>
      <p className="font-bold mt-2">${product.price}</p>
    </div>
  );
}
