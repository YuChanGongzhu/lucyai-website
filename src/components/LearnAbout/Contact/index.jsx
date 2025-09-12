import styles from "./index.module.css";
import lucyFont from "../../../assets/LucyAI_Font.png";
import lucyLogo from "../../../assets/lucyAI_logo_purple.png";
import wechat from "../../../assets/wecaht.png";

const Contact = () => {
  return (
    <div className={styles["contact-container"]}>
      <div className={styles["contact-header"]}>
        <img className={styles["logo-icon"]} src={lucyLogo} />
        <img className={styles["logo-text"]} src={lucyFont} />
      </div>

      <div className={styles["contact-content"]}>
        <div className="contact-left">
          <h3 className={styles["contact-title"]}>准备好开启智能增长了吗？</h3>
          <p className={styles["contact-description"]}>
            欢迎联系我们，了解更多项目合作细节，一起探索如何用AI客服助力您的业务增长。
          </p>
        </div>

        <div className={styles["contact-right"]}>
          <div className={styles["contact-info"]}>
            <h4 className={styles["contact-info-title"]}>联系我们</h4>
            <div className={styles["contact-item"]}>
              <span className={styles["contact-label"]}>邮箱：</span>
              <span className={styles["contact-value"]}>lucy@lucyai.ai</span>
            </div>
            <div className={styles["contact-item"]}>
              <span className={styles["contact-label"]}>手机：</span>
              <span className={styles["contact-value"]}>13928871826（微信同号）</span>
            </div>
          </div>

          <div className={styles["contact-qrcode"]}>
            <img src={wechat} className={styles["wechat-qrcode"]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
