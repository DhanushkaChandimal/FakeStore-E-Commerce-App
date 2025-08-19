import axios from "axios";
import "../styles/product-details.css"
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const ProductDetails = ({ productList, setProductList, setToastMessage, setShowToastMessage }) => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

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

    const handleDeleteProduct = (productId) => {
        axios.delete(`https://fakestoreapi.com/products/${productId}`)
        .then(response => {
            console.log("Product deleted:", response.data);
            setProductList(productList.filter(product => product.id !== productId));
            navigate('/products');
            setToastMessage(`${response.data.title} deleted successfully!`);
            setShowToastMessage(true);
        })
        .catch(error => {
            console.error("Error deleting product:", error);
        });
    };

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
                        <button>Add to Cart</button>
                        <button onClick={() => handleDeleteProduct(product.id)}>Delete Product</button>
                    </div>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
}

export default ProductDetails;