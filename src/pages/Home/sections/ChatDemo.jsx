import FullScreenSection from "@/components/FullScreenSection/FullScreenSection";
import ChatImage from "@/components/ChatImage";

const ChatDemo = () => {
  return (
    <FullScreenSection backgroundColor="#fafafe">
      <div className="fourthCard-secion">
        <div className="fourthCard-secion-title">AI客服聊天实例</div>
        <ChatImage />
      </div>
    </FullScreenSection>
  );
};

export default ChatDemo;
