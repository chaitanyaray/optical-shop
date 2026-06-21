import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EyeTestCTA = () => {
    return (
        <section className="py-20 lg:py-24 bg-gray-100">

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 80 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="
          bg-black
          text-white
          rounded-3xl
          p-8
          md:p-12
          lg:p-16
          text-center
          overflow-hidden
          relative
          "
                >

                    {/* Decorative Circle */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>

                    <span className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold text-sm">
                        Professional Vision Care
                    </span>

                    <h2
                        className="
            mt-6
            text-3xl
            md:text-5xl
            lg:text-6xl
            font-bold
            "
                    >
                        Book Your Eye Test Today
                    </h2>

                    <p
                        className="
            mt-6
            text-gray-300
            text-base
            md:text-lg
            max-w-3xl
            mx-auto
            "
                    >
                        Professional eye examinations by experienced
                        optometrists using advanced diagnostic equipment.
                        Get accurate prescriptions and expert consultation.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">

                        <div>
                            <h3 className="text-3xl font-bold text-yellow-500">
                                15+
                            </h3>
                            <p className="text-gray-300">
                                Years Experience
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-yellow-500">
                                25K+
                            </h3>
                            <p className="text-gray-300">
                                Happy Customers
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-yellow-500">
                                100%
                            </h3>
                            <p className="text-gray-300">
                                Accurate Testing
                            </p>
                        </div>

                    </div>

                    <Link to="/eye-test">

                        <button
                            className="
              mt-10
              bg-yellow-500
              text-black
              px-8
              py-4
              rounded-full
              font-semibold
              hover:scale-105
              transition
              w-full
              sm:w-auto
              "
                        >
                            Book Appointment
                        </button>

                    </Link>

                </motion.div>

            </div>

        </section>
    );
};

export default EyeTestCTA;