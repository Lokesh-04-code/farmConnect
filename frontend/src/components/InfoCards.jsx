import React from "react";

const InfoCards = () => {
    const cards = [
        { title: "Market Trends", link: "market_Trend.html" },
        { title: "Ecofriendly", link: "#" },
        { title: "Weather Forecast", link: "#" },
        { title: "Direct Contact", link: "#" },
    ];

    return (
        <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {cards.map((card, index) => (
            <div
                key={index}
                className="bg-white text-center shadow-md rounded-xl p-6 cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:bg-green-50"
            >
                <h3 className="text-xl font-semibold text-green-800 capitalize">{card.title}</h3>
            </div>
            ))}
        </div>
        </section>
    );
};

export default InfoCards;
