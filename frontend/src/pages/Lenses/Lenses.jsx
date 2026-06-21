import MainLayout from "../../layouts/MainLayout";

const lenses = [
    {
        name: "Single Vision Lens",
        description:
            "Perfect for distance or reading vision correction.",
        price: "Starting ₹999",
        image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    },
    {
        name: "Blue Cut Lens",
        description:
            "Protects eyes from digital screen blue light.",
        price: "Starting ₹1999",
        image:
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    },
    {
        name: "Progressive Lens",
        description:
            "Distance, intermediate and reading vision in one lens.",
        price: "Starting ₹4999",
        image:
            "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    },
    {
        name: "Photochromic Lens",
        description:
            "Automatically darkens in sunlight and clears indoors.",
        price: "Starting ₹2999",
        image:
            "https://images.unsplash.com/photo-1577803645773-f96470509666",
    },
];

const Lenses = () => {
    return (
        <MainLayout>

            {/* Hero */}
            <section className="bg-black text-white py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold">
                        Premium Optical Lenses
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold mt-6">
                        Advanced Lens Technology
                    </h1>

                    <p className="mt-6 max-w-3xl mx-auto text-gray-300">
                        Discover high-performance lenses designed
                        for comfort, clarity and eye protection.
                    </p>

                </div>

            </section>

            {/* Lens Cards */}
            <section className="py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {lenses.map((lens, index) => (

                            <div
                                key={index}
                                className="
                bg-white
                rounded-3xl
                shadow-lg
                overflow-hidden
                hover:shadow-2xl
                transition
                "
                            >

                                <img
                                    src={lens.image}
                                    alt={lens.name}
                                    className="
                  w-full
                  h-72
                  object-cover
                  "
                                />

                                <div className="p-8">

                                    <h3 className="text-3xl font-bold">
                                        {lens.name}
                                    </h3>

                                    <p className="mt-4 text-gray-600">
                                        {lens.description}
                                    </p>

                                    <p className="mt-5 font-semibold text-yellow-600">
                                        {lens.price}
                                    </p>

                                    <button
                                        className="
                    mt-6
                    bg-black
                    text-white
                    px-6
                    py-3
                    rounded-full
                    "
                                    >
                                        Learn More
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* Lens Index Section */}
            <section className="bg-gray-100 py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <h2 className="text-4xl font-bold text-center">
                        Lens Index Guide
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mt-12">

                        <div className="bg-white p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold">
                                1.50 Index
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Standard lens for low power prescriptions.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold">
                                1.60 Index
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Thinner and lighter premium lens option.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold">
                                1.67 Index
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Ultra-thin lens for higher prescriptions.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}
            <section className="py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="bg-black text-white rounded-3xl p-10 md:p-16 text-center">

                        <h2 className="text-3xl md:text-5xl font-bold">
                            Need Help Choosing Lenses?
                        </h2>

                        <p className="mt-6 text-gray-300">
                            Book an eye test and let our experts
                            recommend the perfect lens solution.
                        </p>

                        <button
                            className="
              mt-8
              bg-yellow-500
              text-black
              px-8
              py-4
              rounded-full
              font-semibold
              "
                        >
                            Book Eye Test
                        </button>

                    </div>

                </div>

            </section>

        </MainLayout>
    );
};

export default Lenses;