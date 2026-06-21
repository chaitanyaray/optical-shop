import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <section className="min-h-[90vh] flex items-center bg-gradient-to-b from-white to-gray-100 py-12 lg:py-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm">
                            Premium Eyewear Collection
                        </span>

                        <h1
                            className="
              mt-6
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              leading-tight
              text-gray-900
            "
                        >
                            See The World
                            <span className="block text-yellow-500">
                                In Style
                            </span>
                        </h1>

                        <p
                            className="
              mt-6
              text-base
              sm:text-lg
              md:text-xl
              text-gray-600
              max-w-2xl
              mx-auto
              lg:mx-0
            "
                        >
                            Discover premium eyeglasses, sunglasses and
                            advanced eye care solutions designed for
                            comfort, clarity and confidence.
                        </p>

                        <div
                            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-8
              justify-center
              lg:justify-start
            "
                        >
                            <button
                                className="
                bg-black
                text-white
                px-8
                py-4
                rounded-full
                font-semibold
                hover:scale-105
                transition
              "
                            >
                                Shop Collection
                            </button>

                            <Link to="/eye-test">
                                <button
                                    className="
    border-2
    border-black
    px-8
    py-4
    rounded-full
    font-semibold
    hover:bg-black
    hover:text-white
    transition
    w-full
    sm:w-auto
    "
                                >
                                    Book Eye Test
                                </button>
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-12">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                                    25K+
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Customers
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                                    500+
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Frames
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                                    15+
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Years
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div
                            className="
              absolute
              -top-6
              -right-6
              w-40
              h-40
              bg-yellow-400/20
              rounded-full
              blur-3xl
              "
                        />

                        <img
                            src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80"
                            alt="Premium Eyewear"
                            className="
              w-full
              h-[350px]
              sm:h-[450px]
              md:h-[550px]
              lg:h-[650px]
              object-cover
              rounded-3xl
              shadow-2xl
              "
                        />

                        <div
                            className="
              absolute
              bottom-6
              left-6
              bg-white
              p-4
              rounded-2xl
              shadow-lg
              "
                        >
                            <h4 className="font-bold text-lg">
                                New Arrival
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Luxury Frame Collection
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;