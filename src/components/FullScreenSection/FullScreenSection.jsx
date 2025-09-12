import { useEffect, useRef, useState } from "react";
import styles from "./FullScreenSection.module.css";

const FullScreenSection = ({ children, backgroundColor, className = "" }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={[styles["full-screen-section"], isVisible ? styles["visible"] : "", className]
        .filter(Boolean)
        .join(" ")}
      style={{ backgroundColor }}
    >
      <div className={styles["section-content"]}>{children}</div>
    </section>
  );
};

export default FullScreenSection;
