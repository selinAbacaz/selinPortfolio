import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import LogoLoop from "../LogoLoop";
import Cat from '../../images/cat.png'
import "../../App.css"




export default function AboutMeSection(){

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


return(

<section id="aboutMe" className="aboutMeBackground" style= {{flexDirection: "column"}}>
        <div style={{top: 0, fontSize: "45px", color: "var(--myDarkGreen)", display: "flex", justifyContent: "center" }}> Short Profile</div>
        <hr style={{color: "var(--myBrown)", backgroundColor:"var(--myBrown)", borderColor: "var(--myBrown)", height: "2px", marginBottom: "20px" }}></hr>

        <section className= "small" style={{ display: "flex", width: "100%", height: "60%", justifyContent: "center", flexDirection: "row", gap: "20px"}}>
          <div style={{flexDirection: "column", display: "flex", width: "100%", height: "100%", justifyContent: "flex-start", alignItems: "flex-end"}}>
            <div className='bg-(--myDarkGreen)/39 shadow-md
  transition-transform duration-200
  hover:-translate-y-1
  hover:shadow-xl
  hover:shadow-[#5c350d5d]' style= {{width: "60%", height: "75%", borderRadius: "60px", justifyContent: "center", alignItems: "center", display: "flex", marginRight: "10%"}}>
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

            <div className=' bg-(--myDarkGreen)/39
            shadow-md
            transition-transform duration-200
            hover:-translate-y-1
            hover:shadow-xl
            hover:shadow-[#5c350d5d]' style= {{width: "80%", height: "20%", borderRadius: "60px" , justifyContent: "center", alignItems: "center", display: "flex", marginTop: "30px"}}>
              <div style={{display: "flex", flexDirection: "row", height: "100%", width: "100%", justifyContent:"center", alignItems:"center", color: "var(--myBrown)", fontSize: "25px" }}>
                <p>UI/UX Designer, Web Developer <br></br> Frontend Engineer, Digital Illustrator </p>
                
              </div>
            </div>

          </div>


          <div style={{flexDirection: "column", display: "flex", width: "100%", height: "100%", justifyContent: "flex-start", verticalAlign: "top", }}>
            <div className="
    bg-(--myDarkGreen)/39
    shadow-md
    transition-transform duration-200
    hover:-translate-y-1
    hover:shadow-xl
    hover:shadow-[#5c350d5d]
    
  "
  style={{
    width: "65%",
    height: "45%",
    marginRight: "40px",
    borderRadius: "60px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  }}> 
            <div  style= {{width: "100%", height: "100%",justifyContent: "center", alignItems: "center", display: "flex" }}>
            
              <div style={{display: "flex", flexDirection: "column", height: "100%", width: "100%", color: "var(--myDirtyAntique)" }}>
                <div style={{marginTop: "5px", marginRight: "40%", justifyContent:"center", alignItems:"baseline", display: "flex", fontSize: "32px"}}> <b> My Daily Tools: </b> </div>
                
                <div style={{display: "flex", height: "100%", width: "100%", justifyContent:"center", alignItems:"center", borderRadius: "45px"}}>
                  <div className= "bg-(--myDirtyAntique)/40" style={{display: "flex",  height: "85%", width: "90%", justifyContent:"center", alignItems:"center",textAlign: "center", alignContent: "center", borderRadius: "35px", color: "var(--myBrown)", fontSize: "28px", flexWrap:"wrap" }}>
                    React, HTML/ CSS, Typescript, Figma, NodeJS, Tanstack, tailwind
                  
                  </div>
                </div>
                

                
              </div>
            </div>

            </div>

            <div className='bg-(--myDarkGreen)/39 shadow-md
  transition-transform duration-200
  hover:-translate-y-1
  hover:shadow-xl
  hover:shadow-[#5c350d5d]' style= {{width: "80%", height: "70%", borderRadius: "60px", justifyContent: "center", alignItems: "center", display: "flex", marginLeft: "10%", marginTop: "20px"}}>
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
              marginTop: "80px",
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



);


}