import React from "react";
import styles from "./Button.module.css";

const Button = ({
  children,
  width = "8.25rem",
  height = "3rem",
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  animated = true, // 新增动画控制属性
  className = "",
  style = {},
  ...props
}) => {
  const buttonClass = [
    styles["custom-button"],
    styles[`custom-button--${variant}`],
    styles[`custom-button--${size}`],
    animated ? styles["custom-button--animated"] : "",
    disabled ? styles["custom-button--disabled"] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const buttonStyle = {
    width,
    height,
    ...style,
  };

  return (
    <button
      className={buttonClass}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span className={styles["custom-button__text"]}>{children}</span>
    </button>
  );
};

export default Button;
