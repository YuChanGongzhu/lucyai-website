import FullScreenSection from "@/components/FullScreenSection/FullScreenSection";
import ProductGrid from "@/components/ProductGrid/ProductGrid";

const Features = () => {
  return (
    <FullScreenSection backgroundColor="#fafafe">
      <div className="second-section">
        <div className="second-section-title">LucyAI能为你做什么</div>
        <ProductGrid />
      </div>
    </FullScreenSection>
  );
};

export default Features;
