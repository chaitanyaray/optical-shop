const Testimonials = () => {
    return (
        <section className="py-20">

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-center text-4xl font-bold">
                    What Customers Say
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mt-14">

                    {[
                        "Amazing quality and service.",
                        "Best eyewear collection.",
                        "Professional eye testing.",
                    ].map((review, index) => (

                        <div
                            key={index}
                            className="
              bg-white
              p-8
              rounded-3xl
              shadow-lg
              "
                        >

                            <p className="text-gray-600">
                                "{review}"
                            </p>

                            <h4 className="font-bold mt-5">
                                Customer
                            </h4>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Testimonials;