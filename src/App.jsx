import { useState, useEffect, useCallback, useRef } from "react";
import Header from "./component/Header/Header";
import FullScreenSection from "./component/FullScreenSection/FullScreeenSection";
import ProductGrid from "./component/ProductGrid/ProductGrid";
import "./App.css";
import backgroundImg from "./assets/bg.svg";
import CardItemBg from "./assets/CardBg.png";
import Button from "./component/Button/Button";
import ThirdCard from "./component/ThirdCard/ThirdCard";
import FourthCard from "./component/FourthCard/FourthCard";
import FifthCard from "./component/FifthCard/FifthCard";
import ChatImage from "./component/ChatImage/index";
import LearnAbout from "./component/LearnAbout/LearnAbout";
import customer from "./assets/customer.png";
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

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <FullScreenSection backgroundColor="#fafafe" className="hero-section">
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
        <FullScreenSection backgroundColor="#fafafe">
          <div className="second-section">
            <div className="second-section-title">LucyAI能为你做什么</div>
            <ProductGrid />
          </div>
        </FullScreenSection>
        <FullScreenSection backgroundColor="#fafafe">
          <div className="thridCard-section">
            <div className="thridCard-section-first">
              <div className="thridCard-section-first-Topetext">为什么</div>
              <div className="thridCard-section-first-Topetext">选择LuycAI</div>
              <div className="thridCard-section-first-Bottomtext">
                多模型驱动 × 拟人交互 × 全链路闭环构建难
              </div>
              <text className="thridCard-section-first-Bottomtext">以复制的智能营销增长系统</text>
            </div>
            <ThirdCard />
            <div className="thridCard-section-second">
              <div className="thridCard-section-second-text">立即与我们联系</div>
              <div className="thridCard-section-second-text">预约演示吧</div>
              <Button
                width="100%"
                height="3.75rem"
                variant="primary"
                style={{ fontSize: "1.25rem", borderRadius: "12px", marginTop: "1.9375rem" }}
              >
                立即联系
              </Button>
            </div>
          </div>
        </FullScreenSection>
        <FullScreenSection backgroundColor="#fafafe">
          {/* <img src={CardItemBg} alt="CardItemBg" className="CardItemBg" /> */}

          <div className="fourthCard-secion">
            <div className="fourthCard-secion-title">成效立见·数据说话</div>
            <FourthCard />
          </div>
        </FullScreenSection>
        <FullScreenSection backgroundColor="#fafafe">
          <FifthCard order={1} />
        </FullScreenSection>
        <FullScreenSection backgroundColor="#fafafe">
          <FifthCard order={2} />
        </FullScreenSection>
        <FullScreenSection backgroundColor="#fafafe">
          <FifthCard order={3} />
        </FullScreenSection>
        <FullScreenSection backgroundColor="#fafafe">
          <FifthCard order={4} />
        </FullScreenSection>
        <FullScreenSection backgroundColor="#fafafe">
          <FifthCard order={5} />
        </FullScreenSection>
        <FullScreenSection backgroundColor="#fafafe">
          <div className="fourthCard-secion">
            <div className="fourthCard-secion-title">AI客服聊天实例</div>
            <ChatImage />
          </div>
        </FullScreenSection>
        <FullScreenSection backgroundColor="#fafafe">
          <div className="fourthCard-secion">
            <div className="fourthCard-secion-title" style={{ textAlign: "left" }}>
              合作客户
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={customer} alt="customer" style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
        </FullScreenSection>
        <FullScreenSection backgroundColor="#fff">
          <LearnAbout />
        </FullScreenSection>
      </main>
    </div>
  );
}

export default App;
