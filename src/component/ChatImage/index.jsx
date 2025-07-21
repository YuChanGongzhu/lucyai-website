import aichat from "../../assets/AIchat.png";
import aichat1 from "../../assets/AIchat1.png";
import aichat2 from "../../assets/AIchat2.png";
import aichat3 from "../../assets/AIchat3.png";
import aichat4 from "../../assets/AIchat4.png";
import aichat5 from "../../assets/AIchat5.png";
import aichat6 from "../../assets/AIchat6.png";
import aichat7 from "../../assets/AIchat7.png";
const styles = {
  chatContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  chatTop: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chatBottom: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chatTopImage: {
    width: "192px",
    height: "415px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
  },
  chatBottomImage: {
    width: "344px",
    height: "229px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
  },
};
const ChatImage = () => {
  return (
    <div style={styles.chatContainer}>
      <div style={styles.chatTop}>
        <img src={aichat} alt="aichat" style={styles.chatTopImage} />
        <img src={aichat1} alt="aichat1" style={styles.chatTopImage} />
        <img src={aichat2} alt="aichat2" style={styles.chatTopImage} />
        <img src={aichat3} alt="aichat3" style={styles.chatTopImage} />
        <img src={aichat4} alt="aichat4" style={styles.chatTopImage} />
      </div>
      <div style={styles.chatBottom}>
        <img src={aichat5} alt="aichat5" style={styles.chatBottomImage} />
        <img src={aichat6} alt="aichat6" style={styles.chatBottomImage} />
        <img src={aichat7} alt="aichat7" style={styles.chatBottomImage} />
      </div>
    </div>
  );
};

export default ChatImage;
