import React, { useState } from 'react';

const RegisterPage = () => {
    const [role, setRole] = useState('');
    const [formData, setFormData] = useState({
        
        username: '',
        email: '',
        password: '',
        city: '',
        pincode: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        let url = ''; // Declare it in the outer scope
    
        if (role === 'Farmer') {
            url = 'http://localhost:5000/api/farmer/register';
        } else {
            url = 'http://localhost:5000/api/buyer/register';
        }
    
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
    
            const result = await res.json();
            alert(result.message || 'Registration successful!');
        } catch (error) {
            console.error('Registration failed:', error);
            alert('Error registering user. Please try again.');
        }
    };
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
            🌾 Registration Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
            
            <input
                name="username"
                placeholder="Username"
                className="w-full px-4 py-2 border rounded"
                value={formData.username}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded"
                value={formData.password}
                onChange={handleChange}
            />
            <input
                name="city"
                placeholder="City"
                className="w-full px-4 py-2 border rounded"
                value={formData.city}
                onChange={handleChange}
            />
            <input
                name="pincode"
                placeholder="Pincode"
                className="w-full px-4 py-2 border rounded"
                value={formData.pincode}
                onChange={handleChange}
            />
            <input
                name="phone"
                placeholder="Phone"
                className="w-full px-4 py-2 border rounded"
                value={formData.phone}
                onChange={handleChange}
            />

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
                </label>
                <select
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                >
                <option value="">Select your role</option>
                <option value="Farmer">Farmer</option>
                <option value="Buyer">User/Buyer</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
                Register
            </button>
            </form>
        </div>
        </div>
    );
};

export default RegisterPage;