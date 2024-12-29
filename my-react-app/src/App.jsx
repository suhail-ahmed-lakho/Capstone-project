import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Shops from './Pages/Shops.jsx';
import Home from './Pages/Home.jsx';
import PrimarySearchAppBar from './components/Header.jsx';
import Offers from './Pages/Offers.jsx';
import Contact from './Pages/Contact.jsx';
import Pages from './Pages/Pages.jsx';
import EditProfile from './components/EditProfile';
import UserProfile from './components/UserProfile.jsx';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Checkout from './Pages/Checkout.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  
  return children;
};

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
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<ErrorPage />} />
        
        {/* Protected Routes */}
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/edit-profile" 
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;