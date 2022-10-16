import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

function ProductCheckout({ product, setProductsCheckout, productsCheckout }) {
  console.log(product);
  return (
    <>
      <div className="container_product_card container_product_card--checkout">
        <div>
          <ProductImage url={product.url} />
        </div>
        <div className="product_info">
          <ProductInfo nombre={product.nombre} precio={product.precio} />
          <input
            type="number"
            name="quantity"
            id="quantity"
            min="0"
            className="quantity_checkout"
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
        </div>
      </div>
    </>
  );
}

export default ProductCheckout;
