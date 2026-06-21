const categories = [
    {
        title: "Eyeglasses",
        image:
            "https://images.unsplash.com/photo-1577803645773-f96470509666",
    },
    {
        title: "Sunglasses",
        image:
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    },
    {
        title: "Lenses",
        image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    },
    {
        title: "Contact Lenses",
        image:
            "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    },
];

const FeaturedCategories = () => {
    return (
        <section className="py-20">

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center">

                    <span className="text-yellow-500 font-semibold">
                        Shop By Category
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4">
                        Explore Collections
                    </h2>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

                    {categories.map((item, index) => (

                        <div
                            key={index}
                            className="
              group
              rounded-3xl
              overflow-hidden
              shadow-lg
              cursor-pointer
              "
                        >

                            <div className="overflow-hidden">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="
                  w-full
                  h-80
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-500
                  "
                                />

                            </div>

                            <div className="p-6 bg-white">

                                <h3 className="text-2xl font-bold">
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

export default FeaturedCategories;