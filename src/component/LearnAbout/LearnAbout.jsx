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
      desc: "我们的AI客服系统可以实现全天候自动回复、智能问答、客户信息收集、订单处理、预约安排等功能，支持多平台接入，大幅提升客服效率和用户体验。",
    },
    {
      title: "是否支持对接微信、抖音、小红书等平台？",
      desc: "是的，我们支持微信公众号、企业微信、抖音、小红书、淘宝、京东等主流平台的API对接，实现统一的客服管理和数据分析。",
    },
    {
      title: "从部署到上线需要多长时间？",
      desc: "标准部署通常需要1-2周时间，包括系统配置、数据训练、测试调优等环节。定制化需求可能需要2-4周，我们会根据具体情况提供详细的项目时间表。",
    },
    {
      title: "使用AI客服系统是否需要预付费？",
      desc: "我们提供灵活的付费模式，包括按月订阅、按年付费等方案。新客户可享受免费试用期，具体费用根据功能需求和使用规模而定，欢迎联系我们获取报价。",
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
