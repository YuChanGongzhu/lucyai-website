import "./index.css";
import lucyFont from "../../../assets/LucyAI_Font.png";
import lucyLogo from "../../../assets/lucyAI_logo_purple.png";
import wechat from "../../../assets/wecaht.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <img className="logo-icon" src={lucyLogo} />
        <img className="logo-text" src={lucyFont} />
      </div>

      <div className="contact-content">
        <div className="contact-left">
          <h3 className="contact-title">准备好开启智能增长了吗？</h3>
          <p className="contact-description">
            欢迎联系我们，了解更多项目合作细节，一起探索如何用AI客服助力您的业务增长。
          </p>
        </div>

        <div className="contact-right">
          <div className="contact-info">
            <h4 className="contact-info-title">联系我们</h4>
            <div className="contact-item">
              <span className="contact-label">邮箱：</span>
              <span className="contact-value">lucy@lucyai.ai</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">手机：</span>
              <span className="contact-value">13928871826（微信同号）</span>
            </div>
          </div>

          <div className="contact-qrcode">
            <img src={wechat} className="wechat-qrcode" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
