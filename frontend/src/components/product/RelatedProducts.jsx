import products from "../../data/products";
import ProductCard from "../common/ProductCard";

const RelatedProducts = ({ currentProductId }) => {

    const relatedProducts = products
        .filter(
            (product) =>
                product.id !== currentProductId
        )
        .slice(0, 4);

    return (

        <section className="mt-24">

            <div className="flex justify-between items-center mb-8">

                <div>

                    <span className="
                    text-yellow-500
                    font-semibold
                    ">
                        Recommended
                    </span>

                    <h2 className="
                    text-3xl
                    md:text-4xl
                    font-bold
                    mt-2
                    ">
                        You May Also Like
                    </h2>

                </div>

            </div>

            <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
            ">

                {relatedProducts.map(
                    (product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    )
                )}

            </div>

        </section>
    );
};

export default RelatedProducts;