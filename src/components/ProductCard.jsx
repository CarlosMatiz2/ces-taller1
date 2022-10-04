import ProductImage from "./ProductImage";
import ProductAddToCard from "./ProductAddToCard";
import ProductInfo from "./ProductInfo";

function ProductCard({ product }) {
  return (
    <div>
      <ProductImage url={product.url} />
      <ProductInfo nombre={product.nombre} precio={product.precio} />
      <ProductAddToCard />
    </div>
  );
}

export default ProductCard;
