import { useState } from "react";
import {
    FaStar,
    FaHeart,
    FaUpload,
} from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const ProductInfo = ({ product }) => {
    const { addToCart } = useCart();

    const [selectedLens, setSelectedLens] =
        useState("Single Vision");

    const [selectedSize, setSelectedSize] =
        useState("Medium");

    const [selectedIndex, setSelectedIndex] =
        useState("1.60");

    const [quantity, setQuantity] =
        useState(1);

    const sizes = [
        "Small",
        "Medium",
        "Large",
    ];

    const lenses = [
        "Single Vision",
        "Blue Cut",
        "Photochromic",
        "Progressive",
    ];

    const indexes = [
        "1.50",
        "1.60",
        "1.67",
    ];

    return (
        <div className="w-full">

            {/* Category */}
            <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm">
                {product.category}
            </span>

            {/* Title */}
            <h1 className="mt-4 text-3xl md:text-5xl font-bold">
                {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
                <FaStar className="text-yellow-500" />
                <span>4.9 Rating</span>
                <span className="text-gray-500">
                    (245 Reviews)
                </span>
            </div>

            {/* Price */}
            <div className="mt-6">
                <span className="text-4xl font-bold">
                    ₹{product.price}
                </span>

                <span className="ml-4 text-gray-400 line-through">
                    ₹{product.price + 1200}
                </span>
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-3xl p-5">

                <h3 className="font-bold text-lg">
                    Choose Purchase Type
                </h3>

                <div className="grid sm:grid-cols-2 gap-4 mt-4">

                    <button
                        className="
            border-2
            border-black
            rounded-2xl
            p-4
            text-left
            "
                    >
                        <h4 className="font-semibold">
                            Frame Only
                        </h4>

                        <p className="text-sm text-gray-600 mt-2">
                            Buy without prescription lens.
                        </p>
                    </button>

                    <button
                        className="
bg-black
text-white
px-6
py-4
rounded-xl
"
                    >
                        <h4 className="font-semibold">
                            Frame + Lens
                        </h4>

                        <p className="text-sm mt-2">
                            Add powered lenses.
                        </p>
                    </button>

                </div>

            </div>

            {/* Description */}
            <p className="mt-6 text-gray-600 leading-relaxed">
                Premium optical frame with superior
                comfort, lightweight construction and
                modern styling.
            </p>

            {/* Frame Size */}
            <div className="mt-10">

                <h3 className="font-semibold text-lg mb-4">
                    Select Frame Size
                </h3>

                <div className="flex flex-wrap gap-3">

                    {sizes.map((size) => (
                        <button
                            key={size}
                            onClick={() =>
                                setSelectedSize(size)
                            }
                            className={`
                px-5 py-3 rounded-full border transition
                ${selectedSize === size
                                    ? "bg-black text-white"
                                    : "bg-white"
                                }
              `}
                        >
                            {size}
                        </button>
                    ))}

                </div>

            </div>

            {/* Lens Type */}
            <div className="mt-10">

                <h3 className="font-semibold text-lg mb-4">
                    Select Lens Type
                </h3>

                <div className="flex flex-wrap gap-3">

                    {lenses.map((lens) => (
                        <button
                            key={lens}
                            onClick={() =>
                                setSelectedLens(lens)
                            }
                            className={`
                px-5 py-3 rounded-full border transition
                ${selectedLens === lens
                                    ? "bg-black text-white"
                                    : "bg-white"
                                }
              `}
                        >
                            {lens}
                        </button>
                    ))}

                </div>

            </div>

            {/* Lens Index */}
            <div className="mt-10">

                <h3 className="font-semibold text-lg mb-4">
                    Lens Index
                </h3>

                <div className="flex flex-wrap gap-3">

                    {indexes.map((index) => (
                        <button
                            key={index}
                            onClick={() =>
                                setSelectedIndex(index)
                            }
                            className={`
                px-5 py-3 rounded-full border transition
                ${selectedIndex === index
                                    ? "bg-black text-white"
                                    : "bg-white"
                                }
              `}
                        >
                            {index}
                        </button>
                    ))}

                </div>

            </div>

            {/* Prescription */}
            <div className="mt-10 bg-gray-50 p-6 rounded-3xl">

                <h3 className="font-semibold text-lg">
                    Prescription
                </h3>

                <p className="text-gray-500 mt-2">
                    Upload your prescription image or PDF.
                </p>

                <label
                    className="
          mt-4
          flex
          items-center
          justify-center
          gap-3
          border-2
          border-dashed
          rounded-2xl
          p-5
          cursor-pointer
          "
                >
                    <FaUpload />

                    Upload Prescription

                    <input
                        type="file"
                        className="hidden"
                    />
                </label>

            </div>

            {/* PD */}
            <div className="mt-10">

                <h3 className="font-semibold text-lg mb-4">
                    Pupillary Distance (PD)
                </h3>

                <input
                    type="number"
                    placeholder="Example: 63"
                    className="
          w-full
          border
          rounded-xl
          p-4
          "
                />

                <label className="flex items-center gap-3 mt-4">

                    <input
                        type="checkbox"
                        className="w-4 h-4"
                    />

                    <span className="text-sm font-medium">
                        I don't know my PD
                    </span>

                </label>

                <div className="mt-4 bg-blue-50 border border-blue-100 p-4 rounded-2xl">

                    <h4 className="font-semibold">
                        What is PD?
                    </h4>

                    <p className="text-sm text-gray-600 mt-2">
                        Pupillary Distance (PD) is the distance
                        between your pupils. It helps us place
                        the lenses accurately for perfect vision.
                    </p>

                </div>

            </div>

            <div className="mt-10">

                <h3 className="font-semibold text-lg mb-4">
                    Check Delivery
                </h3>

                <div className="flex flex-col sm:flex-row gap-3">

                    <input
                        type="text"
                        placeholder="Enter PIN Code"
                        className="
            flex-1
            border
            rounded-xl
            p-4
            "
                    />

                    <button
                        className="
            bg-black
            text-white
            px-6
            rounded-xl
            "
                    >
                        Check
                    </button>

                </div>

            </div>

            {/* Quantity */}
            <div className="mt-10">

                <h3 className="font-semibold text-lg mb-4">
                    Quantity
                </h3>

                <div className="flex items-center gap-4">

                    <button
                        onClick={() =>
                            quantity > 1 &&
                            setQuantity(quantity - 1)
                        }
                        className="
            w-10
            h-10
            rounded-full
            bg-gray-200
            "
                    >
                        -
                    </button>

                    <span className="font-bold text-lg">
                        {quantity}
                    </span>

                    <button
                        onClick={() =>
                            setQuantity(quantity + 1)
                        }
                        className="
            w-10
            h-10
            rounded-full
            bg-gray-200
            "
                    >
                        +
                    </button>

                </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">

                <button
                    onClick={() =>
                        addToCart(product)
                    }
                    className="
          flex-1
          bg-black
          text-white
          py-4
          rounded-full
          font-semibold
          "
                >
                    Add To Cart
                </button>

                <button
                    className="
          flex-1
          bg-yellow-500
          py-4
          rounded-full
          font-semibold
          "
                >
                    Buy Now
                </button>

                <button
                    className="
          w-full
          sm:w-14
          h-14
          border
          rounded-full
          flex
          items-center
          justify-center
          "
                >
                    <FaHeart />
                </button>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">

                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                    <h4 className="font-semibold">
                        Free Delivery
                    </h4>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                    <h4 className="font-semibold">
                        1 Year Warranty
                    </h4>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                    <h4 className="font-semibold">
                        Easy Returns
                    </h4>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                    <h4 className="font-semibold">
                        Secure Payment
                    </h4>
                </div>

            </div>

            <div className="mt-10 bg-green-50 border border-green-100 rounded-3xl p-6">

                <h3 className="font-bold text-lg">
                    EMI Available
                </h3>

                <p className="text-gray-600 mt-2">
                    Buy now and pay from ₹299/month.
                </p>

            </div>

            {/* Features */}
            <div className="mt-12 border-t pt-8 space-y-4">

                <div className="flex justify-between">
                    <span>Frame Material</span>
                    <span>Premium Metal</span>
                </div>

                <div className="flex justify-between">
                    <span>Warranty</span>
                    <span>1 Year</span>
                </div>

                <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>3-5 Days</span>
                </div>

            </div>

        </div>
    );
};

export default ProductInfo;