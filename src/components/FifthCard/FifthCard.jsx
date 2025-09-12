import React from "react";
import styles from "./FifthCard.module.css";
import CardItem from "./CardItem";
import RightIcon from "../../assets/thrid-second-right.png";
// 导入图片资源
import commercial from "../../assets/commercial_real_estate.png";
import commercial0 from "../../assets/commercial_real_estate.jpg";
import commercial1 from "../../assets/commercial_real_estate1.png";
import commercial2 from "../../assets/commercial_real_estate2.png";
import commercial3 from "../../assets/commercial_real_estate3.png";
import commercial4 from "../../assets/commercial_real_estate4.png";
import commercial5 from "../../assets/commercial_real_estate5.png";
import commercial6 from "../../assets/commercial_real_estate6.png";
import sunScreen from "../../assets/Sunscreen_products.png";
import sunScreen1 from "../../assets/Sunscreen_products1.png";
import sunScreen2 from "../../assets/Sunscreen_products2.png";
import sunScreen3 from "../../assets/Sunscreen_products3.png";
import sunScreen4 from "../../assets/Sunscreen_products4.png";
import sunScreen5 from "../../assets/Sunscreen_products5.png";
import cline from "../../assets/clineTwo-1.png";
import cline1 from "../../assets/clineTwo-2.png";
import cline2 from "../../assets/clineTwo-3.png";
import cline3 from "../../assets/clineTwo-4.jpg";
import cline4 from "../../assets/clineTwo-5.jpg";
import cline5 from "../../assets/clineTwo-6.png";
import probrotic from "../../assets/Probiotic.png";
import probrotic1 from "../../assets/Probiotic1.png";
import probrotic2 from "../../assets/Probiotic2.jpg";
import probrotic3 from "../../assets/Probiotic3.png";
import probrotic4 from "../../assets/Probiotic4.png";
import probrotic5 from "../../assets/Probiotic5.jpg";
import dudubus from "../../assets/duduBus.png";
const firstCardData = {
  id: 1,
  title: "深圳丽颖丽驻兰医美医院",
  subtitle: "AI获客+AI智慧客服",
  description:
    "AI智慧客服系统，辅助解答用户医美疑问，提供专业建议并引导下单。2024年12月第一个月获客274人，到店并消费36人，变现43.2万",
  stats: [
    { value: "12元/人", label: "获客成本" },
    { value: "15%", label: "微信导流转化率" },
    { value: "108", label: "投资回报率" },
  ],
  images: [
    commercial,
    commercial0,
    commercial1,
    commercial2,
    commercial3,
    commercial4,
    commercial5,
    commercial6,
  ],
  icon: RightIcon,
  type: "incline",
};
const secondCardData = {
  id: 2,
  title: "防晒用品直播",
  subtitle: "",
  description:
    "AI直播导购系统，2024年5月为防晒用品品牌打造直播引流闭环，单月通过专属直播邀约与个性化推荐成功引流至直播间观众1260人，AI私聊触达高意向客户423人，最终引导下单276人，实现直播GMV累计突破13.8万元",
  stats: [
    { value: "21.9%", label: "用户转化率" },
    { value: "360", label: "投资回报率" },
  ],
  images: [sunScreen, sunScreen1, sunScreen2, sunScreen3, sunScreen4, sunScreen5],
  type: "normal",
};
const thirdCardData = {
  id: 3,
  title: "广州商业地产公众号AI客服引流",
  subtitle: "AI获客+AI客服+LBS引导到店",
  description:
    "AI客服系统助力广州某商业地产公众号实现公域引流向私域转化，通过对话中智能识别用户意图，引导添加企业微信，首月公众号粉丝添加率提升30%。同时结合高德地图API精准触达周边3公里内用户，推送优惠活动并引导到店，显著提升线下转化效率，为私域运营积累高质量用户资产。",
  stats: [
    { value: "200%", label: "裂变活动参与增长率" },
    { value: "70%", label: "私域用户增长率" },
    { value: "48%", label: "公域流量转化率" },
    { value: "180%", label: "引流ROI增长率" },
  ],
  images: [cline1, cline5, cline3, cline, cline2, cline4],
  icon: RightIcon,
  type: "incline2",
};
const fourthCardData = {
  id: 4,
  title: "无限极益生菌",
  subtitle: "AI获客+AI客服+私域直播同步导购",
  description:
    "AI客服+私域直播系统助力无限极益生菌，首月引流2000+人，添加微信500+人，获客成本5~6元，成交125单，销售额超5万，转化率25%，ROI突破400%。",
  stats: [
    { value: "5-6元/人", label: "AI获客成本" },
    { value: "500+", label: "私域导流" },
    { value: "25%", label: "AI客服转化率" },
  ],
  images: [probrotic, probrotic1, probrotic2, probrotic3, probrotic4, probrotic5],
  icon: RightIcon,
  type: "normal",
};
const fifthCardData = {
  id: 4,
  title: "嘟嘟巴士",
  subtitle: "AI获客+AI智慧客服",
  description:
    "AI智慧客服系统，辅助识别用户出行意图，自动引导至微信私聊，完成团体包车需求对接与转化。2024年3月至4月，AI系统共捕获有效出行线索1043条，成功引导添加微信612人，成交包车订单46单，累计变现金额超11.6万元",
  stats: [
    { value: "18.9元/人", label: "获客成本" },
    { value: "1043", label: "累计获取意向线索" },
    { value: "7.5%", label: "微信导流转化率" },
  ],
  images: [dudubus],
  icon: RightIcon,
  type: "normal",
};

const FifthCard = ({ order }) => {
  return (
    <div className={styles["fifth-card-container"]}>
      {order === 1 && <CardItem data={firstCardData} />}
      {order === 2 && <CardItem data={secondCardData} />}
      {order === 3 && <CardItem data={thirdCardData} />}
      {order === 4 && <CardItem data={fourthCardData} />}
      {order === 5 && <CardItem data={fifthCardData} />}
      {/* <CardItem data={secondCardData} /> */}
    </div>
  );
};

export default FifthCard;
