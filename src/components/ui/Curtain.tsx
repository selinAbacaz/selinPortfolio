import { useState, useEffect } from "react";
import "./Curtain.css";

export default function Curtain() {



const [width, setWidth] = useState(0); 

useEffect(() => {
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  handleResize();

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

const pillarWidth = width / 12;

return(

    
    <div className="backgroundBody" >
            <div style={{display:"flex", flexDirection:"row"}}>
                <div style= {{height: "68vw", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>
                <div style= {{height: "60vw", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>
                <div style= {{height: "53vw", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>
                <div style= {{height: "50vw", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>

            </div>
            <div style={{display:"flex", flexDirection:"row"}}>
                <div style= {{height: "46vw", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>
                <div style= {{height: "42vw", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>
                <div style= {{height: "42vw", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>
                <div style= {{height: "46vw", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>

            </div>
            <div style={{display:"flex", flexDirection:"row"}}>
                <div style= {{height: "50vw", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px" }}></div>
                <div style= {{height: "53vw", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>
                <div style= {{height: "60vw", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>
                <div style= {{height: "68vw", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>

            </div>
    </div>



);



}
