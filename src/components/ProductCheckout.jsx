function ProductCheckout({ product, setProductsCheckout, productsCheckout }) {
  return (
    <>
      <p>{product.nombre}</p>
      <input
        type="number"
        name="quantity"
        id="quantity"
        min="1"
        onChange={(e) => {
          product.cantidad_agregada = Number(e.target.value);
          const updateProductCheckout = productsCheckout.map((item) => {
            if (item.id === product.id) {
              return product;
            }
            return item;
          });
          setProductsCheckout(updateProductCheckout);
        }}
        max={product.cantidad_disponible}
        value={product.cantidad_agregada}
      />
    </>
  );
}

export default ProductCheckout;
