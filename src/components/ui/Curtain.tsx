import { useState, useEffect } from "react";
import "./Curtain.css";

export default function Curtain() {

const LOVES: string[] = [
  "Cats",
  "Fine Arts",
  "Philosophy",
  "Nature",
  "My Art Tablet",
  "Designing things!",
];

const TECH_TAGS: string[] = ["React", "HTML/CSS", "TypeScript", "Node JS"];

const ROLES: { label: string; accent: boolean; italic: boolean }[] = [
  { label: "UI/UX Designer ", accent: false, italic: false },
  { label: "Web Developer ", accent: true, italic: false },
  { label: "Frontend Engineer ", accent: false, italic: false },
  { label: "Illustrator", accent: false, italic: true },
];

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
                <div style= {{height: "1100px", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>
                <div style= {{height: "1000px", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>
                <div style= {{height: "900px", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>
                <div style= {{height: "850px", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>

            </div>
            <div style={{display:"flex", flexDirection:"row"}}>
                <div style= {{height: "750px", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>
                <div style= {{height: "700px", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>
                <div style= {{height: "700px", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>
                <div style= {{height: "750px", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>

            </div>
            <div style={{display:"flex", flexDirection:"row"}}>
                <div style= {{height: "850px", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px" }}></div>
                <div style= {{height: "900px", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>
                <div style= {{height: "1000px", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>
                <div style= {{height: "1100px", width: pillarWidth, backgroundColor: "var(--myLightGreen)", borderBottomLeftRadius: "60px", borderBottomRightRadius: "60px"}}></div>

            </div>
    </div>



);



}
