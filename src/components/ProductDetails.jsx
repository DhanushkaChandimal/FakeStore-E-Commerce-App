import axios from "axios";
import "../styles/product-details.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                console.log("Fetched product:", response.data);
                setProduct(response.data);
            })
            .catch(error => {
                console.error("Error fetching product:", error);
            });
    }, [id]);

    return (
        <div>
            <h2 className="text-center">Product Details</h2>
            {product ? (
                <div className="product-details">
                    <img src={product.image} alt={product.title} />
                    <div>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Category: {product.category}</p>
                        <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                        {/* add rating as stars filled according to exact percentage as images */}
                        <div className="rating-stars">
                            {[...Array(Math.floor(product.rating.rate))].map((_, index) => (
                                <img key={index} src="../star.png" alt="Filled Star" />
                            ))}
                            {product.rating.rate % 1 !== 0 && (
                                <img src="/half-star.png" alt="Half Filled Star" />
                            )}
                            {[...Array(5 - Math.ceil(product.rating.rate))].map((_, index) => (
                                <img key={index} src="../empty-star.png" alt="Empty Star" />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
}

export default ProductDetails;