import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaStarHalfAlt } from "react-icons/fa";

export default function Card({ product }) {
  const rate = product.rating.rate;

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    // Estrelas preenchidas
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }

    // Estrela meio preenchida
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    // Estrelas vazias
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<CiStar key={`empty-${i}`} className="text-gray-400" />);
    }

    return stars;
  };

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition duration-300 w-80">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3>{product.title}</h3>
      <p className="font-bold mt-2">${product.price}</p>
      <div className="flex items-center gap-1 mt-2">
        {renderStars()}
        <span className="text-sm text-gray-600 ml-2">
          ({rate.toFixed(1)}) - {product.rating.count} avaliações
        </span>
      </div>
    </div>
  );
}
