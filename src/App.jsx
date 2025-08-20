import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import AppNavbar from "./components/NavBar"
import HomePage from "./components/HomePage"
import ProductList from "./components/ProductList"
import ManageProduct from "./components/ManageProduct"
import ProductDetails from "./components/ProductDetails"
import ToastMessage from './components/ToastMessage'
import Cart from './components/Cart'
import LoadingIndicator from './components/LoadingIndicator'

function App() {

  const [productList, setProductList] = useState([])
  const [showToastMessage, setShowToastMessage] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [pageLoading, setPageLoading] = useState(false)
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cartItems');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (productList.length > 0) return; // If productList is already populated, skip fetching
    setPageLoading(true);
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
      console.log(response.data);
      // console.log(response.data[0]);
      setProductList(response.data);
    })
    .catch(error => {
      console.log("Error fetching form data. Please contact an admin. " + error)
    })
    .finally(() => {
      setPageLoading(false);
    });
  }, [setProductList, productList.length]);

  return (
    <div className='mx-3'>
      <AppNavbar cartItems={cartItems} />
      {pageLoading && <LoadingIndicator />}
      <Routes>
        <Route path="/" element={<HomePage/>}/>

        <Route path="/products" element={<ProductList
          productList={productList}
        />}/>

        <Route path="/add-product" element={<ManageProduct
          productList={productList}
          setProductList={setProductList}
          setToastMessage={setToastMessage}
          setShowToastMessage={setShowToastMessage}
          setPageLoading={setPageLoading}
        />}/>

        <Route path="/edit-product/:id" element={<ManageProduct
          productList={productList}
          setProductList={setProductList}
          setToastMessage={setToastMessage}
          setShowToastMessage={setShowToastMessage}
          setPageLoading={setPageLoading}
        />}/>

        <Route path="/products/:id" element={<ProductDetails
          productList={productList}
          setProductList={setProductList}
          setToastMessage={setToastMessage}
          setShowToastMessage={setShowToastMessage}
          setCartItems={setCartItems}
          cartItems={cartItems}
          setPageLoading={setPageLoading}
        />}/>

        <Route path="/cart" element={<Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
        />}/>
      </Routes>
      {showToastMessage && <ToastMessage setShowToastMessage={setShowToastMessage} message={toastMessage} />}
    </div>
  )
}

export default App
