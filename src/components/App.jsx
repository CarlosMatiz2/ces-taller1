import ProductCard from "./ProductCard";
import ProductsData from "../data/products";
import Checkout from "./Checkout";
import Summary from "./Summary";
import { useState, useEffect } from "react";

function App() {
  const [productsCheckout, setProductsCheckout] = useState([]);
  const [summary, setSummary] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    console.log("Se agregó un producto al checkout");
    const total = productsCheckout.reduce((accumulator, value) => {
      return accumulator + value.precio * value.cantidad_agregada;
    }, 0);
    setSummary(total);
    const totalProduct = productsCheckout.reduce((accumulator, value) => {
      return accumulator + value.cantidad_agregada;
    }, 0);
    setTotalProducts(totalProduct);
  }, [productsCheckout]);

  return (
    <>
      <p>Falta por hacer: 1. Input de cupones 2. Hacerlo bonito</p>
      <p>Total products: {totalProducts}</p>
      <Summary summary={summary} />
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
