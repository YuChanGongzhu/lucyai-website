import { useState } from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import logo_purple from "../../assets/lucyAI_logo_purple.png";
import logo_font from "../../assets/LucyAI_Font.png";

const Header = ({ activeSection, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 0, label: "首页" },
    { id: 1, label: "手机" },
    { id: 2, label: "智能硬件" },
    { id: 3, label: "服务" },
    { id: 4, label: "社区" },
  ];

  const handleExploreClick = () => {
    console.log("立即探索按钮被点击");
    // 在这里添加你的点击逻辑
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <img src={logo_purple} alt="logo" className={styles.logoIcon} />
        <img src={logo_font} alt="logo" className={styles.logoFont} />
      </div>

      <Button
        width="8.25rem"
        height="3rem"
        variant="primary"
        size="medium"
        onClick={handleExploreClick}
      >
        立即探索
      </Button>
    </header>
  );
};

export default Header;
