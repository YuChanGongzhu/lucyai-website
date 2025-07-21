import "./ProductGrid.css";

const ProductItem = ({ feature }) => {
  const getCardClass = () => {
    switch (feature.type) {
      case "wide-card":
        return "product-item product-item--wide";
      case "image-card-right":
        return "product-item product-item--image-right";
      default:
        return "product-item";
    }
  };

  //default 就默认原生样式，wide-card 就宽卡片样式，image-card-right 右边带图片的卡片样式
  return (
    <div className={getCardClass()}>
      {feature.type === "wide-card" && (
        <div className="wide-card-content">
          <div style={{ flex: 1, height: "100%" }}>
            <div className="product-icon">{feature.icon}</div>
            <h3 className="product-title">{feature.title}</h3>
            <p className="product-desc">{feature.desc}</p>
          </div>

          <div className="wide-card-logobox">
            <img src={feature.img} alt="lucyAI" style={{ width: "93px", height: "73px" }} />
          </div>
        </div>
      )}

      {feature.type === "image-card-right" && (
        <div className="image-card-right-content">
          <div className="text-content">
            <div className="product-icon">{feature.icon}</div>
            <h3 className="product-title">{feature.title}</h3>
            <p className="product-desc">{feature.desc}</p>
          </div>
          <div className="product-image-placeholder">
            <img src={feature.img} alt="lucyAI" style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      )}

      {feature.type === "default" && (
        <>
          <div className="product-icon">{feature.icon}</div>
          <h3 className="product-title">{feature.title}</h3>
          <p className="product-desc">{feature.desc}</p>
        </>
      )}
    </div>
  );
};

export default ProductItem;
