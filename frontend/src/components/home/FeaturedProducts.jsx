import ProductCard from "../common/ProductCard";
import SectionTitle from "../common/SectionTitle";
import Container from "../common/Container";

const products = [
    {
        id: 1,
        name: "Premium Black Frame",
        category: "Eyeglasses",
        price: 2999,
        image:
            "https://images.unsplash.com/photo-1577803645773-f96470509666",
    },
    {
        id: 2,
        name: "Luxury Sunglasses",
        category: "Sunglasses",
        price: 3499,
        image:
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    },
    {
        id: 3,
        name: "Modern Metal Frame",
        category: "Eyeglasses",
        price: 2599,
        image:
            "https://images.unsplash.com/photo-1591076482161-42ce6da69f67",
    },
    {
        id: 4,
        name: "Classic Round Frame",
        category: "Eyeglasses",
        price: 2199,
        image:
            "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    },
];

const FeaturedProducts = () => {
    return (
        <section className="py-24">

            <Container>

                <SectionTitle
                    badge="Featured Products"
                    title="Our Best Selling Frames"
                    description="Explore our premium eyewear collection designed for comfort and style."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>

            </Container>

        </section>
    );
};

export default FeaturedProducts;