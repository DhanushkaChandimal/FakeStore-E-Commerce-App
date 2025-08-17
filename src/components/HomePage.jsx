import '../styles/home-page.css'
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
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
        </div>
    );
};

export default HomePage
