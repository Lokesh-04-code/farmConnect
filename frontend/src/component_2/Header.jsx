import React from 'react';



const Header = ({setactivepage}) => {
        return (
            <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-green-700 text-white shadow-lg">
            {/* Logo Section */}
            <div className="flex items-center gap-3 mb-2 md:mb-0 rounded-2xl">
                <img src="logo.jpg" alt="Logo" className="w-12 h-12 object-contain" />
                <span className="text-xl font-bold">FarmConnect</span>
            </div>
        
            {/* Search Input */}
            <div className="w-full md:max-w-md mb-2 md:mb-0">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-300 shadow-sm"
                />
            </div>
        
            {/* Button + Page Title */}
            <div className="flex items-center gap-4">
                <button className="px-4 py-2 bg-white text-green-700 rounded-md hover:bg-green-100 font-medium transition duration-200" onClick={() => setactivepage("home")}>
                    Back
                </button>
                <div className="text-lg font-semibold">Products</div>
            </div>
            </div>
        );
        
};

export default Header;
