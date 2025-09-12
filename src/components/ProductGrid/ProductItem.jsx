import styles from "./ProductGrid.module.css";

const ProductItem = ({ feature }) => {
  const getCardClass = () => {
    switch (feature.type) {
      case "wide-card":
        return `${styles["product-item"]} ${styles["product-item--wide"]}`;
      case "image-card-right":
        return `${styles["product-item"]} ${styles["product-item--image-right"]}`;
      default:
        return styles["product-item"];
    }
  };

  //default 就默认原生样式，wide-card 就宽卡片样式，image-card-right 右边带图片的卡片样式
  return (
    <div className={getCardClass()}>
      {feature.type === "wide-card" && (
        <div className={styles["wide-card-content"]}>
          <div style={{ flex: 1, height: "100%" }}>
            <div className={styles["product-icon"]}>{feature.icon}</div>
            <h3 className={styles["product-title"]}>{feature.title}</h3>
            <p className={styles["product-desc"]}>{feature.desc}</p>
          </div>

          <div className="wide-card-logobox">
            <img src={feature.img} alt="lucyAI" style={{ width: "93px", height: "73px" }} />
          </div>
        </div>
      )}

      {feature.type === "image-card-right" && (
        <div className={styles["image-card-right-content"]}>
          <div className={styles["text-content"]}>
            <div className={styles["product-icon"]}>{feature.icon}</div>
            <h3 className={styles["product-title"]}>{feature.title}</h3>
            <p className={styles["product-desc"]}>{feature.desc}</p>
          </div>
          <div className={styles["product-image-placeholder"]}>
            <img src={feature.img} alt="lucyAI" style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      )}

      {feature.type === "default" && (
        <>
          <div className={styles["product-icon"]}>{feature.icon}</div>
          <h3 className={styles["product-title"]}>{feature.title}</h3>
          <p className={styles["product-desc"]}>{feature.desc}</p>
        </>
      )}
    </div>
  );
};

export default ProductItem;
