const FAQ = () => {
    return (
        <section className="py-20 bg-gray-100">

            <div className="max-w-4xl mx-auto px-4">

                <h2 className="text-center text-4xl font-bold">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6 mt-12">

                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="font-bold">
                            Do you provide prescription lenses?
                        </h3>

                        <p className="mt-3 text-gray-600">
                            Yes, we provide all prescription lens options.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="font-bold">
                            Can I book an eye test online?
                        </h3>

                        <p className="mt-3 text-gray-600">
                            Yes, through our Eye Test page.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default FAQ;