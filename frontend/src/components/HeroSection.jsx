import React from 'react';
const HeroSection = () => {
return (
        <section id="home" className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center">
        <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 bottom-0 w-full h-full object-cover -z-10"
        >
            <source src="/agri_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
    </video>
        <div className=" backdrop-blur-sm bg-gray-200/30 bg-opacity-50 p-6 rounded-xl">
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">FarmConnect</h2>
            <h2 className="text-2xl md:text-3xl text-white mb-4">Empowering Farmers for a Brighter Future</h2>
            <p className="text-white text-lg max-w-xl mb-6">
            Access the tools and information you need for better crop management and fair pricing.
            </p>
            <button
            onClick={() => {
                const section = document.getElementById('learn-more');
                if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                }
            }}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition"
            >
            Learn More
            </button>
        </div>
        <input
            type="text"
            placeholder="Search which crop price do you need to"
            className="mt-8 px-4 py-2 border border-gray-300 rounded-full shadow-md w-11/12 max-w-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        </section>
    );
    };

export default HeroSection;
