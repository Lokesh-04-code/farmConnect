import React, { useEffect, useState } from 'react';
import ProductCard from '../component_2/ProductCard';
const AccountPage = ({setactivepage}) => {
    const [user, setUser] = useState(null);
    const [productName, setProductName] = useState('');
    const [type, setType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [error, setError] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const token = localStorage.getItem('token');
            const role = localStorage.getItem('role');
            console.log(role)

            if (role !== 'Farmer') return; // Do not fetch if not farmer

            try {
                const response = await fetch('http://localhost:5000/api/crop', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }

                const data = await response.json();
                setFilteredProducts(data); // assuming API returns an array
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);
    useEffect(() => {
        const token = localStorage.getItem("token");
        let url = '';

        if (localStorage.getItem('role') === 'Farmer') {
            url = 'http://localhost:5000/api/farmer/current';
        } else {
            url = 'http://localhost:5000/api/buyer/current';
        }

        const fetchUserDetails = async () => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const data = await response.json();
                setUser(data);
            } catch (err) {
                setError('Error fetching user data');
                console.error("Error fetching user:", err);
            }
        };

        if (token) {
            fetchUserDetails();
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!productName || !type || !quantity) {
            alert('All fields are required');
            return;
        }

        // Prepare the product data to send to the API
        const productData = {
            name: productName,
            type: type,
            quantity: quantity,
        };

        try {
            const token = localStorage.getItem('token');

            const response = await fetch('http://localhost:5000/api/crop/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(productData),
            });

            if (!response.ok) {
                throw new Error('Failed to add product');
            }

            const result = await response.json();
            console.log('Product added:', result);
            alert('Product added successfully!');
        } catch (err) {
            console.error("Error adding product:", err);
            alert('Error adding product');
        }
    };

    if (error) {
        return (
            <div className="max-w-2xl mx-auto mt-10 text-center text-red-600">
                {error}
            </div>
        );
    }

    if (!user) {
        return (
            <div className="max-w-2xl mx-auto mt-10 text-center text-gray-600">
                Loading user data...
            </div>
        );
    }

    return (
        <>
        <div>
            <button
            onClick={() => setactivepage("home")}
                style={{
                marginBottom: "20px",
                padding: "8px 16px",
                fontSize: "16px",
                backgroundColor: "#333",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
                }}
            >
            ← Back to Home
        </button>

            </div>
            <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">
                Welcome, {user.username} ({localStorage.getItem('role')})
            </h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>City:</strong> {user.city}</p>
            <p><strong>Phone:</strong> {user.phone}</p>

            {localStorage.getItem('role') === 'Farmer' && (
                <>
                    <h3 className="text-lg font-semibold mt-6 mb-2">Add Product</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">

                        <select
                            className="w-full px-3 py-2 border rounded"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                        >
                            <option value="">Select Product</option>
                            <option value="paddy">Paddy</option>
                            <option value="wheat">Wheat</option>
                            <option value="corn">Corn</option>
                            <option value="tomato">Tomato</option>
                            <option value="potato">Potato</option>
                            <option value="bringal">Bringal</option>
                        </select>

                        <select
                            className="w-full px-3 py-2 border rounded"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            required
                        >
                            <option value="">Select Type</option>
                            <option value="vegetable">Vegetable</option>
                            <option value="fruit">Fruit</option>
                            <option value="cereal">Cereal</option>
                        </select>

                        <input
                            type="number"
                            placeholder="Quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />

                        <button
                            type="submit"
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        >
                            Add Product
                        </button>

                    </form>
                </>
            )}
<h1 className='text-[50px]'>current products</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {filteredProducts.map(product => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
        </div>
        </>

    );
};

export default AccountPage;
