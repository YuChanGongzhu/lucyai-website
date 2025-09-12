import FullScreenSection from "@/components/FullScreenSection/FullScreenSection";
import customer from "@/assets/customer.png";

const Customers = () => {
  return (
    <FullScreenSection backgroundColor="#fafafe">
      <div className="fourthCard-secion">
        <div className="fourthCard-secion-title" style={{ textAlign: "left" }}>
          合作客户
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={customer} alt="customer" style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </FullScreenSection>
  );
};

export default Customers;
