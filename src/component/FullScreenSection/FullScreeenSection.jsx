import { useEffect, useRef, useState } from 'react';
import './FullScreenSection.css';

const FullScreenSection = ({ 
  children, 
  backgroundColor, 
  className = '' 
}) => {
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
      className={`full-screen-section ${className} ${isVisible ? 'visible' : ''}`}
      style={{ backgroundColor }}
    >
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default FullScreenSection;