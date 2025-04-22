import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthLandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-green-50">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 bg-green-700 text-white">
            <h1 className="text-2xl font-bold">FarmConnect</h1>
            <div className="space-x-4">
            <button
                onClick={() => navigate('/login')}
                className="px-4 py-2 bg-white text-green-700 rounded hover:bg-green-100"
            >
                Login
            </button>
            <button
                onClick={() => navigate('/register')}
                className="px-4 py-2 bg-white text-green-700 rounded hover:bg-green-100"
            >
                Register
            </button>
            </div>
        </header>

        {/* Content */}
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl font-bold mb-4 text-green-800">Empowering Farmers Through Technology</h2>
            <p className="max-w-2xl text-lg text-gray-700">
            Welcome to AgroTech – Your all-in-one platform for tracking market trends, accessing weather forecasts, and getting modern farming support.
            </p>
        </main>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-600 py-4">
            &copy; 2025 AgroTech. All rights reserved.
        </footer>
        </div>
    );
};

export default AuthLandingPage;
