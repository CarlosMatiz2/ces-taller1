import ProductCard from "../components/ProductCard";
import ProductsData from "../data/products";

function App() {
  return (
    <>
      {ProductsData.map((productData) => (
        <ProductCard key={productData.id} product={productData} />
      ))}
    </>
  );
}

export default App;
