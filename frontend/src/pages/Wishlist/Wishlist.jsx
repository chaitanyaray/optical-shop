import MainLayout from "../../layouts/MainLayout";
import { useWishlist }
    from "../../context/WishlistContext";

const Wishlist = () => {

    const {
        wishlistItems,
        removeFromWishlist,
    } = useWishlist();

    return (

        <MainLayout>

            <section className="py-20">

                <div className="max-w-7xl mx-auto px-4">

                    <h1 className="text-4xl font-bold mb-10">
                        My Wishlist
                    </h1>

                    {wishlistItems.length === 0 ? (

                        <p>
                            No products added.
                        </p>

                    ) : (

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                            {wishlistItems.map(
                                (item) => (

                                    <div
                                        key={item.id}
                                        className="
                                        bg-white
                                        rounded-3xl
                                        shadow
                                        overflow-hidden
                                        "
                                    >

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="
                                            w-full
                                            h-64
                                            object-cover
                                            "
                                        />

                                        <div className="p-5">

                                            <h3 className="font-bold text-xl">
                                                {item.name}
                                            </h3>

                                            <p className="mt-2">
                                                ₹{item.price}
                                            </p>

                                            <button
                                                onClick={() =>
                                                    removeFromWishlist(
                                                        item.id
                                                    )
                                                }
                                                className="
                                                mt-4
                                                bg-red-500
                                                text-white
                                                px-5
                                                py-3
                                                rounded-full
                                                "
                                            >
                                                Remove
                                            </button>

                                        </div>

                                    </div>
                                )
                            )}

                        </div>

                    )}

                </div>

            </section>

        </MainLayout>
    );
};

export default Wishlist;