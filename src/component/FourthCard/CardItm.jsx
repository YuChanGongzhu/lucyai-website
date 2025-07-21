import "./FourthCard.css";

const CardItm = ({ item }) => {
  return (
    <div className="fourth-card-item">
      <div className="card-item-header">
        <div className="card-item-badge">NEW</div>
        <div className="card-item-icon">
          <img src={item.icon} alt={item.title} />
        </div>
      </div>

      <div className="card-item-body">
        <h3 className="card-item-title">{item.title}</h3>

        <div className="card-item-stats">
          {item.stats.map((stat, index) => (
            <div key={index} className="fourth-card-stat-item">
              <span className="fourth-card-stat-label">• {stat.label}：</span>
              <span className="fourth-card-stat-value">{stat.value}</span>
            </div>
          ))}
        </div>

        <p className="card-item-description">{item.description}</p>
      </div>
    </div>
  );
};

export default CardItm;
