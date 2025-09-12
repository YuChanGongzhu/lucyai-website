import FullScreenSection from "@/components/FullScreenSection/FullScreenSection";
import ThirdCard from "@/components/ThirdCard/ThirdCard";
import Button from "@/components/Button/Button";

const WhyChoose = () => {
  return (
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
  );
};

export default WhyChoose;
