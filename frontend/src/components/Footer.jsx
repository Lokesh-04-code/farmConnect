import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#00093c] to-[#2d0b00] text-white py-10 rounded-tl-[100px]">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* About Section */}
            <div>
                <img src="/images/Agrifeild.webp" alt="FarmConnect" className="w-28 mb-3" />
                <p className="text-xs leading-relaxed">
                    FarmConnect empowers farmers with modern tools, real-time info, and fair market access to boost crop yields and income.
                </p>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="text-base font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="/home" className="hover:text-green-400 transition">Home</a></li>
                    <li><a href="/services" className="hover:text-green-400 transition">Our Services</a></li>
                    <li><a href="/marketplace" className="hover:text-green-400 transition">Marketplace</a></li>
                    <li><a href="/equipment-rental" className="hover:text-green-400 transition">Equipment Rental</a></li>
                    <li><a href="/contact-us" className="hover:text-green-400 transition">Contact Us</a></li>
                </ul>
            </div>

            {/* Contact Info */}
            <div>
                <h4 className="text-base font-semibold mb-3">Contact Us</h4>
                <p className="text-sm"><strong>Email:</strong> srinivas@outlook.com</p>
                <p className="text-sm"><strong>Phone:</strong> +91-9876543210</p>
                <p className="text-sm"><strong>Address:</strong> Amaravati, Vijayawada, India</p>
            </div>

            {/* Social Media */}
            <div className="text-center sm:text-left">
                <h4 className="text-base font-semibold mb-3">Follow Us</h4>
                <div className="flex justify-center sm:justify-start gap-4">
                    <a href="#"><img src="/images/Instagram.avif" alt="Instagram" className="w-7 h-7" /></a>
                    <a href="#"><img src="/images/facebook.png" alt="Facebook" className="w-7 h-7" /></a>
                    <a href="#"><img src="/images/Twitter.jpeg" alt="Twitter" className="w-7 h-7" /></a>
                </div>
            </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-[10px] mt-6 px-4">
            &copy; 2025 FarmConnect. All Rights Reserved. | Designed for a sustainable future.
        </div>
        </footer>
    );
};

export default Footer;

