import dataPicture1 from "../../assets/data-picture1.png";
import dataPicture2 from "../../assets/data_picture2.png";
import dataPicture3 from "../../assets/data-picture3.png";
import CardItm from "./CardItm";
import "./FourthCard.css";

const cardData = [
  {
    id: 1,
    title: "获客响应速度提升",
    icon: dataPicture1,
    stats: [
      { label: "介入前", value: "平均响应时间 > 6小时" },
      { label: "介入后", value: "响应时间 < 1分钟" },
    ],
    description: "AI全天候监控平台评论与私信，实时互动不遗漏，高效捕获潜在客户",
  },
  {
    id: 2,
    title: "用户转化率成倍增长",
    icon: dataPicture2,
    stats: [
      { label: "介入前", value: "平均转化率 5%~10%" },
      { label: "介入后", value: "转化率提升至 50%~300%" },
    ],
    description: "95%拟人AI客服自动引导成交，结合用户画像推荐产品，极大提升转化效率",
  },
  {
    id: 3,
    title: "人效产出提升",
    icon: dataPicture3,
    stats: [
      { label: "介入前", value: "人力慢、成本高" },
      { label: "介入后", value: "产出效率提升 10 倍以上" },
    ],
    description: "AI+RPA自动化联动，从线索挖掘到客户维护全流程闭环，释放人力、提升回报",
  },
];

const FourthCard = () => {
  return (
    <div className="fourth-card-container">
      {cardData.map((item) => (
        <CardItm key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FourthCard;
