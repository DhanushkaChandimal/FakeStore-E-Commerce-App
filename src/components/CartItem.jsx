import "../styles/cart.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CartItem = ({ product, onRemove }) => {

    return (
        <Card className="d-flex flex-row align-items-center justify-content-between pe-3 cart-item">
            <Card.Body className="d-flex align-items-center gap-4">
                <Card.Img variant="top" src={product.image} className="cart-image"/>
                <Card.Text className="title">{product.title}</Card.Text>
            </Card.Body>
            <Card.Title className="me-2">${product.price}</Card.Title>
            <Button onClick={() => onRemove(product.id)} className="ms-auto">Remove</Button>
        </Card>
  );
}

export default CartItem