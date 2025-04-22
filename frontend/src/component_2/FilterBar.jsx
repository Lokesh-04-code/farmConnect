import React from 'react';


const FilterBar = ({ onFilter }) => {
    return (
        <div className="flex items-center justify-between flex-wrap gap-3 px-4 py-3 bg-white shadow-md">
            <div className="flex gap-2 flex-wrap">
                <button className="filter-btn active" onClick={() => onFilter('all')}>All Products</button>
                <button className="filter-btn" onClick={() => onFilter('vegetable')}>Vegetables</button>
                <button className="filter-btn" onClick={() => onFilter('fruit')}>Fruits</button>
                <button className="filter-btn" onClick={() => onFilter('low-price')}>Under $2</button>
            </div>
            <div>
                <button className="p-2">
                    <img  alt="Basket" className="w-10 h-10 rounded-full" />
                </button>
            </div>
        </div>
    );
};

export default FilterBar;
