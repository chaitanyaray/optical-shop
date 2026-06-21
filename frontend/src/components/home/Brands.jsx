import { motion } from "framer-motion";

const brands = [
    "Ray-Ban",
    "Oakley",
    "Vogue",
    "Carrera",
    "Titan",
    "Police",
];

const Brands = () => {
    return (
        <section className="py-20 bg-gray-50">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-center text-3xl font-bold mb-12">
                    Trusted Brands
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

                    {brands.map((brand) => (
                        <motion.div
                            key={brand}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-xl p-6 shadow-md text-center font-semibold"
                        >
                            {brand}
                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default Brands;