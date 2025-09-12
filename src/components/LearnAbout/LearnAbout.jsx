import addIcon from "../../assets/add.png";
import { useState } from "react";
import reduceIcon from "../../assets/reduce.png";
import styles from "./LearnAbout.module.css";

const LearnAbout = () => {
  const [openItems, setOpenItems] = useState({});

  const highlightText = (text) => {
    const parts = text.split(/(lucy@lucyai\.ai|13590115400)/g);
    return parts.map((part, index) =>
      part.match(/(lucy@lucyai\.ai|13590115400)/) ? (
        <span key={index} className="highlight-text">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const whatDolist = [
    {
      title: "我如何联系LucyAI团队？",
      desc: `您可以通过官网表单联系我们，或发送邮件至lucy@lucyai.ai、手机/微信：13590115400。我们通常在 24 小时内响应，欢迎随时咨询产品、合作或预约演示。`,
    },
    {
      title: "你们的AI客服系统可以做什么？",
      desc: "我们可以实现7*24小时智能回复、自动导购推荐、私域引流、社群裂变、会员管理等功能，帮助您提升转化率、降低人工成本。",
    },
    {
      title: "是否支持对接微信、抖音、小红书等平台？",
      desc: "支持。目前系统已全面接入抖音、小红书、微信/企业微信等平台，可实现多账号自动化运营与私域沉淀。",
    },
    {
      title: "从部署到上线需要多长时间？",
      desc: "最快1-3天即可上线，系统部署流程简单，后期全自动运行，无需额外人工干预。",
    },
    {
      title: "使用AI客服系统是否需要预付费？",
      desc: "我们支持按需定制，具体费用视功能模块和服务内容而定，欢迎联系我们获取演示和报价方案。",
    },
  ];

  return (
    <div className={styles["learn-about-container"]}>
      <div className={styles["learn-about-title"]}>
        <h2 className={styles["learn-about-title-text1"]}>了解更多</h2>
        <h2 className={styles["learn-about-title-text1"]}>关于</h2>
        <h2 className={styles["learn-about-title-text2"]}>LucyAI</h2>
      </div>
      <div className={styles["learn-about-list"]}>
        {whatDolist.map((item, index) => (
          <div key={item.title} className={styles["learn-about-list-container"]}>
            <div className={styles["learn-about-list-title"]} onClick={() => toggleItem(index)}>
              <span>{item.title}</span>
              <img
                src={openItems[index] ? reduceIcon : addIcon}
                alt={openItems[index] ? "收起" : "展开"}
                className={`${styles.icon} ${openItems[index] ? styles.rotated : ""}`}
              />
            </div>
            {openItems[index] && (
              <div className={styles["learn-about-list-desc"]}>{highlightText(item.desc)}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnAbout;
