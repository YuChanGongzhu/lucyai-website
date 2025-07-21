// ProductGrid.jsx
import ProductItem from "./ProductItem";
import "./ProductGrid.css";
import lucyAI from "../../assets/lucyAI_logo.png";
import lbsPicture from "../../assets/lbs_picture.png";
const features = [
  {
    id: 1,
    title: "AI自动获客",
    icon: "☀️",
    desc: "从抖音、小红书等平台自动筛选评论用户，AI智能获取潜在客户。实现线索筛选提高百倍，获客成本降低70%",
    img: "",
    type: "default",
  },
  {
    id: 2,
    title: "智能导购与客服",
    icon: "⭐",
    desc: "从首次接触到成交转化，AI客服95%人对话，支持高品质客服，活动介绍、优惠发放、企业微信引导等多项操作，全流程接待无需人工介入",
    img: "",
    type: "default",
  },
  {
    id: 3,
    title: "私域社群裂变",
    icon: "💬",
    desc: "在用户对话中自动发起拉新活动、软文介绍、红包激励等互动行为，引导用户转发、进群，提升用户粘性和新增转化率",
    img: "",
    type: "default",
  },

  {
    id: 4,
    title: "用户画像与CRM管理",
    icon: "📊",
    desc: "系统通过用户对话内容与朋友圈数据，构建高精度用户画像，支持基于RFM模型自动分层，并保持个性化运营策略推荐，助力企业高效维护客户关系，提升复购与满意度",
    img: lucyAI,
    type: "wide-card", // 宽卡片
  },
  {
    id: 5,
    title: "AI直播导购系统",
    icon: "📺",
    desc: '在直播前中后阶段，系统通过用户行为分析与直播内容配置，完成邀约推荐、互动转化与后续跟进，助力企业提升直播成交效率，实现"直播+私域"的自动化整合',
    img: "",
    type: "default", // 紫色特色卡片
  },
];
const colImageCard = [
  {
    id: 1,
    title: "LBS 定位引流",
    icon: "🔒",
    desc: "结合高德地图API，系统可根据用户地理位置智能推荐本地门店与营销活动，并提供导航链接，提升线下场景的引流效果，适用于本地生活、医疗、商业地产等垂直场景",
    img: lbsPicture,
    type: "image-card-right", // 右边带图片的卡片
  },
];
const ProductGrid = () => {
  return (
    <div className="product-grid-container">
      <div className="product-grid-wrapper">
        <div className="product-grid">
          {features.map((feature) => (
            <ProductItem key={feature.id} feature={feature} />
          ))}
        </div>
        <div className="product-grid-sidebar">
          <ProductItem feature={colImageCard[0]} />
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
