import "../styles/product.css";
import Card from "react-bootstrap/Card";

const Product = ({productDetails}) => {

    // console.log(productDetails)

    return (
        <Card className="card">
            <Card.Img variant="top" src={productDetails.image} className="product-image"/>
            <Card.Body>
                <Card.Title>${productDetails.price}</Card.Title>
                <Card.Title className="title">{productDetails.title}</Card.Title>
                <Card.Text className="description">{productDetails.description}</Card.Text>
            </Card.Body>
        </Card>
  );
}

export default Product