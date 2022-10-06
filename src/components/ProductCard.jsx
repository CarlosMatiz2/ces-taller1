import ProductImage from "./ProductImage";
import ProductAddToCart from "./ProductAddToCart";
import ProductInfo from "./ProductInfo";

function ProductCard({ product, productsCheckout, setProductsCheckout }) {
  return (
    <div>
      <ProductImage url={product.url} />
      <ProductInfo nombre={product.nombre} precio={product.precio} />
      <ProductAddToCart
        product={product}
        productsCheckout={productsCheckout}
        setProductsCheckout={setProductsCheckout}
      />
    </div>
  );
}

export default ProductCard;
