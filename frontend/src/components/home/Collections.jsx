const collections = [
    {
        title: "Men Collection",
        image:
            "https://images.unsplash.com/photo-1574258495973-f010dfbb5371",
    },
    {
        title: "Women Collection",
        image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    },
    {
        title: "Kids Collection",
        image:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    },
    {
        title: "Sunglasses",
        image:
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    },
];

const Collections = () => {
    return (
        <section className="py-24">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-4xl font-bold text-center mb-14">
                    Featured Collections
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {collections.map((item) => (
                        <div
                            key={item.title}
                            className="group overflow-hidden rounded-3xl shadow-lg"
                        >

                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
                            />

                            <div className="p-5 text-center bg-white">
                                <h3 className="text-xl font-semibold">
                                    {item.title}
                                </h3>
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default Collections;