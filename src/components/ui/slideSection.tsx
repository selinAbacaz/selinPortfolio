
import {slideText, slideTitle} from "./slideText"
import Goldfish from '../../images/GoldfishBrain.png'
import GardenPLot from '../../images/GardenPlot.png'
import CascadeCasa from '../../images/CascadeCasa.png'
import CareerChef from '../../images/CareerChef.png'
import Glide from "@glidejs/glide"
import { useRef, useState, useEffect } from "react"
import '@glidejs/glide/dist/css/glide.core.min.css';
declare module "@glidejs/glide";
import "../../App.css"




export default function SlideSection(){


const glideRef = useRef<Glide | null>(null);
const [index, setIndex] = useState(0);


useEffect(() => {
  const glide = new Glide(".glide", {
    type: "slider",
    startAt: 0,
    perView: 1,
  });

  glide.on("run.after", () => {
    setIndex(glide.index);
  });

  glide.mount();
  glideRef.current = glide;

  const timeout = setTimeout(() => {
    glide.update(); 
  }, 50);

  return () => {
    clearTimeout(timeout);
    glide.destroy();
    glideRef.current = null;
  };
}, []);

const next = () => {
  if (!glideRef.current) return;
  glideRef.current.go(">");
};

const prev = () => {
  if (!glideRef.current) return;
  glideRef.current.go("<");
};

return(

<section id="projects" className="ProjectsBackground" style= {{flexDirection: "column",  alignItems: "center", display: "flex"}}>
          <div id="FeaturedPortfolio" style={{top: 0, fontSize: "4vw", color: "var(--myDarkGreen)", display: "flex", justifyContent: "center", alignItems: "center" }}> Featured Projects</div>
          <hr style={{color: "var(--myBrown)", backgroundColor:"var(--myBrown)", borderColor: "var(--myBrown)", height: ".1vw", marginBottom: "1vw", width: "80%", margin: "0 auto 1vw auto", display: "flex" }}></hr>
            <section className= "small" style={{ display: "flex", width: "94vw", height: "70vh", justifyContent: "center", alignItems: "flex-start", flexDirection: "row", gap: "1vw", marginTop: "1vw"}}>
              <div style={{flexDirection: "column", display: "flex", width: "80vw", height: "100%", justifyContent: "center", alignItems: "center", }}>
                <div className='bg-(--myDarkGreen)/40' style={{height:"90%", width: "80%", borderRadius: "4vw", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column"}}>
                  <div style={{marginTop: "2.4vw", overflowY:"scroll", paddingLeft: "2vw", paddingRight: "2vw", marginRight: "1vw", marginBottom: "2vw"}}>
                    
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", textAlign:"center", fontSize: "2.8vw", color: "var(--myDirtyAntique)", marginBottom: ".5vw"}}><b>{slideTitle[index]}</b></div>
                  
                    <div style={{display: "flex", justifyContent: "flex-start", alignItems: "flex-start", fontSize: "1.2vw", color: "var(--myBrown)", textAlign:"justify", whiteSpace: "pre-line"}} > {slideText[index]} </div></div>
                    


                  </div>

              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                  height: "95%",
                  justifyContent: "center",
                  alignItems: "center",
                  
                }}
              >
                <div style={{display: "flex",
                  flexDirection: "column",
                  width: "90%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",}}>
                  <div className="glide" style={{ width: "100%", height: "75%" }}>
                    <div className="glide__track" data-glide-el="track" style={{ height: "100%", borderRadius:"4.2vw"  }}>
                      <ul className="glide__slides" style={{ height: "100%",  padding: 0, margin: 0}}>
                        <li className="glide__slide photos" style={{background: "pink" }}   > 
                          <div style={{width: "100%", height:"100%", cursor: "pointer"}} onClick={() => window.open("https://goldfish-brain.luckyman30.workers.dev/", "_blank")}><img src={Goldfish} alt='GoldfishBrain title page, it has 2 big buttons- to go to the pond or to create a list of tasks'/></div> </li>
                        <li className="glide__slide photos" style={{ background: "black" }}> <div style={{width: "100%", height:"100%", cursor: "pointer"}} onClick={() => window.open("https://selinabacaz.github.io/starter_helpi/", "_blank")}> <img src={CareerChef} alt= 'CareerChef home page, it showcases a nav bar, an infographic, and 2 buttons leading the user to a basic or detailed quiz'/></div> </li>
                        <li className="glide__slide photos" style={{background: "orange" }}><div style={{width: "100%", height:"100%", cursor: "pointer"}} onClick={() => window.open("https://youtu.be/8y7Pyw7kGuI", "_blank")}><img src={GardenPLot} alt='Several GardenPlot Planner pages on a virtual phone. The Title screen, home page, individual plant, and all plants page is shown'/></div> </li>
                        <li className="glide__slide photos" style={{ background: "yellow" }}><div style={{width: "100%", height:"100%", cursor: "pointer"}} onClick={() => window.open("https://jaredmiller219.github.io/CascadeCasa/", "_blank")}><img src={CascadeCasa} alt='CascadeCasa level interface, it showcases the main interactive game mechanic which is the book you use to correct CSS code'/></div> </li>
                      </ul>
                    </div>

                    {/* custom controls */}
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1.2vw" }}>
                      <button className="glide__arrow hover:bg-[#915C27]" onClick={prev} style={{ fontSize: "3vw" }}>&lt;</button>

                        <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
                            {slideText.map((_, i) => (
                              <div
                                key={i}
                                onClick={() => glideRef.current?.go(`=${i}`)}
                                style={{
                                  width: ".8vw",
                                  height: ".8vw",
                                  borderRadius: "50%",
                                  backgroundColor: i === index ? "var(--myBrown)" : "var(--myDirtyAntique)",
                                  cursor: "pointer",
                                  transition: "0.2s",
                                }}
                              />
                            ))}
                          </div>

                      <button className="glide__arrow" onClick={next} style={{ fontSize: "3vw" }}>&gt;</button>
                    </div>
                  </div>

                </div>

              </div>

            </section>
            

        </section>


    
);


}