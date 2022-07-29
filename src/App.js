
import './App.css';
import ProductListing from './features/ProductListing'
import ProductDetails from './features/ProductDetails';
import Header from './features/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
