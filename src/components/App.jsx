import ProductCard from "./ProductCard";
import ProductsData from "../data/products";
import Checkout from "./Checkout";
import { useState } from "react";

function App() {
  const [productsCheckout, setProductsCheckout] = useState([]);
  return (
    <>
      <Checkout
        setProductsCheckout={setProductsCheckout}
        productsCheckout={productsCheckout}
      />
      {ProductsData.map((productData) => (
        <ProductCard
          key={productData.id}
          product={productData}
          productsCheckout={productsCheckout}
          setProductsCheckout={setProductsCheckout}
        />
      ))}
    </>
  );
}

export default App;
