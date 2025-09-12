import FullScreenSection from "@/components/FullScreenSection/FullScreenSection";
import Button from "@/components/Button/Button";
import backgroundImg from "@/assets/bg.svg";

const Hero = () => {
  return (
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
  );
};

export default Hero;
