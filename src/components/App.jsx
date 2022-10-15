import ProductCard from "./ProductCard";
import ProductsData from "../data/products";
import Checkout from "./Checkout";
import Summary from "./Summary";
import { useState, useEffect } from "react";
import "../styles/app.css";

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
      <header className="header">
        <div className="container_button_shop">
          <h3>Taller 1</h3>
          <div className="shopping">
            <img src="https://img.icons8.com/material-outlined/24/6C3483/shopping-cart--v1.png"></img>
            <p>{totalProducts} Products</p>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="container">
          <div className="list_products">
            {ProductsData.map((productData) => (
              <ProductCard
                key={productData.id}
                product={productData}
                productsCheckout={productsCheckout}
                setProductsCheckout={setProductsCheckout}
              />
            ))}
          </div>
        </section>
        <hr></hr>
        <section className="container">
          <div className="container_summary">
            <Checkout
              setProductsCheckout={setProductsCheckout}
              productsCheckout={productsCheckout}
            />
            <Summary summary={summary} setSummary={setSummary} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
