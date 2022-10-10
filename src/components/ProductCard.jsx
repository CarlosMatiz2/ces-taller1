import ProductImage from "./ProductImage";
import ProductAddToCart from "./ProductAddToCart";
import ProductInfo from "./ProductInfo";

function ProductCard({ product, productsCheckout, setProductsCheckout }) {
  return (
    <div className="container_product_card">
      <div>
        <ProductImage url={product.url} />
      </div>
      <div className="product_info">
        <ProductInfo nombre={product.nombre} precio={product.precio} />
        <ProductAddToCart
          product={product}
          productsCheckout={productsCheckout}
          setProductsCheckout={setProductsCheckout}
        />
      </div>
    </div>
  );
}

export default ProductCard;
