const Stats = () => {
    return (
        <section className="bg-black text-white py-24">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid md:grid-cols-3 gap-10 text-center">

                    <div>
                        <h2 className="text-5xl font-bold text-yellow-500">
                            25K+
                        </h2>
                        <p className="mt-3">
                            Happy Customers
                        </p>
                    </div>

                    <div>
                        <h2 className="text-5xl font-bold text-yellow-500">
                            500+
                        </h2>
                        <p className="mt-3">
                            Premium Frames
                        </p>
                    </div>

                    <div>
                        <h2 className="text-5xl font-bold text-yellow-500">
                            15+
                        </h2>
                        <p className="mt-3">
                            Years Experience
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Stats;