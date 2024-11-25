import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import About from './Pages/About.jsx'
import Home from './Pages/Home.jsx'
import Products from './Pages/Products.jsx'
import ProductDetails from './Pages/ProductDetails.jsx'
import PrimarySearchAppBar from './components/Header.jsx'

function App() {
  

  return (
    <Router>
      <PrimarySearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  )
}

export default App
