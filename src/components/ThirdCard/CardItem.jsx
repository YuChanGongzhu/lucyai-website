import styles from "./ThirdCard.module.css";
const CardItem = ({ item }) => {
  return (
    <div className={styles["card-item"]}>
      <div className={styles["card-item-title"]}>
        <img src={item.icon} alt="icon" />
        <div>{item.title}</div>
      </div>
      <div className={styles["card-item-content"]}>{item.content}</div>
    </div>
  );
};

export default CardItem;
