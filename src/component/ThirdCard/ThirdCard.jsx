import "./ThirdCard.css";
import rightIcon from "../../assets/thrid-second-right.png";
import CardItem from "./CardItem";
const ItemList = [
  {
    title: "全链路自动化执行",
    content:
      "从线索捕捉、互动导流、销售转化到复购裂变，系统融合 AI + RPA 技术，实现业务流程的端到端闭环自动执行，显著提升执行效率与运营稳定性",
    icon: rightIcon,
  },
  {
    title: "支持数据沉淀与持续进化",
    content:
      "每一次用户交互都沉淀为专属数据资产，支持用户画像实时更新、RFM模型自动分层、对话策略动态优化，构建可持续增强的数据壁垒 ",
    icon: rightIcon,
  },
  {
    title: "多模型融合调度",
    content:
      "集成 GPT、Gemini、Claude、DeepSeek 等主流大模型，配合自研智能调度算法，根据业务场景动态切换模型，保障对话理解的精准性与反应的实时性 ",
    icon: rightIcon,
  },
  {
    title: "结合多模态与LBS能力",
    content:
      "支持文本、语音、图像、视频等多形式交互，同时结合高德地图API实现本地用户精准触达与导航引导，为线下门店/实体业务提供即时转化支持 ",
    icon: rightIcon,
  },
  {
    title: "拟人式智能对话",
    content:
      "从线索捕捉、互动导流、销售转化到复购裂变，系统融合 AI + RPA 技术，实现业务流程的端到端闭环自动执行，显著提升执行效率与运营稳定性",
    icon: rightIcon,
  },

  {
    title: "自研软硬一体系统",
    content:
      "通过AI主机控制4~30部手机设备，实现大规模评论挖掘、自动回评与私信引导，在保障平台规则安全的前提下，大幅提升公域触达与响应能力 ",
    icon: rightIcon,
  },
];
const ThirdCard = () => {
  return (
    <div className="third-card">
      {ItemList.map((item) => {
        return <CardItem key={item.title} item={item} />;
      })}
    </div>
  );
};

export default ThirdCard;
