import React from "react";

const AboutUs = () => {
    const iconCards = [
        {
        title: "Helping Farmers",
        subtitle: "Every time current market prices",
        },
        {
        title: "Helping Farmers",
        subtitle: "Grow Better",
        },
        {
        title: "Helping Farmers",
        subtitle: "Sell Globally",
        },
    ];

    return (
        <section id="aboutus" className="bg-white py-16 px-4">
        <div className="max-w-7xl  mx-auto space-y-10">
            {/* Heading */}
            <div className="text-center">
                <h2 className="text-3xl font-bold text-green-800">Who We Are</h2>
                <p className="text-gray-700 mt-2">
                    We are establishing the <strong>Largest Agriculture Platform</strong> that is accessible to all farmers.
                </p>
            </div>

            {/* Icon Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6">
            {iconCards.map((card, index) => (
                <div
                key={index}
                className="bg-green-100 p-6 rounded-lg shadow-md hover:bg-green-200 transition"
                >
                    <h3 className="text-lg font-semibold text-green-900 mb-2">{card.title}</h3>
                    <p className="text-sm text-green-700">{card.subtitle}</p>
                </div>
            ))}
            </div>

            {/* YouTube Video */}
            <div className="flex justify-center items-center w-full">
                <div className="w-[560px] h-[285px]">
                    <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/JeU_EYFH1Jk?si=c0LAkYbaxXvmUN2K"
                    title="AgroTech Introduction"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
        </section>
    );
};

export default AboutUs;

