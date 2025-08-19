import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import AppNavbar from "./components/NavBar"
import HomePage from "./components/HomePage"
import ProductList from "./components/ProductList"
import AddProduct from "./components/AddProduct"
import ProductDetails from "./components/ProductDetails"
import ToastMessage from './components/ToastMessage'

function App() {

  const [productList, setProductList] = useState([])
  const [showToastMessage, setShowToastMessage] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  return (
    <div className='mx-3'>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductList
          productList={productList}
          setProductList={setProductList}
        />}/>
        <Route path="/add-product" element={<AddProduct/>}/>
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
