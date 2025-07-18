import './FeatureGrid.css';

const FeatureItem = ({ feature }) => {
  return (
    <div className="feature-item">
      <h3>{feature.title}</h3>
      <p>{feature.desc}</p>
    </div>
  );
};

export default FeatureItem;