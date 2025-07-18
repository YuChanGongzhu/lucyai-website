import { useState, useEffect, useCallback, useRef } from "react";
import Header from "./component/Header/Header";
import FullScreenSection from "./component/FullScreenSection/FullScreeenSection";
import ProductGrid from "./component/ProductGrid/ProductGrid";
import FeatureGrid from "./component/FeaturedGord/FeatureGrid";
import "./App.css";
import backgroundImg from "./assets/bg.svg";
import Button from "./component/Button/Button";
function App() {
  const sectionsRef = useRef([]);
  const ticking = useRef(false);

  // 节流滚动事件处理
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        let currentSection = 0;
        const windowHeight = window.innerHeight;

        sectionsRef.current.forEach((section, index) => {
          if (section) {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight / 2) {
              currentSection = index;
            }
          }
        });

        setActiveSection(currentSection);
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    // 缓存section元素
    sectionsRef.current = Array.from(document.querySelectorAll(".full-screen-section"));

    // 使用passive监听器提升性能
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // 滚动到指定区域
  const scrollToSection = useCallback((index) => {
    if (sectionsRef.current[index]) {
      sectionsRef.current[index].scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <FullScreenSection backgroundColor="#D6DDED" className="hero-section">
          <img src={backgroundImg} alt="background" className="background-img" />

          <div className="first-section">
            <div className="main-title">开启确定性增长新时代：</div>
            <div className="brand-title">LucyAI 全自动AI营销系统</div>
            <div className="description">
              集AI获客、智能客服、转化裂变于一体，构建企业私域高效增长闭环
              <br />
              已有500+企业接入，平均转化率提升300%
            </div>
            <Button width="20rem" height="5rem" variant="primary" size="medium">
              立即探索
            </Button>
          </div>
        </FullScreenSection>

        <FullScreenSection backgroundColor="#fff">
          <div className="second-section">
            <h2>LucyAI能为你做什么</h2>
            <ProductGrid />
          </div>
        </FullScreenSection>

        <FullScreenSection backgroundColor="#f9f9f9">
          <div className="core-technology">
            <h2>核心技术</h2>
            <FeatureGrid />
          </div>
        </FullScreenSection>

        <FullScreenSection backgroundColor="#fff">
          <h2>加入小米社区</h2>
          <div className="community-content">
            <div className="community-placeholder">社区互动区域</div>
            <p>与数百万米粉一起探索科技的乐趣，获取最新产品资讯，参与独家活动。</p>
          </div>
        </FullScreenSection>
      </main>
    </div>
  );
}

export default App;
