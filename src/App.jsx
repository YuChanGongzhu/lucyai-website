import { useState, useEffect, useCallback, useRef } from "react";
import Header from "./component/Header/Header";
import FullScreenSection from "./component/FullScreenSection/FullScreeenSection";
import ProductGrid from "./component/ProductGrid/ProductGrid";
import "./App.css";
import backgroundImg from "./assets/bg.svg";
import Button from "./component/Button/Button";
import ThirdCard from "./component/ThirdCard/ThirdCard";
import FourthCard from "./component/FourthCard/FourthCard";
import FifthCard from "./component/FifthCard/FifthCard";
import ChatImage from "./component/ChatImage/index";
import LearnAbout from "./component/LearnAbout/LearnAbout";
import Contact from "./component/LearnAbout/Contact/index";
import customer from "./assets/customer.png";

function App() {
  const sectionsRef = useRef([]);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  // 添加缺失的状态声明
  const [activeSection, setActiveSection] = useState(0);

  // 优化的节流滚动事件处理
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // 如果滚动距离很小，跳过处理（减少不必要的计算）
    if (Math.abs(currentScrollY - lastScrollY.current) < 5) {
      return;
    }

    if (!ticking.current) {
      requestAnimationFrame(() => {
        let currentSection = 0;
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;

        // 使用缓存的section引用，避免重复查询DOM
        sectionsRef.current.forEach((section, index) => {
          if (section) {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + scrollPosition;
            const sectionBottom = sectionTop + rect.height;

            // 更精确的section激活判断
            if (
              scrollPosition >= sectionTop - windowHeight / 3 &&
              scrollPosition < sectionBottom - windowHeight / 3
            ) {
              currentSection = index;
            }
          }
        });

        setActiveSection(currentSection);
        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  // 优化的useEffect，添加防抖和更好的清理
  useEffect(() => {
    // 延迟初始化，确保DOM完全加载
    const initializeSections = () => {
      sectionsRef.current = Array.from(document.querySelectorAll(".full-screen-section"));
    };

    // 使用setTimeout确保DOM渲染完成
    const timeoutId = setTimeout(initializeSections, 100);

    // 使用passive监听器提升性能，并添加capture选项
    const scrollOptions = { passive: true, capture: false };

    window.addEventListener("scroll", handleScroll, scrollOptions);

    // 清理函数
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll, scrollOptions);
      // 重置refs
      ticking.current = false;
    };
  }, [handleScroll]);

  // 添加窗口大小变化处理
  useEffect(() => {
    const handleResize = () => {
      // 窗口大小变化时重新计算section位置
      sectionsRef.current = Array.from(document.querySelectorAll(".full-screen-section"));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              <span className="thridCard-section-first-Bottomtext">以复制的智能营销增长系统</span>
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
        <FullScreenSection backgroundColor="#fafafe">
          <LearnAbout />
        </FullScreenSection>
        <FullScreenSection backgroundColor="#fafafe">
          <img src={backgroundImg} alt="background" className="background-img" />
          <Contact />
        </FullScreenSection>
      </main>
    </div>
  );
}

export default App;
