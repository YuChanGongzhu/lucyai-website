import styles from "./FourthCard.module.css";

const CardItem = ({ item }) => {
  return (
    <div className={styles["fourth-card-item"]}>
      <div className={styles["card-item-header"]}>
        <div className={styles["card-item-badge"]}>NEW</div>
        <div className={styles["card-item-icon"]}>
          <img src={item.icon} alt={item.title} />
        </div>
      </div>

      <div className={styles["card-item-body"]}>
        <h3 className={styles["card-item-title"]}>{item.title}</h3>

        <div className={styles["card-item-stats"]}>
          {item.stats.map((stat, index) => (
            <div key={index} className={styles["fourth-card-stat-item"]}>
              <span className={styles["fourth-card-stat-label"]}>• {stat.label}：</span>
              <span className={styles["fourth-card-stat-value"]}>{stat.value}</span>
            </div>
          ))}
        </div>

        <p className={styles["card-item-description"]}>{item.description}</p>
      </div>
    </div>
  );
};

export default CardItem;
