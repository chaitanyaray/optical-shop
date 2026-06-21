import MainLayout from "../../layouts/MainLayout";

const About = () => {
    return (
        <MainLayout>

            {/* Hero Section */}
            <section className="bg-black text-white py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold">
                        About Optical House
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold mt-6">
                        Seeing Better, Living Better
                    </h1>

                    <p className="max-w-3xl mx-auto mt-6 text-gray-300 text-lg">
                        Delivering premium eyewear, advanced eye care
                        solutions and exceptional customer service for
                        over 15 years.
                    </p>

                </div>

            </section>

            {/* Our Story */}
            <section className="py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371"
                                alt="Optical Store"
                                className="w-full h-[500px] object-cover rounded-3xl"
                            />
                        </div>

                        <div>

                            <h2 className="text-4xl font-bold">
                                Our Story
                            </h2>

                            <p className="mt-6 text-gray-600 leading-relaxed">
                                Optical House was founded with a simple mission:
                                to provide high-quality eyewear and professional
                                eye care services at affordable prices.
                            </p>

                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Over the years, we have helped thousands of
                                customers find the perfect eyewear solutions
                                while ensuring excellent vision and comfort.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Statistics */}
            <section className="bg-gray-100 py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

                        <div>
                            <h3 className="text-4xl font-bold text-yellow-500">
                                25K+
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Happy Customers
                            </p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold text-yellow-500">
                                500+
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Premium Frames
                            </p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold text-yellow-500">
                                15+
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Years Experience
                            </p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold text-yellow-500">
                                4.9★
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Customer Rating
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            {/* Vision & Mission */}
            <section className="py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <div className="bg-white shadow-lg rounded-3xl p-8">

                            <h3 className="text-3xl font-bold">
                                Our Vision
                            </h3>

                            <p className="mt-5 text-gray-600">
                                To become the most trusted optical destination
                                by offering innovative eyewear and exceptional
                                customer experiences.
                            </p>

                        </div>

                        <div className="bg-white shadow-lg rounded-3xl p-8">

                            <h3 className="text-3xl font-bold">
                                Our Mission
                            </h3>

                            <p className="mt-5 text-gray-600">
                                To provide premium vision solutions through
                                advanced technology, quality products and
                                professional eye care services.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Why Choose Us */}
            <section className="bg-gray-100 py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <h2 className="text-4xl font-bold text-center">
                        Why Choose Us
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mt-12">

                        <div className="bg-white rounded-3xl p-8 text-center">
                            <h3 className="text-xl font-bold">
                                Expert Eye Care
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Professional eye examinations and guidance.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 text-center">
                            <h3 className="text-xl font-bold">
                                Premium Products
                            </h3>

                            <p className="mt-4 text-gray-600">
                                High-quality frames, lenses and contact lenses.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 text-center">
                            <h3 className="text-xl font-bold">
                                Trusted Service
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Thousands of satisfied customers nationwide.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            {/* Store Gallery */}
            <section className="py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <h2 className="text-4xl font-bold text-center mb-12">
                        Store Gallery
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <img
                            src="https://images.unsplash.com/photo-1511499767150-a48a237f0083"
                            alt=""
                            className="rounded-3xl h-80 w-full object-cover"
                        />

                        <img
                            src="https://images.unsplash.com/photo-1583394838336-acd977736f90"
                            alt=""
                            className="rounded-3xl h-80 w-full object-cover"
                        />

                        <img
                            src="https://images.unsplash.com/photo-1577803645773-f96470509666"
                            alt=""
                            className="rounded-3xl h-80 w-full object-cover"
                        />

                    </div>

                </div>

            </section>

            {/* CTA */}
            <section className="pb-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="bg-black text-white rounded-3xl p-10 md:p-16 text-center">

                        <h2 className="text-3xl md:text-5xl font-bold">
                            Ready For Better Vision?
                        </h2>

                        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
                            Explore our premium collection or book an eye
                            examination with our experts.
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

export default About;