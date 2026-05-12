import { useState, useEffect, useRef } from "react";
import "./BottomCurtain.css";

export default function BottomCurtain() {

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0); 
  const pillarWidth = width / 12;


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

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

return(

    <div ref={containerRef} className="myBackgroundBody" >
      
            <div style={{display:"flex", flexDirection:"row", alignItems: "flex-end"}}>
                <div style= {{height: height *.5, width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderTopLeftRadius: "60px", borderTopRightRadius: "60px"}}></div>
                <div style= {{height: height*.4, width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderTopLeftRadius: "60px", borderTopRightRadius: "60px"}}></div>
                <div style= {{height: height*.3, width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderTopLeftRadius: "60px", borderTopRightRadius: "60px"}}></div>
                <div style= {{height: height*.2, width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderTopLeftRadius: "60px", borderTopRightRadius: "60px"}}></div>

            </div>
            
    </div>



);



}

