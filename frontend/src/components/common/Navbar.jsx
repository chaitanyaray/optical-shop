import { useState } from "react";
import {
    FaShoppingBag,
    FaShoppingCart,
    FaBars,
    FaTimes,
    FaUser,
    FaHeart,
    FaBox,
} from "react-icons/fa";

import {
    Link,
    NavLink,
} from "react-router-dom";

import { useCart } from "../../context/CartContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { cartCount } = useCart();

    const navLinks = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Shop",
            path: "/shop",
        },
        {
            name: "Brands",
            path: "/brands",
        },
        {
            name: "Eye Test",
            path: "/eye-test",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Contact",
            path: "/contact",
        },
        {
            name: "Lenses",
            path: "/lenses",
        },
        {
            name: "Contact Lenses",
            path: "/contact-lenses",
        }
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="h-20 flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/">
                        <h1 className="text-2xl font-bold tracking-wide">
                            Optical House
                        </h1>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `font-medium transition ${isActive
                                        ? "text-yellow-600"
                                        : "text-gray-700 hover:text-yellow-600"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <Link
                        to="/dashboard"
                        onClick={() => setIsOpen(false)}
                        className="font-medium text-gray-700"
                    >
                        Dashboard
                    </Link>


                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-2xl"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>

                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-300
          ${isOpen
                        ? "max-h-[700px] border-t"
                        : "max-h-0"
                    }
        `}
            >
                <div className="bg-white px-4 py-6">

                    <div className="flex flex-col gap-5">

                        {navLinks.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `font-medium ${isActive
                                        ? "text-yellow-600"
                                        : "text-gray-700"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}

                        <Link
                            to="/login"
                            onClick={() => setIsOpen(false)}
                            className="font-medium text-gray-700"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            onClick={() => setIsOpen(false)}
                            className="font-medium text-gray-700"
                        >
                            Register
                        </Link>

                        <Link
                            to="/cart"
                            onClick={() => setIsOpen(false)}
                            className="font-medium text-gray-700"
                        >
                            Cart ({cartCount})
                        </Link>

                        <Link
                            to="/shop"
                            onClick={() => setIsOpen(false)}
                            className="
              bg-black
              text-white
              py-3
              rounded-full
              flex
              items-center
              justify-center
              gap-2
              "
                        >
                            <FaShoppingBag />
                            Shop Now
                        </Link>

                    </div>

                </div>
            </div>

        </header>
    );
};

export default Navbar;