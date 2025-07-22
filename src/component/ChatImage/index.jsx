import aichat from "../../assets/AIchat.png";
import aichat1 from "../../assets/AIchat1.png";
import aichat2 from "../../assets/AIchat2.png";
import aichat3 from "../../assets/AIchat3.png";
import aichat4 from "../../assets/AIchat4.png";
import aichat5 from "../../assets/AIchat5.png";
import aichat6 from "../../assets/AIchat6.png";
import aichat7 from "../../assets/AIchat7.png";
import "./ChatImage.css";

const ChatImage = () => {
  return (
    <div className="chat-container">
      <div className="chat-top">
        <img src={aichat} alt="aichat" className="chat-top-image" />
        <img src={aichat1} alt="aichat1" className="chat-top-image" />
        <img src={aichat2} alt="aichat2" className="chat-top-image" />
        <img src={aichat3} alt="aichat3" className="chat-top-image" />
        <img src={aichat4} alt="aichat4" className="chat-top-image" />
      </div>
      <div className="chat-bottom">
        <img src={aichat5} alt="aichat5" className="chat-bottom-image" />
        <img src={aichat6} alt="aichat6" className="chat-bottom-image" />
        <img src={aichat7} alt="aichat7" className="chat-bottom-image" />
      </div>
    </div>
  );
};

export default ChatImage;
