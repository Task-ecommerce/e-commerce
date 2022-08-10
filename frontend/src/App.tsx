import './App.css';
import FeaturedProduct from './components/FeaturedProduct';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar title="Bejamas" />
      <FeaturedProduct />
      <ProductList />
    </div>
  );
}

export default App;
