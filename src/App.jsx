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

function App() {

  const [productList, setProductList] = useState([])
  const [showToastMessage, setShowToastMessage] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  useEffect(() => {
    if (productList.length > 0) return; // If productList is already populated, skip fetching
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
      console.log(response.data);
      // console.log(response.data[0]);
      setProductList(response.data);
    })
    .catch(error => {
      console.log("Error fetching form data. Please contact an admin. " + error)
    });
  }, [setProductList, productList.length]);

  return (
    <div className='mx-3'>
      <AppNavbar />
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
        />}/>
        <Route path="/edit-product/:id" element={<ManageProduct
          productList={productList}
          setProductList={setProductList}
          setToastMessage={setToastMessage}
          setShowToastMessage={setShowToastMessage}
        />}/>
        <Route path="/products/:id" element={<ProductDetails
          productList={productList}
          setProductList={setProductList}
          setToastMessage={setToastMessage}
          setShowToastMessage={setShowToastMessage}
        />}/>
      </Routes>
      {showToastMessage && <ToastMessage setShowToastMessage={setShowToastMessage} message={toastMessage} />}
    </div>
  )
}

export default App
