// ProductGrid.jsx
import ProductItem from './ProductItem';
import './ProductGrid.css';

const products = [
  {
    id: 1,
    title: '小米手机13',
    desc: '旗舰性能，卓越体验',
    price: '¥3999起'
  },
  {
    id: 2,
    title: 'Redmi K60',
    desc: '性价比之王',
    price: '¥2499起'
  },
  {
    id: 3,
    title: '小米平板6',
    desc: '生产力工具',
    price: '¥1999起'
  },
  {
    id: 4,
    title: '小米手表S2',
    desc: '健康生活伴侣',
    price: '¥999起'
  }
];

const ProductGrid = () => {
  return (
    <div className="product-grid-container">
      <div className="product-grid">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

