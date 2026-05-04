import { BottomClouds } from "./bottomClouds";
import ContactForm from "./ContactForm";
import "../../App.css"
import Footer from "../Footer";



export default function ContactMeSection(){

return(

<section id="contactMe" className="contactMe" style= {{flexDirection: "column"}}>
          <BottomClouds/>
          <section className="heroBottom" style={{paddingTop: "10vh"}}>
              <div className="ContactPlaceholder" style={{ marginTop:"10vh", display:"flex", flexDirection: "column", textAlign:"left", alignItems:"flex-start"}}>
                <p className="subheading" style={{color: "var(--myBrown)"}}>
                  <b>Contact Me !</b>
                </p>
                <br></br>
                <p style={{color: "var(--myDirtyAntique)", fontSize:"24px"}}>
                  I would love to hear from you, whether youre a recruiter, have a project idea, or just want to be friends ! :D
                </p>
                <br></br>
                <p style={{color: "var(--myDirtyAntique)", fontSize:"20px", textAlign:"left"}}>
                  email me @ Selinbacaz@gmail.com
                </p>
              </div>

              <div className="heroText" >
                <ContactForm></ContactForm>
              </div>
        
          </section><Footer></Footer>
        </section>


);


}