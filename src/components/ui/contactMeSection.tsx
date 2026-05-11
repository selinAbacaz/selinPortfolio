import { BottomClouds } from "./bottomClouds";
import ContactForm from "./ContactForm";
import "../../App.css"
import Footer from "../Footer";
import BottomCurtain from "./bottomCurtains";



export default function ContactMeSection(){

return(

<section id="contactMe" className="contactMe" style= {{flexDirection: "column", display: "flex"}}>
          <BottomClouds/>
          <div style={{ pointerEvents: "none" }}>
                    <BottomCurtain />
          </div>
          <section className="heroBottom" style={{marginTop: "15vh", marginBottom: "5vh", justifyContent: "center", alignItems: "center"}}>
              <div className="ContactPlaceholder" style={{marginBottom: "10vh", display:"flex", flexDirection: "column", zIndex: "20", textAlign:"left", alignItems:"flex-start"}}>
                <p className="subheading" style={{color: "var(--myBrown)"}}>
                  <b>Contact Me !</b>
                </p>
                <br></br>
                <p style={{color: "var(--myDirtyAntique)", fontSize:"24px"}}>
                  I would love to hear from you, whether youre a recruiter, have a project idea, or just like my portfolio ! :D
                </p>
                <br></br>
                
              </div>

              <div className="heroText" >
                <ContactForm></ContactForm>
              </div>
        
          </section>
          <Footer></Footer>
        </section>


);


}