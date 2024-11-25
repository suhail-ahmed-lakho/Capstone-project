import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store'; // Import your Redux store

// Create a root for rendering the application
createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Wrap App with Provider to pass the store */}
    <App /> {/* Main application component */}
  </Provider>
);