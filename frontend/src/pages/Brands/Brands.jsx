import MainLayout from "../../layouts/MainLayout";

const brands = [
    {
        name: "Ray-Ban",
        image:
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    },
    {
        name: "Oakley",
        image:
            "https://images.unsplash.com/photo-1574258495973-f010dfbb5371",
    },
    {
        name: "Vogue",
        image:
            "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    },
    {
        name: "Police",
        image:
            "https://images.unsplash.com/photo-1591076482161-42ce6da69f67",
    },
    {
        name: "Tommy Hilfiger",
        image:
            "https://images.unsplash.com/photo-1508296695146-257a814070b4",
    },
    {
        name: "Titan",
        image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    },
];

const Brands = () => {
    return (
        <MainLayout>

            {/* Hero */}
            <section className="bg-black text-white py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold">
                        Premium Eyewear Brands
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold mt-6">
                        Explore Top Brands
                    </h1>

                    <p className="max-w-3xl mx-auto mt-6 text-gray-300 text-lg">
                        Discover premium international and Indian eyewear
                        brands known for quality, comfort and style.
                    </p>

                </div>

            </section>

            {/* Brands Grid */}
            <section className="py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {brands.map((brand, index) => (

                            <div
                                key={index}
                                className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition
                group
                "
                            >

                                <div className="overflow-hidden">

                                    <img
                                        src={brand.image}
                                        alt={brand.name}
                                        className="
                    w-full
                    h-72
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-500
                    "
                                    />

                                </div>

                                <div className="p-6 text-center">

                                    <h3 className="text-2xl font-bold">
                                        {brand.name}
                                    </h3>

                                    <p className="text-gray-600 mt-3">
                                        Premium eyewear collection
                                    </p>

                                    <button
                                        className="
                    mt-5
                    bg-black
                    text-white
                    px-6
                    py-3
                    rounded-full
                    "
                                    >
                                        View Collection
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* Why Choose Brands */}
            <section className="bg-gray-100 py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center">

                        <h2 className="text-4xl font-bold">
                            Why Choose Premium Brands?
                        </h2>

                        <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
                            Premium eyewear brands offer superior materials,
                            better durability, enhanced comfort and advanced
                            lens technology.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-16">

                        <div className="bg-white p-8 rounded-3xl text-center">

                            <h3 className="text-xl font-bold">
                                Premium Quality
                            </h3>

                            <p className="mt-4 text-gray-600">
                                High-quality materials and craftsmanship.
                            </p>

                        </div>

                        <div className="bg-white p-8 rounded-3xl text-center">

                            <h3 className="text-xl font-bold">
                                Better Comfort
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Lightweight and ergonomic frame designs.
                            </p>

                        </div>

                        <div className="bg-white p-8 rounded-3xl text-center">

                            <h3 className="text-xl font-bold">
                                Stylish Designs
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Modern collections for every lifestyle.
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
                            Find Your Perfect Eyewear
                        </h2>

                        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
                            Browse premium brands and discover frames
                            that match your personality and vision needs.
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
                            Shop Collection
                        </button>

                    </div>

                </div>

            </section>

        </MainLayout>
    );
};

export default Brands;