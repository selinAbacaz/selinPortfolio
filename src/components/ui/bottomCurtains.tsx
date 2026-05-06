import { useState, useEffect } from "react";
import "./BottomCurtain.css";

export default function BottomCurtain() {



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

    
    <div className="myBackgroundBody" >
            <div style={{display:"flex", flexDirection:"row", alignItems: "flex-end"}}>
                <div style= {{height: "450px",width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderTopLeftRadius: "60px", borderTopRightRadius: "60px"}}></div>
                <div style= {{height: "350px", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderTopLeftRadius: "60px", borderTopRightRadius: "60px"}}></div>
                <div style= {{height: "250px", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderTopLeftRadius: "60px", borderTopRightRadius: "60px"}}></div>
                <div style= {{height: "200px", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderTopLeftRadius: "60px", borderTopRightRadius: "60px"}}></div>

            </div>
            
    </div>



);



}
