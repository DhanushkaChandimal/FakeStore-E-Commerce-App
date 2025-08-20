import { useNavigate } from "react-router-dom";
import "../styles/product.css";
import Card from "react-bootstrap/Card";

const Product = ({productDetails}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/products/${productDetails.id}`);
    }

    return (
        <Card className="product-card" onClick={() => handleClick()}>
            <Card.Img variant="top" src={productDetails.image} className="product-image p-2"/>
            <Card.Body>
                <Card.Title>${productDetails.price}</Card.Title>
                <Card.Title className="title">{productDetails.title}</Card.Title>
                <Card.Text className="description">{productDetails.description}</Card.Text>
            </Card.Body>
        </Card>
  );
}

export default Product