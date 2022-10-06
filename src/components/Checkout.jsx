import ProductCheckout from "./ProductCheckout";

function Checkout({ setProductsCheckout, productsCheckout }) {
  return (
    <div>
      <h1>Checkout</h1>
      {productsCheckout.map((product) => (
        <ProductCheckout
          key={product.id}
          product={product}
          setProductsCheckout={setProductsCheckout}
          productsCheckout={productsCheckout}
        />
      ))}
    </div>
  );
}

export default Checkout;
