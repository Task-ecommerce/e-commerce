import './App.css';
import FeaturedProduct from './components/FeaturedProduct';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Navbar title="Bejamas" />
      <FeaturedProduct />
      <ProductList />
    </div>
  );
}

export default App;
