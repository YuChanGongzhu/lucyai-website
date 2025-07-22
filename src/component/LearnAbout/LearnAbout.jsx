import addIcon from "../../assets/add.png";
import { useState } from "react";
import reduceIcon from "../../assets/reduce.png";
import "./LearnAbout.css";

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
      desc: "",
    },
    {
      title: "是否支持对接微信、抖音、小红书等平台？",
      desc: "",
    },
    {
      title: "从部署到上线需要多长时间？",
      desc: "",
    },
    {
      title: "使用AI客服系统是否需要预付费？",
      desc: "",
    },
  ];

  return (
    <div className="learn-about-container">
      <div className="learn-about-title">
        <h2 className="learn-about-title-text1">了解更多</h2>
        <h2 className="learn-about-title-text1">关于</h2>
        <h2 className="learn-about-title-text2">LucyAI</h2>
      </div>
      <div className="learn-about-list">
        {whatDolist.map((item, index) => (
          <div key={item.title} className="learn-about-list-container">
            <div className="learn-about-list-title" onClick={() => toggleItem(index)}>
              <span>{item.title}</span>
              <img
                src={openItems[index] ? reduceIcon : addIcon}
                alt={openItems[index] ? "收起" : "展开"}
                className={`icon ${openItems[index] ? "rotated" : ""}`}
              />
            </div>
            {openItems[index] && (
              <div className="learn-about-list-desc">{highlightText(item.desc)}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnAbout;
