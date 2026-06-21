import ProductCard from "../common/ProductCard";
import products from "../../data/products";

const ProductGrid = () => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}

        </div>
    );
};

export default ProductGrid;