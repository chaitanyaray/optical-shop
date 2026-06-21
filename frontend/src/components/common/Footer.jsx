import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaYoutube,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-white">

            {/* Main Footer */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Company */}
                    <div>

                        <h2 className="text-3xl font-bold">
                            Optical House
                        </h2>

                        <p className="mt-5 text-gray-400 leading-relaxed">
                            Premium eyewear, advanced lenses,
                            contact lenses and professional eye care
                            services for modern lifestyles.
                        </p>

                        <div className="flex gap-4 mt-6">

                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
                            >
                                <FaYoutube />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
                            >
                                <FaWhatsapp />
                            </a>

                        </div>

                    </div>

                    {/* Quick Links */}
                    <div>

                        <h3 className="text-xl font-bold mb-5">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-3">

                            <Link to="/">Home</Link>
                            <Link to="/shop">Shop</Link>
                            <Link to="/brands">Brands</Link>
                            <Link to="/eye-test">Eye Test</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>

                        </div>

                    </div>

                    {/* Categories */}
                    <div>

                        <h3 className="text-xl font-bold mb-5">
                            Categories
                        </h3>

                        <div className="flex flex-col gap-3">

                            <p>Eyeglasses</p>
                            <p>Sunglasses</p>
                            <p>Lenses</p>
                            <p>Contact Lenses</p>
                            <p>Blue Cut Lenses</p>
                            <p>Progressive Lenses</p>

                        </div>

                    </div>

                    {/* Contact */}
                    <div>

                        <h3 className="text-xl font-bold mb-5">
                            Contact Us
                        </h3>

                        <div className="space-y-4">

                            <div className="flex gap-3">
                                <FaPhoneAlt className="mt-1 text-yellow-500" />
                                <span>+91 98765 43210</span>
                            </div>

                            <div className="flex gap-3">
                                <FaEnvelope className="mt-1 text-yellow-500" />
                                <span>support@opticalhouse.com</span>
                            </div>

                            <div className="flex gap-3">
                                <FaMapMarkerAlt className="mt-1 text-yellow-500" />
                                <span>
                                    Vijayawada, Andhra Pradesh,
                                    India
                                </span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Newsletter */}
            <div className="border-t border-gray-800">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">

                    <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">

                        <div>

                            <h3 className="text-2xl font-bold">
                                Subscribe To Newsletter
                            </h3>

                            <p className="text-gray-400 mt-2">
                                Get updates on new arrivals and offers.
                            </p>

                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="
                px-5
                py-4
                rounded-full
                text-black
                min-w-[280px]
                outline-none
                "
                            />

                            <button
                                className="
                bg-yellow-500
                text-black
                px-8
                py-4
                rounded-full
                font-semibold
                "
                            >
                                Subscribe
                            </button>

                        </div>

                    </div>

                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-800">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                        <p className="text-gray-400 text-center">
                            © 2026 Optical House. All Rights Reserved.
                        </p>

                        <div className="flex gap-6 text-gray-400">

                            <Link to="/">
                                Privacy Policy
                            </Link>

                            <Link to="/">
                                Terms & Conditions
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;