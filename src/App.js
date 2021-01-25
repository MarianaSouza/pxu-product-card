import ProductList from './components/ProductList';
import './css/main.scss';
import products from "./shared-data/products.json";

function App() {
  return (
    <ProductList products={products} />
  );
}

export default App;
