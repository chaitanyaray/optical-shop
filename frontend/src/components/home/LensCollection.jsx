const LensCollection = () => {
    return (
        <section className="py-20 bg-gray-100">

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center">

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Premium Lens Solutions
                    </h2>

                    <p className="mt-5 text-gray-600">
                        Advanced lens technology for every lifestyle.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

                    {[
                        "Single Vision",
                        "Blue Cut",
                        "Progressive",
                        "Photochromic",
                    ].map((lens) => (

                        <div
                            key={lens}
                            className="
              bg-white
              rounded-3xl
              p-8
              text-center
              shadow-md
              "
                        >

                            <h3 className="text-2xl font-bold">
                                {lens}
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Premium optical lenses with
                                superior visual clarity.
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default LensCollection;