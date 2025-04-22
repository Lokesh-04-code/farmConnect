import paddy from '../assets/paddy.png';
import wheat from '../assets/wheat.png';
import corn from '../assets/corn.png';
import tomato from '../assets/tomato.png';
import potato from '../assets/potato.png';
import brinjal from '../assets/brinjal.png';
import banana from '../assets/banana.png';
import apple from '../assets/apple.png';
const imageMap = {
  paddy,
  wheat,
  corn,
  tomato,
  potato,
  brinjal,
  banana,
  apple,
};

const ProductCard = ({ product }) => {
  const image = imageMap[product.name.toLowerCase()];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <img
        src={image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-2 capitalize">{product.name}</h3>
      <p className="text-green-600">quantity: {product.quantity}</p>
      <h4>farmer: {product.farmerName}</h4>
      <h4>city: {product.city}</h4>
      <h4>pincode: {product.pincode}</h4>

    </div>
  );
};

export default ProductCard;
