import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Shops from './Pages/Shops.jsx'
import Home from './Pages/Home.jsx'
import PrimarySearchAppBar from './components/Header.jsx'
import Faq from './Pages/Pages.jsx'
import Offers from './Pages/Offers.jsx'
import Contact from './Pages/Contact.jsx'
import Pages from './Pages/Pages.jsx'

function App() {
  

  return (
    <Router>
      <PrimarySearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App;
