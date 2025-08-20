import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/addProduct.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ManageProduct = ({ productList, setProductList, setToastMessage, setShowToastMessage, setPageLoading }) =>{
    const [validated, setValidated] = useState(false);
    const [categories, setCategories] = useState([]);
    const [imgUrl, setImgUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        setPageLoading(true);
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response => {
            setCategories(response.data);
        })
        .catch(error => {
            console.error('Error fetching categories:', error);
        })
        .finally(() => {
            setPageLoading(false);
        });
    }, [setPageLoading]);

    useEffect(() => {
        if(id) {
            const product = productList.find(product => product.id === parseInt(id));
            if (product) {
                setTitle(product.title);
                setDescription(product.description);
                setPrice(product.price);
                setCategory(product.category);
                setImgUrl(product.image);
            }
        }
    }, [id, productList]);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }else if(id) {
            setPageLoading(true);
            axios.put(`https://fakestoreapi.com/products/${id}`, {
                title: title,
                price: price,
                description: description,
                image: imgUrl ? imgUrl : '../image-not-found.jpg',
                category: category,
            })
            .then((res) =>{
                console.log(res.data)
                const updatedProductList = productList.map(product =>
                    product.id === parseInt(id) ? res.data : product
                );
                setProductList(updatedProductList);
                setToastMessage("Product updated successfully!");
                navigate('/products');
                setShowToastMessage(true);
            })
            .catch((error) =>{
                console.error("Error updating product:", error)
            });
            setPageLoading(false);
        }else{
            setPageLoading(true);
            axios.post("https://fakestoreapi.com/products", {
                title: title,
                price: price,
                description: description,
                image: imgUrl ? imgUrl : '../image-not-found.jpg',
                category: category,
            })
            .then((res) =>{
                console.log(res.data)
                console.log(productList)
                setProductList([...productList, res.data]);
                setToastMessage("Product added successfully!");
                navigate('/products');
                setShowToastMessage(true);
            })
            .catch((error) =>{
                console.error("Error adding product:", error)
            });
            setPageLoading(false);
        }
        setValidated(true);
    };

    return (
        <div>
            <h2 className="text-center">{id ? "Edit Product" : "Add New Product"}</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                    <Form.Label>Product Title</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Product Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control
                        as={'textarea'}
                        rows={3}
                        required
                        type="text"
                        placeholder="Product Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Price</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control
                            type="number"
                            step="0.01"
                            placeholder="Price"
                            required
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">Please provide a valid price. (e.g., 9.99)</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <Form.Label>Category</Form.Label>
                    <Form.Select required value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Choose...</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Please select a category.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" placeholder="Image URL" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                {imgUrl && (
                    <img className='img-preview' src={imgUrl} alt="Product" />
                )}

                <Button className="mt-3" type="submit">{id ? "Update Product" : "Add Product"}</Button>
            </Form>
        </div>
    );
}

export default ManageProduct;