import axios from "axios";
import "../styles/product-details.css"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ConfirmationModal from "./ConfirmationModal";

const ProductDetails = ({
        productList,
        setProductList,
        setToastMessage,
        setShowToastMessage,
        setCartItems,
        cartItems,
        setPageLoading,
        setToastType
    }) => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setPageLoading(true);
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch((error) => {
                setToastMessage("Error fetching product. Please try again later.");
                setToastType("error");
                setShowToastMessage(true);
                console.error("Error fetching product:", error);
            })
            .finally(() => {
                setPageLoading(false);
            });
    }, [id, setPageLoading, setToastMessage, setShowToastMessage, setToastType]);

    const handleDeleteProduct = (productId) => {
        setPageLoading(true);
        axios.delete(`https://fakestoreapi.com/products/${productId}`)
        .then(response => {
            setProductList(productList.filter(product => product.id !== productId));
            navigate('/products');
            setToastMessage(`${response.data.title} deleted successfully!`);
            setToastType("success");
            setShowToastMessage(true);
            setShowConfirmationModal(false);
        })
        .catch((error) => {
            setToastMessage("Error deleting product. Please try again later.");
            setToastType("error");
            setShowToastMessage(true);
            console.error("Error deleting product:", error);
        })
        .finally(() => {
            setPageLoading(false);
        });
    };

    const handleEditProduct = (productId) => {
        try {
            navigate(`/edit-product/${productId}`);
        } catch {
            setToastMessage("Navigation failed. Please try again.");
            setToastType("error");
            setShowToastMessage(true);
        }
    };

    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
        setToastMessage(`${product.title} added to cart!`);
        setShowToastMessage(true);
    };

    return (
        <div>
            <h2 className="text-center">Product Details</h2>
            {showConfirmationModal && (
                <ConfirmationModal
                    message="Are you sure you want to delete this product?"
                    showConfirmationModal={showConfirmationModal}
                    onClose={() => setShowConfirmationModal(false)}
                    onConfirm={() => handleDeleteProduct(product.id)}
                />
            )}
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
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        <button onClick={() => handleEditProduct(product.id)}>Edit Product</button>
                        <button onClick={() => setShowConfirmationModal(true)}>Delete Product</button>
                    </div>
                </div>
            ) : (
                <p className="text-center mt-4">Product not found</p>
            )}
        </div>
    );
}

export default ProductDetails;