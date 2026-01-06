import { NavLink } from "react-router-dom"
import { Product } from "../../../utils/api/product/product.type";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "@/components/ui/button";


const ProductCard = ({item}: {item: Product}) => {
    return (
        <div className="product__card">
            <NavLink 
                className="cover__wrapper"
                to={`/produits/${item.slug}`}
            >
                <img 
                    src={item.cover} 
                    alt="cover" 
                />
            </NavLink>
            <div className="card-content p-3">
                <div className="mb-3 price-and-cart">
                    <div className="flex_content justify-content-between">
                        <span className="price">
                            {item.price} XOF
                        </span>
                        {/* <button className="btn btn__cart cart">
                            
                        </button> */}
                        <Button className="btn btn__cart cart">
                            <MdAddShoppingCart />
                        </Button>
                    </div>
                </div>
                <NavLink 
                    className="py-2 product__name"
                    to={`/produits/${item.slug}`}
                >
                    {item.name}
                </NavLink>
            </div>
        </div>
    )
};

export default ProductCard;