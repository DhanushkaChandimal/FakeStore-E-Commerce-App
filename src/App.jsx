import { Route, Routes } from 'react-router-dom'
import './App.css'
import AppNavbar from "./components/NavBar"
import HomePage from "./components/HomePage"
import ProductList from "./components/ProductList"
import AddProduct from "./components/AddProduct"
import ProductDetails from "./components/ProductDetails"

function App() {

  return (
    <div className='mx-3'>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/add-product" element={<AddProduct/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
