function ProductAddToCart({ product, productsCheckout, setProductsCheckout }) {
  return (
    <>
      <button
        onClick={() => {
          if (productsCheckout.length === 0) {
            setProductsCheckout([
              {
                ...product,
                cantidad_agregada: 1 || 1,
              },
            ]);
          } else {
            let findItem = productsCheckout.find(
              (item) => item.id === product.id
            );
            if (!findItem) {
              return setProductsCheckout([
                ...productsCheckout,
                {
                  ...product,
                  cantidad_agregada: 1 || 1,
                },
              ]);
            }
            findItem.cantidad_agregada = findItem.cantidad_agregada + 1 || 1;
            if (findItem.cantidad_agregada <= findItem.cantidad_disponible) {
              const newProductsCheckout = productsCheckout.map((item) => {
                if (item.id === product.id) {
                  return findItem;
                }
                return item;
              });
              setProductsCheckout(newProductsCheckout);
            }
          }
        }}
      >
        Add To Cart
      </button>
    </>
  );
}

export default ProductAddToCart;
