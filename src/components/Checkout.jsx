import ProductCheckout from "./ProductCheckout";

function Checkout({ setProductsCheckout, productsCheckout }) {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <hr></hr>
      <div className="products_checkout">
        {productsCheckout.map((product) => (
          <ProductCheckout
            key={product.id}
            product={product}
            setProductsCheckout={setProductsCheckout}
            productsCheckout={productsCheckout}
          />
        ))}
      </div>
    </div>
  );
}

export default Checkout;
