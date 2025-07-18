import React from "react";
import "./Button.css";

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
  const buttonClass = `
    custom-button 
    custom-button--${variant} 
    custom-button--${size} 
    ${animated ? "custom-button--animated" : ""}
    ${disabled ? "custom-button--disabled" : ""} 
    ${className}
  `.trim();

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
      <span className="custom-button__text">{children}</span>
    </button>
  );
};

export default Button;
