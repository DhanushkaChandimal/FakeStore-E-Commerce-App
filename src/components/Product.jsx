import Card from "react-bootstrap/Card";

const Product = ({productDetails}) => {

    console.log(productDetails)

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={productDetails.image} />
            <Card.Body>
                <Card.Title>${productDetails.price}</Card.Title>
                <Card.Title>{productDetails.title}</Card.Title>
                <Card.Text>{productDetails.description}</Card.Text>
            </Card.Body>
        </Card>
  );
}

export default Product