import './ProductGrid.css';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <div className="product-image">{product.id}</div>
      <h3 className="product-title">{product.title}</h3>
      <p className="product-desc">{product.desc}</p>
      <div className="product-price">{product.price}</div>
    </div>
  );
};

export default ProductItem;