import Header from '../src/components/Header'
import './App.css'
import { CloudColumns } from '../src/components/ui/clouds'
import myPicture from '../src/images/MeField.jpg'
import Cat from '../src/images/cat.png'
import Goldfish from '../src/images/GoldfishBrain.png'
import GardenPLot from '../src/images/GardenPlot.png'
import CascadeCasa from '../src/images/CascadeCasa.png'
import CareerChef from '../src/images/CareerChef.png'
import Curtain from '../src/components/ui/Curtain'
import LogoLoop from '../src/components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import '@glidejs/glide/dist/css/glide.core.min.css';
import Glide from "@glidejs/glide";
declare module "@glidejs/glide";
import { useEffect, useRef, useState } from 'react'
import {slideText, slideTitle} from "../src/components/ui/slideText"
import Timeline from "../src/components/ui/timeline"




function App() {


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


  const LOVES: string[] = [
  "Cats",
  "Fine Arts",
  "Philosophy",
  "Nature",
  "My Art Tablet",
  "Designing things!",
  ];

  const Honorables: string[]= [

    "GPA: 3.7",
    "CIS Undergraduate Honorable Mention",
    "Deans List 2022-2026"
  ];





const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];




  
  return (
    <div className="min-h-screen bg-(--myDirtyAntique) relative max-w-screen ">
      <Header />
      <CloudColumns />
      <Curtain />
      <section className="hero" style={{backgroundColor: "#EFD578"}}>
        <div className="photoPlaceholder">
          <img src={myPicture} />
        </div>

        <div className="heroText">
          <h1 className="heading">
            Hello ! <span className="sparkle">✦</span>
          </h1>
          <p className="subheading">
            Welcome to my
            <br />
            Portfolio Website...
          </p>
        </div>
        
      </section>

      <section id="aboutMe" className="aboutMeBackground" style= {{flexDirection: "column"}}>
        <div style={{top: 0, fontSize: "45px", color: "var(--myDarkGreen)", display: "flex", justifyContent: "center" }}> Short Profile</div>
        <hr style={{color: "var(--myBrown)", backgroundColor:"var(--myBrown)", borderColor: "var(--myBrown)", height: "2px", marginBottom: "20px" }}></hr>

        <section className= "small" style={{ display: "flex", width: "100%", height: "60%", justifyContent: "center", flexDirection: "row", gap: "20px"}}>
          <div style={{flexDirection: "column", display: "flex", width: "100%", height: "100%", justifyContent: "flex-start", alignItems: "flex-end"}}>
            <div className='bg-(--myDarkGreen)/39' style= {{width: "60%", height: "75%", borderRadius: "60px", justifyContent: "center", alignItems: "center", display: "flex", marginRight: "10%"}}>
              <div style={{display: "flex", flexDirection: "row", height: "100%", width: "100%"}}>
                <div style={{width: "50%", height: "100%"}}>
                  <img src={Cat}></img>

                </div>
                <div style={{width: "50%", height: "100%", alignItems: "center",justifyContent: "center", display: "flex", flexDirection: "column"}}>

                    <p style={{ color: "var(--myDirtyAntique)", fontSize: "35px", marginRight: "70px"}}><i>Lover of :</i></p>
                  
                    <ul style={{listStyleType: "Disc"}}>
                      {LOVES.map((love, i) => (
                        <li key={i}
                        style={{ color: "var(--myBrown)", marginLeft:"40px", fontSize: "22px"}}
                        >
                          {love}

                          
                        </li>
                      ))}
                    </ul>

                </div>
                  

              </div>
            </div>

            <div className='bg-(--myDarkGreen)/39' style= {{width: "80%", height: "20%", borderRadius: "60px" , justifyContent: "center", alignItems: "center", display: "flex", marginTop: "30px"}}>
              <div style={{display: "flex", flexDirection: "row", height: "100%", width: "100%", justifyContent:"center", alignItems:"center", color: "var(--myBrown)", fontSize: "25px" }}>
                <p>UI/UX Designer, Web Developer <br></br> Frontend Engineer, Digital Illustrator </p>
                
              </div>
            </div>

          </div>


          <div style={{flexDirection: "column", display: "flex", width: "100%", height: "100%", justifyContent: "flex-start", verticalAlign: "top"}}>
            <div className='bg-(--myDarkGreen)/39' style= {{width: "65%", height: "45%", marginRight: "40px", borderRadius: "60px", justifyContent: "center", alignItems: "center", display: "flex"}}>
            
              <div style={{display: "flex", flexDirection: "column", height: "100%", width: "100%", color: "var(--myDirtyAntique)" }}>
                <div style={{marginTop: "5px", marginRight: "40%", justifyContent:"center", alignItems:"baseline", display: "flex", fontSize: "32px"}}> <b> My Daily Tools: </b> </div>
                
                <div style={{display: "flex", height: "100%", width: "100%", justifyContent:"center", alignItems:"center", borderRadius: "45px"}}>
                  <div className= "bg-(--myDirtyAntique)/40" style={{display: "flex",  height: "85%", width: "90%", justifyContent:"center", alignItems:"center",textAlign: "center", alignContent: "center", borderRadius: "35px", color: "var(--myBrown)", fontSize: "28px", flexWrap:"wrap" }}>
                    React, HTML/ CSS, Typescript, Figma, NodeJS, Tanstack, tailwind
                  
                  </div>
                </div>
                

                
              </div>


            </div>

            <div className='bg-(--myDarkGreen)/39' style= {{width: "80%", height: "70%", borderRadius: "60px", justifyContent: "center", alignItems: "center", display: "flex", marginLeft: "10%", marginTop: "20px"}}>
              <div style={{display: "flex", flexDirection: "column", height: "100%", width: "100%", color: "var(--myDirtyAntique)" }}>
                <div style={{marginTop: "20px", marginLeft: "10%", justifyContent:"flex-start", alignItems:"center", display: "flex", fontSize: "32px", color: "var(--myBrown)"}}> <b> Just Graduated ! </b> 
                  <p style={{color: "var(--myDirtyAntique)", fontSize: "24px", fontWeight: "300", marginLeft: "5px"}}><i>U of Delaware</i></p> 
                </div>
                
                <div style={{display: "flex", height: "100%", width: "100%", justifyContent:"center", alignItems:"flex-start", borderRadius: "45px"}}>
                  <div className= "bg-(--myDirtyAntique)/40" style={{display: "flex",  height: "90%", width: "90%", justifyContent:"flex-start", alignItems:"flex-start", borderRadius: "35px", color: "var(--myBrown)", fontSize: "28px", flexWrap:"wrap" }}>
                    <div style={{ marginLeft: "15px"}}>Computer Science BS <br></br>
                      <p style={{fontSize: "24px"}}><i>Minors: Interactive media & Game Studies</i></p>


                      <ul style={{listStyleType: "Disc"}}>
                        {Honorables.map((honor, i) => (
                          <li key={i}
                          style={{ color: "var(--myBrown)", marginLeft:"40px", fontSize: "22px"}}
                          >
                            {honor}

                            
                          </li>
                        ))}
                      </ul>
                    </div>
                  
                  </div>
                </div>
        

        
              </div>
            </div>

          </div>


        </section>
       <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "20%",
          
        }}
        >
          <div
            className='bg-(--myDarkGreen)/39'
            style={{
              width: "90%",
              height: "50%",
              marginTop: "40px",
              borderRadius: "60px",
              alignSelf: "center", 
              position: "relative", overflow: "hidden", display: "flex", alignItems: "center"
            }}
          >
            <LogoLoop
                    logos={techLogos}
                    speed={100}
                    direction="left"
                    logoHeight={60}
                    gap={60}
                    hoverSpeed={0}
                    scaleOnHover              
                    ariaLabel="Technology partners"
                  />

          </div>

          
      </div>
          
  </section>
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
                        <li className="glide__slide photos" style={{background: "pink" }}> <img src={Goldfish} /> </li>
                        <li className="glide__slide photos" style={{ background: "black" }}> <img src={CareerChef} /> </li>
                        <li className="glide__slide photos" style={{background: "orange" }}><img src={GardenPLot} /> </li>
                        <li className="glide__slide photos" style={{ background: "yellow" }}><img src={CascadeCasa} /> </li>
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
        <section id="timeline" className="myTimeline" style= {{flexDirection: "column"}}>
          <div id="FeaturedPortfolio" style={{top: 0, fontSize: "45px", color: "var(--myDarkGreen)", display: "flex", justifyContent: "center",marginTop: "30px", alignItems: "center" }}> My Timeline</div>
          <hr style={{color: "var(--myBrown)", backgroundColor:"var(--myBrown)", borderColor: "var(--myBrown)", height: "2px", marginBottom: "20px", width: "80%", margin: "0 auto 20px auto", display: "flex" }}></hr>
            <section className= "small" style={{ display: "flex", width: "94vw", height: "70vh", justifyContent: "center", alignItems: "flex-start", flexDirection: "row", gap: "20px", marginTop: "20px"}}>
              
              <Timeline></Timeline>
            </section>
        </section>

    </div>
  )
}

export default App;
