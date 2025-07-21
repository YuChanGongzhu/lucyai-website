import "./ThirdCard.css";
const CardItem = ({ item }) => {
  return (
    <div className="card-item">
      <div className="card-item-title">
        <img src={item.icon} alt="icon" />
        <div>{item.title}</div>
      </div>
      <div className="card-item-content">{item.content}</div>
    </div>
  );
};

export default CardItem;
