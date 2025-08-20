import "../styles/cart.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CartItem = ({ product, onRemove }) => {

    return (
        <Card className="d-flex flex-row align-items-center justify-content-between pe-3">
            <Card.Body className="d-flex align-items-center gap-4">
                <Card.Img variant="top" src={product.image} className="cart-image"/>
                <Card.Title className="title">{product.title}</Card.Title>
                <Card.Title>${product.price}</Card.Title>
            </Card.Body>
            <Button onClick={() => onRemove(product.id)} className="ms-auto">Remove</Button>
        </Card>
  );
}

export default CartItem