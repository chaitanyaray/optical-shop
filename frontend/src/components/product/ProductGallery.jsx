import { useState } from "react";

const ProductGallery = ({ product }) => {
    const images = [
        product.image,
        product.image,
        product.image,
        product.image,
    ];

    const [selectedImage, setSelectedImage] =
        useState(images[0]);

    return (
        <div className="w-full">

            {/* Main Image */}
            <div
                className="
        overflow-hidden
        rounded-3xl
        bg-gray-100
        "
            >
                <img
                    src={selectedImage}
                    alt={product.name}
                    className="
          w-full
          h-[350px]
          sm:h-[450px]
          md:h-[550px]
          object-cover
          transition
          duration-500
          hover:scale-110
          "
                />
            </div>

            {/* Thumbnails */}
            <div
                className="
        grid
        grid-cols-4
        gap-4
        mt-5
        "
            >

                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            setSelectedImage(img)
                        }
                        className={`
              rounded-2xl
              overflow-hidden
              border-2
              transition
              ${selectedImage === img
                                ? "border-black"
                                : "border-transparent"
                            }
            `}
                    >
                        <img
                            src={img}
                            alt=""
                            className="
              w-full
              h-24
              object-cover
              "
                        />
                    </button>
                ))}

            </div>

            {/* Trust Badges */}
            <div
                className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-4
        mt-8
        "
            >

                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                    <h4 className="font-semibold">
                        Free Shipping
                    </h4>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                    <h4 className="font-semibold">
                        1 Year Warranty
                    </h4>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                    <h4 className="font-semibold">
                        Easy Return
                    </h4>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                    <h4 className="font-semibold">
                        Secure Payment
                    </h4>
                </div>

            </div>

        </div>
    );
};

export default ProductGallery;