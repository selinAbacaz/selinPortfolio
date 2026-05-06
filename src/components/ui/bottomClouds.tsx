import { useEffect, useRef, useState } from "react";
import "./clouds.css";

export const BottomClouds = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);
  

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setHeight(entry.contentRect.height);
        
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const columns = new Array(14).fill(0);
  

  return (
    <div
      ref={containerRef}
      style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    zIndex: 1,
    overflowX: "hidden",
  }}
    >
      {columns.map((_, i) => (
        <div
          key={i}
          style={{
            width: "200px",
            height: height * 0.8, 
            borderTopRightRadius: "180px",
            borderTopLeftRadius: "180px",
            backgroundColor: "var(--myDarkGreen)",
            marginLeft: i === 0 ? "0px" : "-60px"
            
          }}
        />
      ))}
    </div>
  );
};