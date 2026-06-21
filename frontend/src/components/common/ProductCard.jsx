import { FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";

const ProductCard = ({ product }) => {

    const { addToWishlist } = useWishlist();

    return (
        <div
            className="
            group
            bg-white
            rounded-3xl
            overflow-hidden
            shadow-md
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-500
            "
        >

            {/* Image Section */}
            <div className="relative overflow-hidden">

                {/* Bestseller Badge */}
                <span
                    className="
                    absolute
                    top-4
                    left-4
                    z-10
                    bg-yellow-500
                    text-black
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-bold
                    "
                >
                    BESTSELLER
                </span>

                {/* Wishlist Button */}
                <button
                    onClick={() => addToWishlist(product)}
                    className="
                    absolute
                    top-4
                    right-4
                    z-10
                    bg-white
                    p-3
                    rounded-full
                    shadow-lg
                    hover:bg-red-50
                    hover:scale-110
                    transition
                    duration-300
                    "
                >
                    <FaHeart className="text-red-500" />
                </button>

                {/* Product Image */}
                <img
                    src={product.image}
                    alt={product.name}
                    className="
                    w-full
                    h-72
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-700
                    "
                />

            </div>

            {/* Content */}
            <div className="p-5">

                {/* Rating */}
                <div className="flex items-center gap-2 text-yellow-500">

                    <FaStar />

                    <span className="font-medium">
                        {product.rating}
                    </span>

                    <span className="text-gray-500 text-sm">
                        ({product.reviews} Reviews)
                    </span>

                </div>

                {/* Product Name */}
                <h3
                    className="
                    mt-3
                    text-xl
                    font-bold
                    text-gray-900
                    "
                >
                    {product.name}
                </h3>

                {/* Category */}
                <p className="text-gray-500 mt-1">
                    {product.category}
                </p>

                {/* Extra Info */}
                <div className="mt-4 space-y-1">

                    <p className="text-sm text-gray-500">
                        Frame Size: {product.frameSize}
                    </p>

                    <p className="text-sm text-gray-500">
                        Lens Compatible
                    </p>

                    <p className="text-sm font-medium text-green-600">
                        Free Delivery
                    </p>

                </div>

                {/* Price */}
                <div className="mt-5">

                    <div className="flex items-center gap-3 flex-wrap">

                        <span className="text-2xl font-bold">
                            ₹{product.price}
                        </span>

                        <span className="text-gray-400 line-through">
                            ₹{product.price + 1000}
                        </span>

                        <span
                            className="
                            text-green-600
                            text-sm
                            font-semibold
                            "
                        >
                            25% OFF
                        </span>

                    </div>

                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">

                    <Link
                        to={`/product/${product.id}`}
                        className="
                        flex-1
                        bg-black
                        text-white
                        py-3
                        rounded-full
                        text-center
                        font-medium
                        hover:bg-gray-800
                        transition
                        "
                    >
                        View Details
                    </Link>

                    <button
                        className="
                        px-5
                        py-3
                        border
                        rounded-full
                        font-medium
                        hover:bg-gray-100
                        transition
                        "
                    >
                        Quick View
                    </button>

                </div>

            </div>

        </div>
    );
};

export default ProductCard;