import { FC } from 'react'
import ProductCard from '../cards/ProductCard';

const Products: FC = () => {
    return (
        <div className="products">
            <div className="grid grid-cols-4 gap-3">
                {!!productsData &&
                productsData?.map((product, index) => (
                    <div className="col-lg-3 mb-3" key={index}>
                        <ProductCard 
                            item={product}
                            key={product.id}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products;

const productsData = [
    {
        id: 1,
        slug: "product-1",
        cover: "/images/product-1.webp",
        name: "Barres Céréales Protéines Cacahuètes et Chocolat Noir Sans Gluten EAT NATURAL",
        price: "2700",
        stars: 4,
    },
    {
        id: 2,
        slug: "product-2",
        cover: "/images/product-2.webp",
        name: "Barres Céréales Protéines Cacahuètes et Chocolat Noir Sans Gluten EAT NATURAL",
        price: "2800",
        stars: 4,
    },
    {
        id: 3,
        slug: "product-3",
        cover: "/images/product-3.webp",
        name: "Barres Céréales Protéines Cacahuètes et Chocolat Noir Sans Gluten EAT NATURAL",
        price: "3200",
        stars: 3,
    },
    {
        id: 4,
        slug: "product-4",
        cover: "/images/product-4.webp",
        name: "Barres Céréales Protéines Cacahuètes et Chocolat Noir Sans Gluten EAT NATURAL",
        price: "7600",
        stars: 4,
    },
]