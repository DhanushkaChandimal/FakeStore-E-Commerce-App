import axios from "axios";
import { useEffect } from "react"
import Product from "./Product"

const ProductList = ({ productList, setProductList }) => {
    useEffect(() => {
        if (productList.length > 0) return; // If productList is already populated, skip fetching
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            // console.log(response.data);
            // console.log(response.data[0]);
            setProductList(response.data);
        })
        .catch(error => {
            console.log("Error fetching form data. Please contact an admin. " + error)
        });
    }, [setProductList, productList.length]);

    return (
        <div>
            <h1 className="text-center">Products</h1>
            <div className="d-flex flex-wrap gap-3">
                {productList.map((item) => {
                    return <Product key={item.id} productDetails = {item}/>
                })}
            </div>
        </div>
    )
}

export default ProductList