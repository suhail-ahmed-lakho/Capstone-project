import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Provider } from 'react-redux';
import store from './store'; // Updated import path to match your store location

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);