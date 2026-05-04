
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
          <div id="FeaturedPortfolio" style={{top: 0, fontSize: "45px", color: "var(--myDarkGreen)", display: "flex", justifyContent: "center", alignItems: "center" }}> Featured Projects</div>
          <hr style={{color: "var(--myBrown)", backgroundColor:"var(--myBrown)", borderColor: "var(--myBrown)", height: "2px", marginBottom: "20px", width: "80%", margin: "0 auto 20px auto", display: "flex" }}></hr>
            <section className= "small" style={{ display: "flex", width: "94vw", height: "70vh", justifyContent: "center", alignItems: "flex-start", flexDirection: "row", gap: "20px", marginTop: "20px"}}>
              <div style={{flexDirection: "column", display: "flex", width: "80vw", height: "100%", justifyContent: "center", alignItems: "center", }}>
                <div className='bg-(--myDarkGreen)/40' style={{height:"90%", width: "80%", borderRadius: "60px", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column"}}>
                  <div style={{marginTop: "40px", overflowY:"scroll", paddingLeft: "2vw", paddingRight: "2vw", marginRight: "1vw", marginBottom: "2vw"}}>
                    
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", textAlign:"center", fontSize: "28px", color: "var(--myDirtyAntique)", marginBottom: "10px"}}><b>{slideTitle[index]}</b></div>
                  
                    <div style={{display: "flex", justifyContent: "flex-start", alignItems: "flex-start", fontSize: "20px", color: "var(--myBrown)", textAlign:"justify", whiteSpace: "pre-line"}} > {slideText[index]} </div></div>
                    


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
                    <div className="glide__track" data-glide-el="track" style={{ height: "100%", borderRadius:"60px"  }}>
                      <ul className="glide__slides" style={{ height: "100%",  padding: 0, margin: 0}}>
                        <li className="glide__slide photos" style={{background: "pink" }}   > 
                          <div style={{width: "100%", height:"100%", cursor: "pointer"}} onClick={() => window.open("https://f25-cisc474-red.bnauta0.workers.dev/", "_blank")}><img src={Goldfish} alt='GoldfishBrain title page, it has 2 big buttons- to go to the pond or to create a list of tasks'/></div> </li>
                        <li className="glide__slide photos" style={{ background: "black" }}> <div style={{width: "100%", height:"100%", cursor: "pointer"}} onClick={() => window.open("https://selinabacaz.github.io/starter_helpi/", "_blank")}> <img src={CareerChef} alt= 'CareerChef home page, it showcases a nav bar, an infographic, and 2 buttons leading the user to a basic or detailed quiz'/></div> </li>
                        <li className="glide__slide photos" style={{background: "orange" }}><div style={{width: "100%", height:"100%", cursor: "pointer"}} onClick={() => window.open("https://youtu.be/8y7Pyw7kGuI", "_blank")}><img src={GardenPLot} alt='Several GardenPlot Planner pages on a virtual phone. The Title screen, home page, individual plant, and all plants page is shown'/></div> </li>
                        <li className="glide__slide photos" style={{ background: "yellow" }}><div style={{width: "100%", height:"100%", cursor: "pointer"}} onClick={() => window.open("https://jaredmiller219.github.io/CascadeCasa/", "_blank")}><img src={CascadeCasa} alt='CascadeCasa level interface, it showcases the main interactive game mechanic which is the book you use to correct CSS code'/></div> </li>
                      </ul>
                    </div>

                    {/* custom controls */}
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                      <button className="glide__arrow" onClick={prev} style={{ fontSize: 40 }}>&lt;</button>

                        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            {slideText.map((_, i) => (
                              <div
                                key={i}
                                onClick={() => glideRef.current?.go(`=${i}`)}
                                style={{
                                  width: "10px",
                                  height: "10px",
                                  borderRadius: "50%",
                                  backgroundColor: i === index ? "var(--myBrown)" : "var(--myDirtyAntique)",
                                  cursor: "pointer",
                                  transition: "0.2s",
                                }}
                              />
                            ))}
                          </div>

                      <button className="glide__arrow" onClick={next} style={{ fontSize: 40 }}>&gt;</button>
                    </div>
                  </div>

                </div>

              </div>

            </section>
            

        </section>


    
);


}