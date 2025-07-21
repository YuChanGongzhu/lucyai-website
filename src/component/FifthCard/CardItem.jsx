import React from "react";

const CardItem = ({ data }) => {
  const { title, subtitle, description, stats, images, type, icon, id } = data;

  return (
    <div className={`card-item-wrapper`}>
      {/* 左侧内容区域 */}
      <div className="card-content-section">
        <div className="card-header">
          <div className="card-title">{title}</div>
          {subtitle && (
            <div className="card-subtitle">
              <img src={icon} alt="icon" />
              <p>{subtitle}</p>
            </div>
          )}
        </div>
        <div className="card-description">{description}</div>
        {/* 统计数据网格 */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${id === 3 ? "fifth-card-stat-item-id3" : "fifth-card-stat-item"} ${
                id === 3 ? "" : `fifth-card-stat-item${index + 1}`
              }`}
            >
              <div className="fifth-card-stat-value">{stat.value}</div>
              <div className="fifth-card-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 右侧图片展示区域 */}
      {type === "incline" ? (
        <div className="card-images-section-incline">
          <div className="images-grid-incline">
            {images.map((image, index) => {
              return (
                <div key={index} className={`image-item-incline image-incline-${index + 1}`}>
                  <img src={image} className={`incline-image`} />
                </div>
              );
            })}
          </div>
        </div>
      ) : type === "incline2" ? (
        <div className="card-images-section-incline2">
          <div className="images-grid-incline2">
            {images.map((image, index) => {
              return (
                <div key={index} className={`image-item-incline2 image-incline2-${index + 1}`}>
                  <img src={image} className={`incline-image2`} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="card-images-section">
          <div className="images-grid">
            {images.map((image, index) => {
              return (
                <div key={index} className={`image-item`}>
                  <img src={image} className={`normal-image`} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardItem;
