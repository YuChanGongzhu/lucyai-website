import FeatureItem from './FeatureItem';
import './FeatureGrid.css';

const features = [
  {
    id: 1,
    title: '快充技术',
    desc: '67W有线快充'
  },
  {
    id: 2,
    title: '影像系统',
    desc: '徕卡专业光学镜头'
  },
  {
    id: 3,
    title: '散热技术',
    desc: '液冷散热系统'
  },
  {
    id: 4,
    title: '屏幕技术',
    desc: 'AMOLED 2K屏'
  }
];

const FeatureGrid = () => {
  return (
    <div className="feature-grid">
      {features.map(feature => (
        <FeatureItem key={feature.id} feature={feature} />
      ))}
    </div>
  );
};

export default FeatureGrid;