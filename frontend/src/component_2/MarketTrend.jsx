import React, { useState ,useEffect} from 'react';
import Header from './header';
import FilterBar from './FilterBar';
import ProductCard from './ProductCard';

const allProducts = [
    { id: 1, name: 'Tomato', category: 'vegetable', price: 1.5, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Apple', category: 'fruit', price: 2.5, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Banana', category: 'fruit', price: 1.0, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Carrot', category: 'vegetable', price: 0.8, image: 'https://via.placeholder.com/150' },
];


const MarketTrend = ({setactivepage}) => {
    const [allProducts, setCrops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const url = "http://localhost:5000/api/products";
    
        fetch(url, {
          method: 'GET',
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            console.log("Fetched products:", data);
            setCrops(data);
          })
          .catch(error => {
            console.error('Fetch error:', error);
            setError(error.message);
          });
      }, []);

 
    
  

    const [filteredProducts, setFilteredProducts] = useState(allProducts);
    const handleFilter = (type) => {
        switch (type) {
            case 'vegetable':
                setFilteredProducts(allProducts.filter(p => p.type === 'vegetable'));
                break;
            case 'fruit':
                setFilteredProducts(allProducts.filter(p => p.type === 'fruit'));
                break;
            case 'low-price':
                setFilteredProducts(allProducts.filter(p => p.price < 2));
                break;
            default:
                setFilteredProducts(allProducts);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header  setactivepage={setactivepage}/>
            <FilterBar onFilter={handleFilter} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {filteredProducts.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div> 
        </div>
    );
};

export default MarketTrend;
