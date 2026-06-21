import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";

const contactLenses = [
    {
        name: "Daily Disposable",
        description:
            "Fresh lens every day for maximum hygiene and comfort.",
        price: "Starting ₹799",
        image:
            "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    },
    {
        name: "Monthly Disposable",
        description:
            "Cost-effective lenses designed for monthly use.",
        price: "Starting ₹999",
        image:
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    },
    {
        name: "Colored Contact Lens",
        description:
            "Enhance your appearance with stylish colored lenses.",
        price: "Starting ₹1299",
        image:
            "https://images.unsplash.com/photo-1577803645773-f96470509666",
    },
    {
        name: "Toric Contact Lens",
        description:
            "Specialized lenses designed for astigmatism correction.",
        price: "Starting ₹1999",
        image:
            "https://images.unsplash.com/photo-1508296695146-257a814070b4",
    },
];

const ContactLenses = () => {
    return (
        <MainLayout>

            {/* Hero */}
            <section className="bg-black text-white py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold">
                        Premium Contact Lenses
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold mt-6">
                        Comfort Meets Clarity
                    </h1>

                    <p className="max-w-3xl mx-auto mt-6 text-gray-300 text-lg">
                        Discover daily, monthly, colored and toric contact lenses
                        designed for superior comfort and clear vision.
                    </p>

                </div>

            </section>

            {/* Products */}
            <section className="py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {contactLenses.map((lens, index) => (

                            <div
                                key={index}
                                className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
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

                                    <p className="mt-5 text-yellow-600 font-semibold">
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
                                        View Details
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* Benefits */}
            <section className="bg-gray-100 py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <h2 className="text-4xl font-bold text-center">
                        Why Choose Our Contact Lenses?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mt-12">

                        <div className="bg-white p-8 rounded-3xl text-center">

                            <h3 className="text-2xl font-bold">
                                All Day Comfort
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Breathable materials for comfortable wear.
                            </p>

                        </div>

                        <div className="bg-white p-8 rounded-3xl text-center">

                            <h3 className="text-2xl font-bold">
                                Crystal Clear Vision
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Advanced optics for sharp and clear vision.
                            </p>

                        </div>

                        <div className="bg-white p-8 rounded-3xl text-center">

                            <h3 className="text-2xl font-bold">
                                Trusted Brands
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Premium contact lens brands from around the world.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Care Guide */}
            <section className="py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <h2 className="text-4xl font-bold text-center">
                        Contact Lens Care Guide
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mt-12">

                        <div className="bg-white p-8 rounded-3xl shadow-md">

                            <h3 className="text-2xl font-bold">
                                Do's
                            </h3>

                            <ul className="mt-5 space-y-3 text-gray-600">
                                <li>✓ Wash hands before handling lenses</li>
                                <li>✓ Use recommended cleaning solution</li>
                                <li>✓ Follow replacement schedule</li>
                                <li>✓ Store lenses properly</li>
                            </ul>

                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-md">

                            <h3 className="text-2xl font-bold">
                                Don'ts
                            </h3>

                            <ul className="mt-5 space-y-3 text-gray-600">
                                <li>✗ Sleep with lenses unless prescribed</li>
                                <li>✗ Use tap water to clean lenses</li>
                                <li>✗ Share lenses with others</li>
                                <li>✗ Wear damaged lenses</li>
                            </ul>

                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}
            <section className="pb-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="bg-black text-white rounded-3xl p-10 md:p-16 text-center">

                        <h2 className="text-3xl md:text-5xl font-bold">
                            Not Sure Which Lens Is Right For You?
                        </h2>

                        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
                            Book an eye test and get expert recommendations.
                        </p>

                        <Link to="/eye-test">
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
                        </Link>

                    </div>

                </div>

            </section>

        </MainLayout>
    );
};

export default ContactLenses;