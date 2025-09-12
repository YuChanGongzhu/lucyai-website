import React from "react";
import styles from "./FifthCard.module.css";

const CardItem = ({ data }) => {
  const { title, subtitle, description, stats, images, type, icon, id } = data;

  return (
    <div className={styles["card-item-wrapper"]}>
      {/* 左侧内容区域 */}
      <div className={styles["card-content-section"]}>
        <div className={styles["card-header"]}>
          <div className={styles["card-title"]}>{title}</div>
          {subtitle && (
            <div className={styles["card-subtitle"]}>
              <img src={icon} alt="icon" />
              <p>{subtitle}</p>
            </div>
          )}
        </div>
        <div className={styles["card-description"]}>{description}</div>
        {/* 统计数据网格 */}
        <div className={styles["stats-grid"]}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${
                id === 3 ? styles["fifth-card-stat-item-id3"] : styles["fifth-card-stat-item"]
              } ${id === 3 ? "" : styles[`fifth-card-stat-item${index + 1}`]}`}
            >
              <div className={styles["fifth-card-stat-value"]}>{stat.value}</div>
              <div className={styles["fifth-card-stat-label"]}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 右侧图片展示区域 */}
      {type === "incline" ? (
        <div className={styles["card-images-section-incline"]}>
          <div className={styles["images-grid-incline"]}>
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className={`${styles["image-item-incline"]} ${
                    styles[`image-incline-${index + 1}`]
                  }`}
                >
                  <img src={image} className={styles["incline-image"]} />
                </div>
              );
            })}
          </div>
        </div>
      ) : type === "incline2" ? (
        <div className={styles["card-images-section-incline2"]}>
          <div className={styles["images-grid-incline2"]}>
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className={`${styles["image-item-incline2"]} ${
                    styles[`image-incline2-${index + 1}`]
                  }`}
                >
                  <img src={image} className={styles["incline-image2"]} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className={styles["card-images-section"]}>
          <div className={styles["images-grid"]}>
            {images.map((image, index) => {
              return (
                <div key={index} className={styles["image-item"]}>
                  <img src={image} className={styles["normal-image"]} />
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
