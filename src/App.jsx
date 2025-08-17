import { Route, Routes } from 'react-router-dom'
import './App.css'
import AppNavbar from "./components/NavBar"
import HomePage from "./components/HomePage"

function App() {

  return (
    <div className='mx-3'>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
