import { useState, useEffect } from "react";
import "./clouds.css"





export const CloudColumns = () => {


  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pillarWidth = width / 2;

  const styles: Record<string, React.CSSProperties> = {
    wrapper: {
      position: "absolute",
      
      left: 0,
      width: "100vw",
      height: "fit-content",
      display: "flex",
      alignItems: "flex-end",
      zIndex: 1,
      overflowX: "hidden",
      maxWidth: "100vw",
    },

    cloud: {
      width: pillarWidth,
      height: "50vw",
      borderBottomRightRadius: "180px",
      borderBottomLeftRadius: "180px",

      marginLeft: "-60px",
      transform: "translateY(-120%)",
      animation: "dropIn 0.6s ease forwards",
    },
  };

  const columns = new Array(14).fill(0);
  const colors = ['--myYellow', '--myOrange', '--myLightGreen']

  return (
    <div style={styles.wrapper}>
      {columns.map((_, i) => (
        <div
          key={i}
          style={{
            ...styles.cloud,
            background: `var(${colors[i] ?? '--myDarkGreen'})`,
            animationDelay: `${i * 0.08}s`, 
            
          }}
        />
      ))}
    </div>
  );
};