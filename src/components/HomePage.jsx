import '../styles/home-page.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const goToProducts = () => {
        navigate("/products");
    };

    return (
        <div className='d-flex flex-column align-items-center'>
            <Carousel className='carousel'>
                <Carousel.Item>
                    <img className="d-block w-100" src="../hero-shopping.jpg" alt="First slide"/>
                    <Carousel.Caption className='text-primary'>
                        <h2>Welcome to Our Store</h2>
                        <p>Discover the latest trends and best deals</p>
                        <Button variant="light" size="lg" onClick={goToProducts}>Shop Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src="../hero-clothing.jpg" alt="Second slide" />
                    <Carousel.Caption>
                        <h2>Style Meets Comfort</h2>
                        <p>Handpicked fashion collections just for you</p>
                        <Button variant="light" size="lg" onClick={goToProducts}>Shop Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src="../hero-electronics.jpg" alt="Third slide" />
                    <Carousel.Caption>
                        <h2>Smart Choices</h2>
                        <p className='text-dark'>Latest gadgets at unbeatable prices</p>
                        <Button variant="light" size="lg" onClick={goToProducts}>Shop Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container className="mt-5">
                <h2 className="text-center mb-4">Featured Products</h2>
                <Row>
                    {[
                        { id: 1, name: "Stylish Watch", img: "../featured-watches.jpg" },
                        { id: 2, name: "Trendy Shoes", img: "../featured-shoes.jpg" },
                        { id: 3, name: "Smartphone", img: "../featured-smartphones.jpg" },
                    ].map((product) => (
                        <Col key={product.id} className="mb-4">
                            <Card className="shadow-sm h-100">
                                <Card.Img variant="top" src={product.img} />
                                <Card.Body className="text-center">
                                    <Card.Title>{product.name}</Card.Title>
                                    <Button variant="primary" onClick={goToProducts}>View More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default HomePage
